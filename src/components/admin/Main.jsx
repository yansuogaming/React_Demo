import React from 'react'
import { cn } from '@/lib/utils'

export default function Main({ fixed, ...props }) {
    return (
        <main
            className={cn(
                'peer-[.header-fixed]/header:mt-16',
                'px-4 py-6',
                fixed && 'fixed-main flex grow flex-col overflow-hidden'
            )}
            {...props}
        />
    )
}
