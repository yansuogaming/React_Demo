import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar'
import { Button } from '@ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router'
import { useAuth } from '@contexts/AuthContext';
import { useEffect, useState } from 'react';

export default function ProfileDropdown() {
    const auth = useAuth();
        const [admin, setAdmin] = useState({});
    
        useEffect(() => {
            if (auth) {
                setAdmin(auth.admin)
            }
        }, [auth]);

    function getInitials(fullName) {
        if (fullName.length > 0) {
            const parts = fullName.trim().split(/\s+/);
            if (parts.length === 0) return '';
    
            const first = parts[0];
            const last = parts[parts.length - 1];
    
            return (first[0] + last[0]).toUpperCase();
        }
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src='/avatars/01.png' alt='@shadcn' />
                        <AvatarFallback>{getInitials(admin?.full_name ?? '')}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-sm leading-none font-medium'>
                            {getInitials(admin?.full_name ?? '')}
                        </p>
                        <p className='text-muted-foreground text-xs leading-none'>
                            {admin?.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link to='/settings'>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to='/settings'>
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to='/settings'>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
