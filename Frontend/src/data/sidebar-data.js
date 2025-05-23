import { IoCompassOutline, IoCalendarNumberOutline, IoSearchOutline, IoNewspaperOutline } from "react-icons/io5";
import { BsPinMap, BsEnvelopeAt, BsUmbrella, BsQuestionCircle } from "react-icons/bs";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbUserCog, TbTool, TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineMap } from "react-icons/md";
import { FaTreeCity } from "react-icons/fa6";
import { CiViewList, CiCircleList } from "react-icons/ci";
import { SiGoogletranslate } from "react-icons/si";


export const sidebarData = {
    navGroups: [
        {
            title: 'General',
            items: [
                {
                    title: 'Dashboard',
                    url: '/admin',
                    icon: TbLayoutDashboard,
                },
                {
                    title: 'Điểm đến',
                    url: '/admin/itineraries',
                    icon: BsPinMap,
                },
                {
                    title: 'Sự kiện',
                    url: '/admin/events',
                    icon: IoCalendarNumberOutline,
                },
                {
                    title: 'Trải nghiệm',
                    icon: IoCompassOutline,
                    items: [
                        {
                            title: 'Trải nghiệm',
                            url: '/admin/experiences',
                            icon: CiViewList,
                        },
                        {
                            title: 'Loại hình trải nghiệm',
                            url: '/admin/experience-types',
                            icon: CiCircleList,
                        },
                    ]
                },
                {
                    title: 'Vùng Miền',
                    url: '/admin/regions',
                    icon: MdOutlineMap,
                },
                {
                    title: 'Thành phố',
                    url: '/admin/cities',
                    icon: FaTreeCity,
                },
                {
                    title: 'Ưu đãi du lịch',
                    url: '/admin/travel-offers',
                    icon: RiShoppingBag4Line,
                },
                {
                    title: 'Mùa du lịch',
                    url: '/admin/reasons',
                    icon: BsUmbrella,
                },
                {
                    title: 'Blog',
                    url: '/admin/blogs',
                    icon: IoNewspaperOutline,
                },
                {
                    title: 'FAQs',
                    url: '/admin/faqs',
                    icon: BsQuestionCircle,
                },
            ],
        },
        {
            title: 'Other',
            items: [
                {
                    title: 'Hồ sơ',
                    url: '/settings',
                    icon: TbUserCog,
                },
                {
                    title: 'Account',
                    url: '/settings/account',
                    icon: TbTool,
                },
                {
                    title: 'Mail',
                    url: '/settings/mails',
                    icon: BsEnvelopeAt,
                },
                {
                    title: 'Ngôn ngữ',
                    url: '/settings/languages',
                    icon: SiGoogletranslate,
                },
                {
                    title: 'Seo tools',
                    url: '/settings/seo-tools',
                    icon: IoSearchOutline,
                },
            ],
        },
    ],
}
