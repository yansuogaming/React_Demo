import {
    IconBrowserCheck,
    IconNotification,
    IconPalette,
    IconTool,
    IconUser,
} from '@tabler/icons-react'
import { Separator } from '@ui/separator'
import { Search } from '@/components/search'
import SidebarNav from './components/sidebar-nav'
import Header from '@components/admin/Header'
import Main from '@components/admin/Main'
import ProfileDropdown from '@components/admin/ProfileDropdown'
import ThemeSwitch from '@components/admin/ThemeSwitch'

export default function Index() {
    return (
        <>
            {/* ===== Top Heading ===== */}
            <Header>
                <Search />
                <div className='ml-auto flex items-center space-x-4'>
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </Header>

            <Main fixed>
                <div className='space-y-0.5'>
                    <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
                        Settings
                    </h1>
                    <p className='text-muted-foreground'>
                        Manage your account settings and set e-mail preferences.
                    </p>
                </div>
                <Separator className='my-4 lg:my-6' />
                <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12'>
                    <aside className='top-0 lg:sticky lg:w-1/5'>
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className='flex w-full overflow-y-hidden p-1'>
                        <Outlet />
                    </div>
                </div>
            </Main>
        </>
    )
}

const sidebarNavItems = [
    {
        title: 'Profile',
        icon: <IconUser size={18} />,
        href: '/settings',
    },
    {
        title: 'Account',
        icon: <IconTool size={18} />,
        href: '/settings/account',
    },
    {
        title: 'Appearance',
        icon: <IconPalette size={18} />,
        href: '/settings/appearance',
    },
    {
        title: 'Notifications',
        icon: <IconNotification size={18} />,
        href: '/settings/notifications',
    },
    {
        title: 'Display',
        icon: <IconBrowserCheck size={18} />,
        href: '/settings/display',
    },
]
