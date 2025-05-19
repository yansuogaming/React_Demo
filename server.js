import fs from "node:fs/promises";
import express from "express";
import { Transform } from "node:stream";
import axios from "axios";
import 'dotenv/config'
import cookieParser from 'cookie-parser';

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";
const ABORT_DELAY = 60000;

// Cached production assets
const templateHtml = isProduction
    ? await fs.readFile("./dist/client/index.html", "utf-8")
    : "";

// Create http server
const app = express();
app.use(cookieParser());

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite;
if (!isProduction) {
    const { createServer } = await import("vite");
    vite = await createServer({
        server: { middlewareMode: true },
        appType: "custom",
        base,
    });
    app.use(vite.middlewares);
} else {
    const compression = (await import("compression")).default;
    const sirv = (await import("sirv")).default;
    app.use(compression());
    app.use(base, sirv("./dist/client", { extensions: [] }));
}

// Serve HTML
app.use("*all", async (req, res) => {
    if (req.originalUrl.startsWith('/admin')) {
        const token = req.cookies['token']
        if (
            !token
            && !req.originalUrl.startsWith('/admin/login')
            && !req.originalUrl.startsWith('/admin/forgot-password')
        ) {
            res.redirect('/admin/login');
            return;
        }
       
        if (token) {
            let response = null
            try {
                response = await axios.get(`${process.env.VITE_API_URL}/check-login`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cookie': `token=${token}`, // Truyền cookie trong header
                    },
                    timeout: process.env.VITE_API_TIMEOUT,
                    validateStatus: () => true,
                });
            } catch (error) {
                response = error.response
            }

            if (
                response.status === 200
                && (
                    req.originalUrl.startsWith('/admin/login')
                    || req.originalUrl.startsWith('/admin/forgot-password')
                )
            ) {
                res.redirect('/admin');
                return;
            }

            if (
                response.status !== 200
                && !req.originalUrl.startsWith('/admin/login')
                && !req.originalUrl.startsWith('/admin/forgot-password')
            ) {
                res.redirect('/admin/login');
                return;
            }
        }
    }

    try {
        const url = encodeURI(req.originalUrl.replace(base, ""));

        /** @type {string} */
        let template;
        /** @type {import('./src/entry-server.jsx').render} */
        let ssrModule;
        if (!isProduction) {
            // Always read fresh template in development
            template = await fs.readFile("./index.html", "utf-8");
            template = await vite.transformIndexHtml(url, template);
            ssrModule = await vite.ssrLoadModule("/src/entry-server.jsx");
        } else {
            template = templateHtml;
            ssrModule = await import("./dist/server/entry-server.js");
        }

        let didError = false;

        const { router, context } = await ssrModule.renderRouter(req, res);
        const headContent = ssrModule.renderMetaData(router);
        const { pipe, abort } = ssrModule.render(router, context, {
            onShellError(error) {
                console.log(error);
                res.status(500);
                res.set({ "Content-Type": "text/html" });
                res.send("<h1>Something went wrong</h1>");
            },
            onShellReady() {
                res.status(didError ? 500 : 200);
                res.set({ "Content-Type": "text/html" });

                const transformStream = new Transform({
                    transform(chunk, encoding, callback) {
                        res.write(chunk, encoding);
                        callback();
                    },
                });
                const [htmlStart, htmlEnd] = template.split(`<!--app-html-->`);
                const finalHtmlStart = htmlStart.replace(
                    "<!--app-head-->",
                    headContent
                );

                res.write(finalHtmlStart);
                transformStream.on("finish", () => {
                    res.end(htmlEnd);
                });
                pipe(transformStream);
            },
            onError() {
                didError = true;
            },
        });

        setTimeout(() => {
            abort();
        }, ABORT_DELAY);
    } catch (e) {
        res.status(500).end();
    }
});

// Start http server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
