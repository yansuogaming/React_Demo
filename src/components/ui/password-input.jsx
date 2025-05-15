import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { cn } from '@/lib/utils'
import { Button } from './button'
import { useState } from 'react'

const PasswordInput = (
    ({ className, disabled, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false)
        return (
            <div className={cn('relative rounded-md', className)}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className='border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50'
                    ref={ref}
                    disabled={disabled}
                    {...props}
                />
                <Button
                    type='button'
                    size='icon'
                    variant='ghost'
                    disabled={disabled}
                    className='text-muted-foreground absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 rounded-md'
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? <PiEyeLight size={18} /> : <PiEyeSlash size={18} />}
                </Button>
            </div>
        )
    }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
