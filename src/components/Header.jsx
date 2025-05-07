import imgLogo from '@images/logo.svg'
import imgLogo2 from '@images/logo2.svg'
import { useTranslation } from 'react-i18next'
import useLanguage from '@hooks/useLanguage'
import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import { Button } from '@ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from '@ui/dropdown-menu'

const Header = ({ noBackgroundOnScroll = true }) => {
    const { t } = useTranslation()
    const { language, setLanguage } = useLanguage()
    const [background, setBackground] = useState('none')
    const [logo, setLogo] = useState(null)
    const [color, setColor] = useState(null)
    const [colorIcon, setColorIcon] = useState(null)
    const [isOpenDropdownLanguage, setOpenDropdownLanguage] = useState(false)
    const [boxShadow, setBoxShadow] = useState(noBackgroundOnScroll ? 'none' : '1px 1px 20px #d1d1d1')

    let position = 'sticky'
    if (noBackgroundOnScroll) {
        position = 'fixed'
    }

    // Thay đổi style của header
    const chanegStyleHeader = (noBackground) => {
        if (noBackground) {
            setLogo(imgLogo)
            setColor('white')
            setColorIcon('white')
            setBackground('none')
            setBoxShadow('none')
            return
        }

        setBackground('white')
        setLogo(imgLogo2)
        setColor('black')
        setColorIcon('#007BFF')
        setBoxShadow('1px 1px 20px #d1d1d1')
    }

    useEffect(() => {
        if (noBackgroundOnScroll) {
            chanegStyleHeader(true)
            const handleScroll = () => {
                // Nếu scroll xuống thì đổi style header
                if (window.scrollY > 10) {
                    chanegStyleHeader(false)
                } else {
                    chanegStyleHeader(true)
                }
            };
            window.addEventListener('scroll', handleScroll)
            // Cleanup khi component unmount
            return () => window.removeEventListener('scroll', handleScroll)
        }

        chanegStyleHeader(false)
    }, [noBackgroundOnScroll])

    return (
        <header
            className="flex justify-between py-[15px] px-[40px] w-full z-1 top-0"
            style={{ background, position, color, boxShadow }}
        >
            <div className="flex items-center">
                {/* Logo */}
                <div className="mr-[50px]">
                    <NavLink to="/">
                        <img src={logo} width="123px" alt="" />
                    </NavLink>
                </div>
                {/* Nav bar */}
                <ul className="flex h-fit">
                    <li className="p-[15px] h-fit">
                        <NavLink to="/">
                            {t('destinations')}
                        </NavLink>
                    </li>
                    <li className="p-[15px] h-fit">
                        <NavLink to="/">
                            {t('experiences')}
                        </NavLink>
                    </li>
                    <li className="p-[15px] h-fit">
                        <NavLink to="/">
                            {t('events')}
                        </NavLink>
                    </li>
                    <li className="p-[15px] h-fit">
                        <NavLink to="/">
                            {t('plan_your_trip')}
                        </NavLink>
                    </li>
                    <li className="p-[15px] h-fit">
                        <NavLink to="/">
                            {t('travel_offers')}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex items-center">
                    <li className="p-[15px]">
                        <div className="flex cursor-pointer">
                            <svg className="mr-[10px]" alt={t('search')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="ICON" clipPath="url(#clip0_5249_616)">
                                    <path stroke={color} id="Vector_5" d="M23 23L17.6919 17.6919M17.6919 17.6919C18.5999 16.784 19.3201 15.7061 19.8115 14.5198C20.3029 13.3335 20.5558 12.062 20.5558 10.7779C20.5558 9.49386 20.3029 8.22238 19.8115 7.03607C19.3202 5.84976 18.5999 4.77185 17.6919 3.86389C16.784 2.95592 15.7061 2.23569 14.5198 1.7443C13.3335 1.25291 12.062 1 10.7779 1C9.49386 1 8.22238 1.25291 7.03607 1.7443C5.84976 2.23569 4.77185 2.95592 3.86389 3.86389C2.03017 5.6976 1 8.18465 1 10.7779C1 13.3712 2.03017 15.8582 3.86389 17.6919C5.6976 19.5257 8.18465 20.5558 10.7779 20.5558C13.3712 20.5558 15.8582 19.5257 17.6919 17.6919Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5249_616">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {t('search')}
                        </div>
                    </li>
                    <li className="p-[15px]">
                        <DropdownMenu onOpenChange={() => setOpenDropdownLanguage(!isOpenDropdownLanguage)}>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="link"
                                    className="focus-visible:shadow-none focus-visible:ring-0 font-normal text-base cursor-pointer"
                                    style={{ color }}
                                >
                                    {t('language')}
                                    <svg className={`${isOpenDropdownLanguage && 'rotate-[180deg]'} transition-all`} xmlns="http://www.w3.org/2000/svg" viewBox="-3.5 -3 14 12" fill="none">
                                        <path fill={color} d="M4 6L0.535899 -6.52533e-07L7.4641 -4.68497e-08L4 6Z" />
                                    </svg>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[60px]">
                                <DropdownMenuCheckboxItem
                                    checked={language === 'en'}
                                    value="en"
                                    onCheckedChange={() => setLanguage('en')}
                                >
                                    {t('english')}
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={language === 'vi'}
                                    value="vi"
                                    onCheckedChange={() => setLanguage('vi')}
                                >
                                    {t('vietnamese')}
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li className="p-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <g clipPath="url(#clip0_5625_107)">
                                <path fill={colorIcon} d="M10.7803 12.1215C11.3924 12.7206 12.1962 13.0185 12.999 13.0185C13.8017 13.0185 14.6066 12.7206 15.2187 12.1215L17.212 10.1704C17.7673 9.61861 18.2074 8.96206 18.507 8.23885C18.8066 7.51564 18.9596 6.74016 18.9573 5.95736C18.9573 4.36486 18.3376 2.86986 17.212 1.74427C16.0865 0.61869 14.5915 -0.000976562 12.999 -0.000976562C11.4065 -0.000976562 9.91146 0.61869 8.78588 1.74427C7.66029 2.86877 7.04063 4.36594 7.04063 5.95736C7.04063 7.54877 7.66029 9.04594 8.79454 10.178L10.7803 12.1204V12.1215ZM10.3188 3.27719C11.0349 2.56111 11.9882 2.16677 13 2.16677C14.0119 2.16677 14.9641 2.56111 15.6802 3.27719C16.3963 3.99327 16.7906 4.94552 16.7906 5.95844C16.7906 6.97136 16.3963 7.92252 15.6878 8.63102L13.702 10.5734C13.513 10.7559 13.2606 10.8578 12.9979 10.8578C12.7352 10.8578 12.4827 10.7559 12.2937 10.5734L10.3166 8.63969C9.60054 7.92361 9.20621 6.97136 9.20621 5.95844C9.20621 4.94552 9.60054 3.99436 10.3166 3.27719H10.3188ZM11.375 5.95194C11.3751 5.73847 11.4172 5.52711 11.499 5.32991C11.5807 5.13272 11.7005 4.95356 11.8515 4.80267C12.0025 4.65177 12.1818 4.5321 12.379 4.45047C12.5763 4.36884 12.7877 4.32687 13.0011 4.32694C13.2146 4.32701 13.426 4.36913 13.6232 4.45088C13.8203 4.53264 13.9995 4.65244 14.1504 4.80343C14.3013 4.95443 14.421 5.13367 14.5026 5.33091C14.5842 5.52816 14.6262 5.73955 14.6261 5.95302C14.626 6.38414 14.4546 6.79755 14.1496 7.1023C13.8447 7.40704 13.4312 7.57817 13 7.57802C12.5689 7.57788 12.1555 7.40648 11.8508 7.10153C11.546 6.79658 11.3749 6.38306 11.375 5.95194ZM25.9979 20.3159L24.9373 11.3047C24.8397 10.4642 24.5335 9.66145 24.0467 8.96937C23.5599 8.2773 22.9079 7.71784 22.1499 7.34186C21.8951 7.23236 21.608 7.22454 21.3476 7.32C21.0872 7.41547 20.8733 7.60698 20.7496 7.85523C20.626 8.10349 20.6021 8.38965 20.6827 8.65499C20.7634 8.92033 20.9426 9.14472 21.1835 9.28211C21.6193 9.49755 21.9942 9.81874 22.2739 10.2163C22.5536 10.6139 22.7292 11.0753 22.7847 11.5582L22.8703 12.2851L11.4639 17.7169L3.56746 10.6374C3.83829 10.0773 4.26621 9.60169 4.83388 9.30594C4.96009 9.24024 5.0721 9.1503 5.16351 9.04126C5.25492 8.93222 5.32393 8.80622 5.3666 8.67049C5.40926 8.53475 5.42474 8.39192 5.41215 8.2502C5.39955 8.10847 5.35914 7.97062 5.29321 7.84452C5.22771 7.71812 5.13789 7.6059 5.02891 7.5143C4.91993 7.4227 4.79393 7.35352 4.65814 7.31074C4.52236 7.26796 4.37946 7.25242 4.23765 7.26501C4.09584 7.2776 3.95792 7.31808 3.83179 7.38411C3.09554 7.76728 2.46423 8.32478 1.99291 9.00796C1.52159 9.69115 1.22458 10.4793 1.12779 11.3036L0.0682929 20.3159C-0.0153144 21.0294 0.0530062 21.7525 0.268765 22.4377C0.484524 23.1229 0.842837 23.7547 1.32016 24.2916C1.79748 24.8284 2.38301 25.2582 3.03826 25.5527C3.69352 25.8472 4.40366 25.9996 5.12204 26.0001H20.943C21.6616 26.0001 22.3721 25.848 23.0276 25.5537C23.6832 25.2594 24.269 24.8297 24.7465 24.2927C25.224 23.7557 25.5824 23.1237 25.7981 22.4383C26.0137 21.7529 26.0818 21.0295 25.9979 20.3159ZM2.93913 22.853C2.66526 22.5447 2.45969 22.1819 2.3359 21.7885C2.21212 21.3952 2.17292 20.98 2.22088 20.5704L3.09729 13.1225L15.0454 23.8345H5.12204C4.28788 23.8345 3.49271 23.477 2.93804 22.8541L2.93913 22.853ZM23.127 22.853C22.8527 23.1612 22.5163 23.4078 22.1399 23.5768C21.7635 23.7458 21.3556 23.8332 20.943 23.8334H18.2889L13.2135 19.2834L23.1379 14.5579L23.8453 20.5704C23.8933 20.9801 23.854 21.3953 23.7301 21.7888C23.6061 22.1822 23.4013 22.5449 23.127 22.853Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_5625_107">
                                    <rect width="26" height="26" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </li>
                    <li className="p-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path stroke={colorIcon} d="M21.1498 23.8226H4.86192C3.23367 23.8226 1.97701 22.5941 2.19042 20.9799L2.31392 20.0385C2.53817 18.7385 3.72767 17.9206 5.01901 17.64L12.9219 16.2501H13.0779L20.9808 17.64C22.2938 17.9433 23.4617 18.7157 23.6859 20.0385L23.8094 20.9918C24.0228 22.606 22.7662 23.8334 21.1379 23.8334L21.1498 23.8226ZM18.4166 7.58341C18.4166 9.02 17.8459 10.3978 16.8301 11.4136C15.8143 12.4294 14.4365 13.0001 12.9999 13.0001C11.5633 13.0001 10.1856 12.4294 9.16976 11.4136C8.15394 10.3978 7.58326 9.02 7.58326 7.58341C7.58326 6.14683 8.15394 4.76908 9.16976 3.75325C10.1856 2.73743 11.5633 2.16675 12.9999 2.16675C14.4365 2.16675 15.8143 2.73743 16.8301 3.75325C17.8459 4.76908 18.4166 6.14683 18.4166 7.58341Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header