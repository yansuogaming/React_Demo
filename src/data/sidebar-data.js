import { IoCompassOutline } from "react-icons/io5";
import { TbLayoutDashboard } from "react-icons/tb";
import { BsPinMap } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbUserCog } from "react-icons/tb";
import { TbTool } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { TbBrowserCheck } from "react-icons/tb";
import { BsUmbrella } from "react-icons/bs";
import { MdOutlineMap } from "react-icons/md";
import { FaTreeCity } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";

export const sidebarData = {
    user: {
        name: 'satnaing',
        email: 'satnaingdev@gmail.com',
        avatar: '/avatars/shadcn.jpg',
    },
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
                    title: 'Appearance',
                    url: '/settings/appearance',
                    icon: IoColorPaletteOutline,
                },
                {
                    title: 'Notifications',
                    url: '/settings/notifications',
                    icon: RiNotificationBadgeLine,
                },
                {
                    title: 'Display',
                    url: '/settings/display',
                    icon: TbBrowserCheck,
                },
            ],
        },
    ],
}
