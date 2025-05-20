import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SearchHeader({ className = '', color = 'black',onClick=()=>{}}) {
    const { t } = useTranslation()

    return (
        <button onClick={onClick} className={className} style={{color}}>
            <svg
                className="mr-[10px]"
                alt={t("search")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="ICON" clipPath="url(#clip0_5249_616)">
                    <path
                        stroke={color}
                        id="Vector_5"
                        d="M23 23L17.6919 17.6919M17.6919 17.6919C18.5999 16.784 19.3201 15.7061 19.8115 14.5198C20.3029 13.3335 20.5558 12.062 20.5558 10.7779C20.5558 9.49386 20.3029 8.22238 19.8115 7.03607C19.3202 5.84976 18.5999 4.77185 17.6919 3.86389C16.784 2.95592 15.7061 2.23569 14.5198 1.7443C13.3335 1.25291 12.062 1 10.7779 1C9.49386 1 8.22238 1.25291 7.03607 1.7443C5.84976 2.23569 4.77185 2.95592 3.86389 3.86389C2.03017 5.6976 1 8.18465 1 10.7779C1 13.3712 2.03017 15.8582 3.86389 17.6919C5.6976 19.5257 8.18465 20.5558 10.7779 20.5558C13.3712 20.5558 15.8582 19.5257 17.6919 17.6919Z"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_5249_616">
                        <rect
                            width="24"
                            height="24"
                            fill="white"
                        />
                    </clipPath>
                </defs>
            </svg>
            {t("search")}
        </button>
    )
}
