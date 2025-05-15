import { useEffect, useState } from 'react'
import { cn } from '@lib/utils'
import { Separator } from '@ui/separator'
import { SidebarTrigger } from '@components/ui/sidebar'
// import { SidebarTrigger } from '@/components/ui/sidebar'

export default function Header({
    className,
    fixed,
    children,
    ...props
}) {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setOffset(document.body.scrollTop || document.documentElement.scrollTop)
        }

        // Add scroll listener to the body
        document.addEventListener('scroll', onScroll, { passive: true })

        // Clean up the event listener on unmount
        return () => document.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={cn(
                'bg-background flex h-16 items-center gap-3 p-4 sm:gap-4',
                fixed && 'header-fixed peer/header fixed z-50 w-[inherit] rounded-md',
                offset > 10 && fixed ? 'shadow-sm' : 'shadow-none',
                className
            )}
            {...props}
        >
            <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
            <Separator orientation='vertical' className='h-6' />
            {children}
        </header>
    )
}
