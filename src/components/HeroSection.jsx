import { FaArrowDown } from "react-icons/fa6";

const HeroSection = ({ title, image, children, showArrowDown = false }) => {
    return (
        <section className="relative text-white">
            <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,58,0.20)_0%,rgba(4,18,58,0.40)_100%)]" />

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full">
                <h1 className="text-center text-[60px] font-bold drop-shadow-md w-full">
                    {title}
                </h1>
                {children}
            </div>

            {showArrowDown && (
                <FaArrowDown className="absolute bottom-[20px] text-[24px] left-1/2 -translate-x-1/2" />
            )}
        </section>
    );
};

export default HeroSection;
