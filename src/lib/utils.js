import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function changeFontByLang(lang) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const body = document.querySelector('body')
        if (lang === 'vi') {
            body.style.fontFamily = 'Roboto, sans-serif';
        } else {
            body.style.fontFamily = '"Visit Qatar", sans-serif';
        }
    }
}