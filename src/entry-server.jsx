import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router'
import { renderToPipeableStream } from 'react-dom/server'
import routes from '@routes/index'
import i18n from './i18n'
import '@css/index.css'
import { I18nextProvider } from 'react-i18next'

function createFetchRequest(req, res) {
    let origin = `${req.protocol}://${req.get("host")}`
    // Note: This had to take originalUrl into account for presumably vite's proxying
    let url = new URL(req.originalUrl || req.url, origin)

    let controller = new AbortController()
    res.on("close", () => controller.abort())

    let headers = new Headers()

    for (let [key, values] of Object.entries(req.headers)) {
        if (values) {
            if (Array.isArray(values)) {
                for (let value of values) {
                    headers.append(key, value)
                }
            } else {
                headers.set(key, values)
            }
        }
    }

    let init = {
        method: req.method,
        headers,
        signal: controller.signal,
    };

    if (req.method !== "GET" && req.method !== "HEAD") {
        init.body = req.body;
    }

    return new Request(url.href, init)
};

let handler = createStaticHandler(routes);
export async function renderRouter(req, res)
{
    let fetchRequest = createFetchRequest(req, res)
    let context = await handler.query(fetchRequest)
    let router = createStaticRouter(
        handler.dataRoutes,
        context
    )

    return {
        router,
        context
    }
}

export function renderMetaData(router)
{
    const matches = router.state.matches;
    let metaTags = [];
    matches.forEach((match) => {
        if (match.route.meta) {
            metaTags.push(...match.route.meta({
                data: match.data,
                matches,
                location: router.state.location,
            }));
        }
    });

    return metaTags
        .map((meta) => {
            if (meta.title) return `<title>${meta.title}</title>`;
            if (meta.name) return `<meta name="${meta.name}" content="${meta.content}" />`;
            if (meta.property) return `<meta property="${meta.property}" content="${meta.content}" />`;
            return "";
        })
        .join("\n");
}

export function render(router, context, options) {
    return renderToPipeableStream(
        <I18nextProvider i18n={i18n}>
            <StaticRouterProvider
                router={router}
                context={context}
            />
        </I18nextProvider>,
        options,
    )
}