import { useTranslation } from "react-i18next";

const ParacelIslands = ({ className = "" }) => {
    const { t } = useTranslation();
    return (
        <div className={`relative ${className}`}>
            {/* Marker and label */}
            <div className="absolute top-[35%] left-[29%] flex items-center flex flex-col gap-[4px] z-2 cursor-pointer">
                <span className="hnv_region_active_map_title text-[#1A2A44] text-[14px] font-medium">
                    {t("Paracel Islands")}
                </span>
            </div>

            {/* SVG */}
            <svg
                className={`${className} group cursor-pointer`}
                xmlns="http://www.w3.org/2000/svg"
                width="67"
                height="58"
                viewBox="0 0 67 58"
                fill="none"
            >
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M34.2032 10.6694C34.2032 10.6694 34.058 9.36412 33.6224 8.54225C33.1868 7.72037 31.6378 8.83231 31.6378 8.83231C30.3309 8.30051 29.7017 9.36412 29.0725 10.1376C28.4432 10.9595 29.1693 11.6364 29.4597 12.7C29.7501 13.7636 34.3485 12.7 34.6873 12.5549C35.0261 12.4099 34.2032 10.6694 34.2032 10.6694Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M20.9404 27.4455C21.9084 27.6389 24.1834 26.1885 25.103 25.0282C26.0227 23.8679 26.1195 21.789 24.619 21.3056C24.619 21.3056 23.6993 18.8883 22.6829 19.3234C21.6664 19.7585 16.342 22.4659 16.4388 22.9977C16.5356 23.5295 17.8425 23.5295 17.7457 24.0613C17.6489 24.5931 16.5356 25.0282 15.0835 24.8348C13.6314 24.6414 12.6634 26.3335 13.2926 27.0104C13.9219 27.6388 15.5192 28.1223 16.8261 27.4455C18.133 26.6719 19.9723 27.2521 20.9404 27.4455Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M19.9726 32.6184C19.9726 32.6184 15.9551 34.7456 16.2455 35.5675C16.5843 36.3894 17.9396 35.9059 18.5205 35.3741C19.1497 34.8423 20.0694 34.3105 19.9242 34.8423C19.779 35.3741 20.1178 36.0026 20.6018 35.9059C21.0374 35.8092 21.8603 33.9721 21.0858 32.8602C20.4082 31.7482 19.9726 32.6184 19.9726 32.6184Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M5.01575 53.2137C3.56365 52.1017 2.45038 52.7786 2.30517 53.0203C2.30517 53.0203 1.28869 54.3256 1.96634 55.2925C2.64399 56.2594 3.51525 57.033 4.38652 56.5495C5.25778 56.0661 6.46786 54.374 5.01575 53.2137Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M26.0712 40.1604C26.0712 40.1604 24.6675 41.9491 24.5707 42.8194C24.4739 43.6896 24.5707 44.1731 24.9096 44.3664C25.2484 44.5598 26.8457 44.8499 27.4749 43.9313C28.1042 43.0127 28.927 41.6591 28.0074 40.4988C27.0877 39.3385 26.0712 40.1604 26.0712 40.1604Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M26.8459 36.9213C27.3299 36.6312 28.1043 35.3259 26.9911 34.0205C25.8778 32.6668 24.2805 31.99 23.8932 33.1503C23.8932 33.1503 23.6996 34.504 23.1188 34.7457C22.5379 34.9391 22.1023 35.8093 22.3927 36.3895C22.6832 36.9696 23.8449 37.5981 24.7645 37.2114C25.6842 36.8246 26.3618 37.2113 26.8459 36.9213Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M36.1877 28.1706C36.1877 28.1706 34.1548 29.7176 32.9931 29.766C31.8314 29.8143 31.7346 30.6846 31.783 31.2164C31.8314 31.7482 32.3154 33.0535 33.1867 32.9085C34.0579 32.7634 33.7675 31.023 34.6388 31.0713C35.5101 31.1197 35.5101 31.5065 35.6069 32.2316C35.7037 32.9568 37.6398 33.1019 37.9302 32.4734C38.2206 31.8449 38.5595 30.5879 38.2207 29.4759C37.9786 28.4123 37.543 27.6388 36.1877 28.1706Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M43.303 1.04873C42.5769 1.09707 40.9312 1.91895 41.028 2.88586C41.1248 3.85277 41.9961 4.86802 42.4801 4.86802C42.9642 4.86802 43.9806 4.81969 44.5131 4.33623C45.0455 3.90112 45.2391 2.8375 44.9003 1.96728C44.9003 1.96728 44.029 0.952038 43.303 1.04873Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M49.0143 5.54492C49.3532 6.41514 49.4016 7.47874 50.6601 7.52708C51.7734 7.52708 52.8866 7.57545 52.935 6.12508C52.935 5.78666 52.8382 5.44822 52.5962 5.2065C51.967 4.52966 50.5633 3.03093 49.5952 2.93424C48.3367 2.83755 46.691 2.20906 46.3038 2.93424C45.9165 3.65943 48.6755 4.6747 49.0143 5.54492Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M47.6594 7.96216C47.6594 7.96216 45.8684 8.05884 45.82 9.21914C45.7716 10.3794 46.7881 10.7179 47.5141 10.7179C48.2402 10.7179 49.2567 10.1377 49.2567 9.7026C49.2567 9.26748 49.3051 7.86547 47.6594 7.96216Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M51.9189 8.3005C51.1444 8.63892 51.338 9.21905 50.854 9.12236C50.37 9.02567 49.9343 8.73561 49.7891 9.17072C49.7891 9.17072 49.1599 9.94424 50.2248 10.6694C51.2896 11.3946 51.8705 11.2012 52.2093 11.1045C52.5481 11.0562 53.4678 10.5244 53.1774 9.60581C52.8869 8.78394 52.7417 7.96208 51.9189 8.3005Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M55.4038 24.5447C56.5171 24.2546 57.6788 23.9645 57.7272 22.7559C57.7756 21.4989 57.1463 20.5803 56.8075 20.387C56.4687 20.1936 55.8879 19.5651 55.4038 20.1936C55.4038 20.1936 54.6294 23.0943 53.9517 23.4811C53.2741 23.8678 54.2905 24.8347 55.4038 24.5447Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M60.0019 21.3539C60.1472 21.2089 59.8083 20.2903 60.1472 19.9036C60.5344 19.5651 61.2604 18.3081 60.5828 17.9697C59.9051 17.6313 58.8403 17.3896 58.5982 18.1148C58.5982 18.1148 57.969 19.8552 58.453 20.5804C59.0339 21.3539 59.8567 21.499 60.0019 21.3539Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M61.0672 22.4175C61.0672 22.4175 60.5347 23.4812 60.8735 24.0613C61.2124 24.6415 61.7448 25.2216 62.132 25.0766C62.5193 24.9315 62.4709 23.5295 62.3257 22.9494C62.2288 22.3209 61.406 21.9341 61.0672 22.4175Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M61.5992 25.2699C61.1636 25.2215 61.0184 25.0282 60.2923 25.2699C60.2923 25.2699 59.5179 26.6236 60.0019 27.252C60.486 27.8805 61.1636 28.0256 61.5992 27.9772C62.0349 27.9289 62.6157 27.2521 62.6157 26.6236C62.6157 26.0434 62.0349 25.3666 61.5992 25.2699Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M53.1291 33.6337C53.5163 32.9085 53.6131 32.1833 55.0652 32.2317C56.5173 32.28 57.0982 33.0052 57.437 32.0866C57.7758 31.168 58.0662 28.8474 57.195 28.0256C56.3237 27.2037 56.3237 26.6235 55.3072 26.8653C55.3072 26.8653 54.2424 28.364 54.5812 29.2342C54.92 30.0561 55.1136 30.2495 54.7748 30.4912C54.436 30.7329 53.5647 30.2011 53.3227 30.4912C53.0807 30.7813 53.3227 31.1197 52.8871 31.2647C52.403 31.3614 50.2249 31.168 49.7892 31.9416C49.3536 32.7151 49.2568 33.2952 49.7892 33.2952C50.3217 33.2952 50.8541 32.9568 51.1445 33.2952C51.435 33.6337 52.7418 34.3105 53.1291 33.6337Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M63.6808 17.4863C63.1968 17.0028 63.6808 16.2776 64.31 15.6008C64.9393 14.9723 63.9712 13.957 63.3904 13.5703C62.8095 13.1351 61.2122 13.5703 60.8734 14.9239C60.5346 16.2776 64.1648 19.9519 64.1648 19.9519C64.7457 20.5804 65.7138 19.8552 65.6654 19.0817C65.617 18.2598 64.1648 17.9697 63.6808 17.4863Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M56.7106 40.8856C56.7106 40.8856 54.6777 40.2571 53.5644 40.5956C52.4511 40.934 51.7734 41.8042 51.7734 42.1426C51.7734 42.481 52.4027 44.3665 53.6128 43.8831C54.8229 43.3996 54.726 42.1909 55.2101 42.481C55.6941 42.7711 55.6941 43.0612 55.6457 43.593C55.5973 44.1731 55.1617 44.6082 56.0329 44.8016C56.9526 44.995 57.8723 45.2851 58.1627 43.738C58.4531 42.191 57.6787 41.2724 56.7106 40.8856Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M61.5027 38.7584C60.1958 38.4683 59.5182 38.42 58.8889 39.0968C58.8889 39.0968 57.9209 40.1121 58.1145 41.2724C58.3081 42.4327 58.5017 43.1095 59.4698 43.3029C60.4378 43.4963 62.5192 43.3512 62.6644 42.0459C62.7612 40.7406 62.8096 39.0485 61.5027 38.7584Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default ParacelIslands;
