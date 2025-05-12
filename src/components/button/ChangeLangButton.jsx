import useLanguage from '@hooks/useLanguage'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from "@ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@ui/dropdown-menu"
import { FaAngleDown } from "react-icons/fa6"
import { cn } from '@lib/utils'

export default function ChangeLangButton({ color = 'black' }) {
    const { t } = useTranslation()
    const [isOpenDropdownLanguage, setOpenDropdownLanguage] = useState(false)
    const [language, setLanguage] = useLanguage()

    return (
        <DropdownMenu
            onOpenChange={() =>
                setOpenDropdownLanguage(!isOpenDropdownLanguage)
            }
        >
            <DropdownMenuTrigger asChild>
                <Button
                    variant="link"
                    style={{color}}
                    className={cn(
                        'focus-visible:shadow-none focus-visible:ring-0',
                        'text-base cursor-pointer font-bold'
                    )}
                >
                    {t("language")}
                    <FaAngleDown
                        className={cn(
                            isOpenDropdownLanguage && 'rotate-[180deg]',
                            'transition-all'
                        )}
                        color={color}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[60px]">
                <DropdownMenuCheckboxItem
                    checked={language === "en"}
                    value="en"
                    onCheckedChange={() => setLanguage("en")}
                >
                    {t("english")}
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={language === "vi"}
                    value="vi"
                    onCheckedChange={() => setLanguage("vi")}
                >
                    {t("vietnamese")}
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
