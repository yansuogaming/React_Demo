import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { t } from "i18next";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function changeFontByLang(lang) {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        const body = document.querySelector("body");
        if (lang === "vi") {
            body.style.fontFamily = "Roboto, sans-serif";
        } else {
            body.style.fontFamily = '"Visit Qatar", sans-serif';
        }
    }
}

export function getListLanguages() {
    return [
        {
            key: "en",
            text: t("english"),
        },
        {
            key: "vi",
            text: t("vietnamese"),
        },
    ];
}

// Navigate
let navigate;

export const setNavigate = (nav) => {
    navigate = nav;
};

export const navigateTo = (path) => {
    if (navigate) {
        navigate(path);
    }
};

// Loading bar
let startLoading;
let completeLoading;

export const setStartLoading = (loading) => {
    startLoading = loading;
};

export const setCompleteLoading = (loading) => {
    completeLoading = loading;
};

export const handleLoading = async (callback) => {
    let res = null;
    if (startLoading && completeLoading) {
        startLoading();
        res = await callback();
        completeLoading();
    } else {
        res = await callback();
    }

    return res;
};
