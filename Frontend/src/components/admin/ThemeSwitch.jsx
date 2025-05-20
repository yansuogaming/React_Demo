import { useEffect } from 'react'
import { LuMoon, LuSun } from "react-icons/lu";
import { cn } from '@lib/utils'
import { useTheme } from '@contexts/ThemeContext'
import { Button } from '@ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@ui/dropdown-menu'
import { CheckIcon } from 'lucide-react';

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme()

    /* Update theme-color meta tag
     * when theme is updated */
    useEffect(() => {
        const themeColor = theme === 'dark' ? '#020817' : '#fff'
        const metaThemeColor = document.querySelector("meta[name='theme-color']")
        if (metaThemeColor) metaThemeColor.setAttribute('content', themeColor)
    }, [theme])

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' className='scale-95 rounded-full'>
                    <LuSun className='size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                    <LuMoon className='absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                    <CheckIcon
                        size={14}
                        className={cn('ml-auto', theme !== 'light' && 'hidden')}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                    <CheckIcon
                        size={14}
                        className={cn('ml-auto', theme !== 'dark' && 'hidden')}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                    <CheckIcon
                        size={14}
                        className={cn('ml-auto', theme !== 'system' && 'hidden')}
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
