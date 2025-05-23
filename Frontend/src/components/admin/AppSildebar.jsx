import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@components/admin/NavGroup'
import { NavUser } from '@components/admin/NavUser'
import { sidebarData } from '@data/sidebar-data'

export default function AppSidebar({ ...props }) {
    return (
        <Sidebar collapsible='icon' variant='floating' {...props}>
            <SidebarHeader>
                <NavUser />
            </SidebarHeader>
            <SidebarContent>
                {sidebarData.navGroups.map((props) => (
                    <NavGroup key={props.title} {...props} />
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
