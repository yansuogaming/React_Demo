import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from '@languages/vi.json'
import en from '@languages/en.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            vi: { translation: vi },
            en: { translation: en },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
