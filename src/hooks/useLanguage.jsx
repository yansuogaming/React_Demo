import { changeFontByLang } from '@lib/utils'
import { useTranslation } from 'react-i18next'

export default function useLanguage() {
    const { i18n } = useTranslation()

    const language = i18n.language

    const setLanguage = (lang) => {
        i18n.changeLanguage(lang)
        // Set lang vào localstorage đến khi f5 thì vẫn lưu lang hiện tại
        localStorage.setItem('lang', lang)
        // Đổi font khi lang là tiếng việt
        changeFontByLang(lang)
    }

    return { language, setLanguage }
}
