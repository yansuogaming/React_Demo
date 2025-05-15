import { CiMenuBurger } from 'react-icons/ci'
import { cn } from '@lib/utils'
import { Button } from '@ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router'

export default function TopNav({ className, links, ...props }) {
    return (
        <>
            <div className='md:hidden'>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button size='icon' variant='outline'>
                            <CiMenuBurger />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side='bottom' align='start'>
                        {links.map(({ title, href, isActive, disabled }) => (
                            <DropdownMenuItem key={`${title}-${href}`} asChild>
                                <Link
                                    to={href}
                                    className={!isActive ? 'text-muted-foreground' : ''}
                                    disabled={disabled}
                                >
                                    {title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <nav
                className={cn(
                    'hidden items-center space-x-4 md:flex lg:space-x-6',
                    className
                )}
                {...props}
            >
                {links.map(({ title, href, isActive, disabled }) => (
                    <Link
                        key={`${title}-${href}`}
                        to={href}
                        disabled={disabled}
                        className={`hover:text-primary text-sm font-medium transition-colors ${isActive ? '' : 'text-muted-foreground'}`}
                    >
                        {title}
                    </Link>
                ))}
            </nav>
        </>
    )
}
