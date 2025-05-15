import { Tabs, TabsContent } from '@ui/tabs'
import Header from '@components/admin/Header'
import Main from '@components/admin/Main'
import ProfileDropdown from '@components/admin/ProfileDropdown'
import Search from '@components/admin/Search'
import ThemeSwitch from '@components/admin/ThemeSwitch'
import TopNav from '@components/admin/TopNav'

export default function Dashboard() {
    return (
        <>
            {/* ===== Top Heading ===== */}
            <Header>
                <TopNav links={topNav} />
                <div className='ml-auto flex items-center space-x-4'>
                    <Search />
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </Header>

            {/* ===== Main ===== */}
            <Main>
                <div className='mb-2 flex items-center justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
                </div>
                <Tabs
                    orientation='vertical'
                    defaultValue='overview'
                    className='space-y-4'
                >
                    <TabsContent value='overview' className='space-y-4'>
                        
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    )
}

const topNav = [
    {
        title: 'Overview',
        href: 'dashboard/overview',
        isActive: true,
        disabled: false,
    },
    {
        title: 'Customers',
        href: 'dashboard/customers',
        isActive: false,
        disabled: true,
    },
    {
        title: 'Products',
        href: 'dashboard/products',
        isActive: false,
        disabled: true,
    },
    {
        title: 'Settings',
        href: 'dashboard/settings',
        isActive: false,
        disabled: true,
    },
]
