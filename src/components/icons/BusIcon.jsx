const BusIcon = ({ fill = '#007BFF', width = 36, height = 36 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 36" fill="none">
            <path stroke={fill} d="M6 15C6 9.3435 6 6.5145 7.758 4.758C9.516 3.0015 12.3435 3 18 3C23.6565 3 26.4855 3 28.242 4.758C29.9985 6.516 30 9.3435 30 15V18C30 23.6565 30 26.4855 28.242 28.242C26.484 29.9985 23.6565 30 18 30C12.3435 30 9.5145 30 7.758 28.242C6.0015 26.484 6 23.6565 6 18V15Z" strokeWidth="2" />
            <path opacity="0.5" d="M6 19.5H30" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.25 24H25.5M10.5 24H12.75" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path stroke={fill} opacity="0.5" d="M9 29.25V31.5C9 31.8978 9.15804 32.2794 9.43934 32.5607C9.72064 32.842 10.1022 33 10.5 33H12.75C13.1478 33 13.5294 32.842 13.8107 32.5607C14.092 32.2794 14.25 31.8978 14.25 31.5V30M27 29.25V31.5C27 31.8978 26.842 32.2794 26.5607 32.5607C26.2794 32.842 25.8978 33 25.5 33H23.25C22.8522 33 22.4706 32.842 22.1893 32.5607C21.908 32.2794 21.75 31.8978 21.75 31.5V30M30 13.5H31.5C31.8978 13.5 32.2794 13.658 32.5607 13.9393C32.842 14.2206 33 14.6022 33 15V16.5C33 16.7329 32.9458 16.9625 32.8416 17.1708C32.7375 17.3791 32.5863 17.5603 32.4 17.7L30 19.5M6 13.5H4.5C4.10218 13.5 3.72064 13.658 3.43934 13.9393C3.15804 14.2206 3 14.6022 3 15V16.5C3 16.7329 3.05422 16.9625 3.15836 17.1708C3.2625 17.3791 3.41371 17.5603 3.6 17.7L6 19.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.5" d="M29.25 7.5H6.75" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}

export default BusIcon