import { useTranslation } from "react-i18next";

const SpratlyIslands = ({ className = "" }) => {
    const { t } = useTranslation();
    return (
        <div className={`relative ${className}`}>
            {/* Marker and label */}
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 whitespace-nowrap flex items-center flex flex-col gap-[4px] z-2 cursor-pointer">
                <span className="hnv_region_active_map_title text-[#1A2A44] text-[14px] font-medium">
                    {t("Spratly Islands")}
                </span>
            </div>

            {/* SVG */}
            <svg
                className={`${className} group cursor-pointer`}
                xmlns="http://www.w3.org/2000/svg"
                width="199"
                height="89"
                viewBox="0 0 199 89"
                fill="none"
            >
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M91.3633 13.3114C91.3633 13.3114 90.5404 16.4539 91.3633 16.9857C92.1861 17.5175 91.7021 17.856 91.3633 18.001C91.0244 18.146 91.0244 19.6447 91.5085 20.3699C92.0409 21.0951 93.2026 21.6269 93.735 21.4819C94.2675 21.3368 94.9935 17.8559 93.8802 15.0519C92.8154 12.2962 91.4601 12.8763 91.3633 13.3114Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M111.547 6.59139C112.274 6.10793 112.709 6.01124 112.516 5.14102C112.322 4.2708 112.225 3.54566 110.386 3.49731C110.386 3.49731 109.611 3.69069 109.515 4.27083C109.418 4.85098 108.982 5.76954 109.515 6.253C110.095 6.73645 110.87 7.07485 111.547 6.59139Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M118.179 5.76951C118.518 5.43109 118.373 4.70589 118.373 4.12575C118.324 3.59394 117.792 2.48202 116.436 3.06216C116.436 3.06216 115.759 4.60924 116.194 5.43111C116.63 6.30134 117.84 6.15628 118.179 5.76951Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M127.134 5.38271C127.763 4.75422 127.956 3.64227 127.618 2.96543C127.279 2.24024 126.843 2.04687 126.311 1.70845C125.778 1.37003 125.246 1.70845 125.246 1.70845C125.246 1.70845 124.907 4.36745 125.246 4.89926C125.681 5.43106 126.553 6.01121 127.134 5.38271Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M115.033 11.2327C114.888 11.7161 115.081 11.9095 116.146 11.7644C117.259 11.6194 118.566 10.9426 117.792 9.15376C117.017 7.36497 116.146 7.99349 114.984 8.09018C114.984 8.09018 114.113 8.96039 114.404 9.83062C114.742 10.6525 115.226 10.7492 115.033 11.2327Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M56.2224 32.6981C55.2059 33.2782 52.5921 36.324 52.4953 36.7108C52.3985 37.1459 48.5746 40.1916 49.4459 41.1586C50.3172 42.1255 52.9309 41.0619 53.7054 40.6751C54.4799 40.3367 55.0607 40.6268 55.0123 39.0314C54.9639 37.436 53.9958 37.436 53.9958 37.436C55.0123 37.3876 59.3202 36.324 59.0782 34.8253C58.7878 33.4233 57.2389 32.1179 56.2224 32.6981Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M3.12362 79.9318C3.12362 79.9318 2.97842 79.0132 2.25237 79.1099C1.52631 79.2066 0.848657 80.3669 1.18748 80.802C1.52631 81.2371 1.81674 81.1404 2.10716 81.0437C2.10716 81.0437 1.91355 81.5272 2.10716 81.8173C2.30077 82.1074 2.83323 82.3491 3.51087 82.059C4.18852 81.769 4.57575 80.8987 4.47894 80.4153C4.38214 79.9318 3.89808 79.8835 3.12362 79.9318Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M13.9659 78.9165C13.9659 78.9165 11.4974 78.3364 10.9165 78.8198C10.2873 79.2549 10.2389 80.4153 10.7713 80.6086C11.3038 80.802 13.2399 81.0921 13.9659 80.6086C14.7404 80.1252 14.5952 79.1099 13.9659 78.9165Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M25.9214 67.507C24.5661 67.4103 23.9853 68.1838 24.0337 68.8123C24.0821 69.4408 22.9688 69.4892 22.9204 70.4561C22.872 71.423 23.2108 73.0184 24.5661 72.8734C25.873 72.7283 26.7443 72.7767 27.0347 71.6647C27.3251 70.5528 28.632 71.3746 28.4868 70.1176C28.4384 69.8759 27.3251 67.5553 25.9214 67.507Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M31.0524 65.7182C29.7455 65.7182 29.0195 66.2017 29.3583 67.1202C29.7455 68.0388 29.7455 68.619 30.5684 69.0541C31.3913 69.4892 32.5045 70.2144 33.1338 69.7309C33.763 69.2475 34.0535 69.4892 33.521 68.0388C33.521 67.9905 32.3593 65.7182 31.0524 65.7182Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M42.7662 69.6341C41.0237 69.5375 41.7497 70.0693 40.7332 69.8275C40.7332 69.8275 39.1843 69.3441 38.5551 69.8275C37.9258 70.311 37.587 70.8912 37.6838 71.423C37.7806 71.9548 38.2163 73.3084 38.8939 73.4051C39.5716 73.5018 39.3295 73.4051 40.2492 73.2601C41.1689 73.115 40.8785 73.1634 42.379 73.4535C43.8795 73.7435 44.5087 73.5985 44.6055 72.0514C44.6539 70.5044 44.5087 69.7308 42.7662 69.6341Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M50.317 66.5884C49.9781 67.7487 52.6404 69.1507 51.4787 69.6342C51.4787 69.6342 49.4457 68.8123 48.5261 69.6342C47.6064 70.456 47.1708 71.2296 47.9452 71.6163C48.7197 72.0031 49.5909 72.1965 50.7526 72.1965C51.9143 72.1965 51.0914 71.4713 52.2047 70.7461C53.2696 69.9726 55.1089 68.6189 53.9472 66.9751C52.7856 65.283 50.7042 65.4281 50.317 66.5884Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M154.143 5.67282C153.368 6.05959 153.949 7.3649 153.562 7.70332C153.223 8.04174 150.948 7.89668 150.803 8.7669C150.658 9.63712 150.464 10.9908 151.771 11.6193C153.078 12.2478 153.901 12.5379 154.53 11.861C155.159 11.1842 155.788 10.4107 154.917 8.7669C154.869 8.67021 156.66 8.38017 156.418 7.17153C156.272 5.96289 154.869 5.28606 154.143 5.67282Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M162.758 19.3063C162.758 19.3063 161.113 18.5328 160.048 19.7414C158.983 20.9501 159.806 22.207 160.241 22.4971C160.725 22.7872 162.323 23.3673 163.436 22.7388C164.549 22.1103 165.372 19.8381 162.758 19.3063Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M125.827 64.5579C125.004 64.9446 124.471 65.5248 124.471 66.4433C124.471 67.3619 124.278 67.507 125.294 68.3772C125.294 68.3772 127.037 68.8606 127.763 68.3772C128.489 67.8937 129.408 66.8301 128.489 65.4281C127.617 64.0744 126.649 64.1711 125.827 64.5579Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M159.564 41.9321C158.741 41.5937 158.257 41.4003 157.628 42.1255C157.047 42.899 156.66 43.3341 156.998 44.2044C157.337 45.0746 156.66 46.1865 159.177 46.1865C159.177 46.1865 160.822 45.9448 160.822 44.2044C160.822 42.4639 160.338 42.2705 159.564 41.9321Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M107.143 44.5911C107.143 44.5911 105.691 44.5428 105.497 45.2196C105.352 45.9448 104.577 46.0415 105.497 47.1534C106.417 48.2654 107.143 49.0389 107.869 48.1687C108.643 47.2985 108.305 46.9117 108.692 46.1382C109.079 45.3647 108.547 44.7845 107.143 44.5911Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M181.732 44.4461C180.232 43.2858 179.409 42.9957 178.489 43.4308C177.57 43.8659 176.311 42.8507 177.328 45.6064C177.328 45.6064 178.538 47.1051 180.28 46.815C182.023 46.5733 183.281 45.6064 181.732 44.4461Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M109.369 26.7999C109.369 26.7999 111.257 27.4284 111.354 26.6065C111.451 25.7846 111.209 25.2045 111.209 25.2045C111.209 25.2045 111.693 25.3979 112.274 24.6243C112.855 23.8508 112.758 22.6905 111.596 22.4488C110.434 22.2071 109.369 22.2071 109.369 23.0773C109.369 23.9475 109.66 24.3343 109.66 24.3343C109.66 24.3343 108.934 24.1409 108.643 24.6243C108.353 25.2045 107.433 25.5913 109.369 26.7999Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M110.531 29.7007C109.902 29.3622 110.095 29.0721 110.095 29.0721C109.563 26.7999 107.772 27.9119 107.772 27.9119C107.337 28.1053 106.998 28.4437 106.949 29.0238C106.901 29.604 108.014 30.8126 109.95 32.263C111.935 33.7134 112.08 32.263 112.128 31.5862C112.177 30.9093 111.16 30.0874 110.531 29.7007Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M114.694 27.1867C113.919 26.6065 113.242 26.4614 112.903 26.8965C112.612 27.38 112.903 27.7184 112.467 28.0085C112.031 28.2986 111.693 28.4436 111.838 28.8788C112.031 29.3622 111.838 29.6039 112.661 29.8457C112.661 29.8457 114.742 30.039 115.081 29.4105C115.516 28.8304 115.468 27.7668 114.694 27.1867Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M118.373 23.9475C117.646 23.9475 117.453 24.0925 116.969 24.6727C116.969 24.6727 116.388 25.3496 116.775 26.2198C117.162 27.1384 117.792 27.5734 118.421 27.6218C119.05 27.6701 119.825 27.2834 120.115 26.6549C120.405 26.0264 120.502 24.8661 120.115 24.4793C119.728 24.0925 119.099 23.9475 118.373 23.9475Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M126.988 19.5481C126.988 18.4844 126.795 17.2758 125.391 17.1308C124.036 16.9857 123.406 17.2758 122.245 18.146C121.083 19.0162 121.373 20.1766 120.405 20.2249C119.437 20.2733 118.227 20.2732 118.179 20.9984C118.13 21.7236 117.114 21.4335 116.436 21.4335C115.807 21.4335 115.081 21.4335 115.081 22.3037C115.033 23.174 115.42 24.2859 117.211 23.7058C119.05 23.1256 120.067 23.5124 120.067 23.5124C120.067 23.5124 121.18 24.0925 122.051 23.6574C122.922 23.2223 123.019 22.7872 122.971 22.0137C122.922 21.2401 122.777 20.5633 123.503 20.4666C124.278 20.3699 124.617 20.805 125.391 20.805C126.165 20.805 126.988 20.66 126.988 19.5481Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M195.382 61.9472C193.204 61.8022 192.817 63.591 192.817 63.591C192.769 64.5095 192.672 64.5579 193.591 65.3314C194.511 66.1049 194.995 65.4281 195.431 65.0413C195.866 64.6546 196.108 64.5579 196.931 64.2678C197.706 63.9294 197.561 62.0922 195.382 61.9472Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className={`${className} stroke-[#A3A3A3] group-hover:stroke-[#007BFF] transition-all duration-500`}
                    d="M153.949 84.2346C152.739 83.9929 152.448 84.5246 151.48 84.4279C150.561 84.3312 150.028 83.7995 149.593 84.4763C149.157 85.1532 148.334 85.6849 149.351 86.7002C149.351 86.7002 150.367 87.4737 151.238 87.1837C152.158 86.8936 151.722 86.8936 152.739 87.232C153.804 87.6188 154.965 87.6188 155.062 86.7002C155.159 85.83 155.159 84.4763 153.949 84.2346Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default SpratlyIslands;
