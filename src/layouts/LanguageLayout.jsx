import useLanguage from '@hooks/useLanguage';
import { getListLanguages } from '@lib/utils';
import { memo, useEffect } from 'react';
import { Outlet, useParams } from 'react-router';

const LanguageLayout = memo(() => {
    const { lang_id } = useParams();
    const [language, setLanguage] = useLanguage();
    
    useEffect(() => {
        const languages = getListLanguages();
        let findLang = false;
        languages.forEach((lang) => {
            if (lang.key == lang_id) {
                findLang = true;
            }
        });
        if (findLang && language !== lang_id) {
            setLanguage(lang_id);
        }

        if (!findLang) {
            setLanguage('en');
        }
    }, [lang_id, language, setLanguage])

    return (
        <Outlet />
    )
})

export default LanguageLayout
