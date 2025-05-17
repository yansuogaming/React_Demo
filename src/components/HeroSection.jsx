import { FaArrowDown } from "react-icons/fa6";

const HeroSection = ({ title, image, children, showArrowDown = false }) => {
    return (
        <section className="relative text-white h-[600px]">
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,58,0.20)_0%,rgba(4,18,58,0.40)_100%)]" />

            <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
                <h1 className="text-center text-[32px] sm:text-[40px] md:text-[60px] font-bold drop-shadow-md w-full">
                    {title}
                </h1>
                <div className="mt-4 text-center text-[16px] sm:text-[18px] md:text-[20px] font-normal max-w-[700px] mx-auto leading-relaxed">
                    {children}
                </div>
            </div>

            {showArrowDown && (
                <FaArrowDown className="hidden sm:block absolute bottom-[20px] text-[24px] left-1/2 -translate-x-1/2" />
            )}
        </section>
    );
};

export default HeroSection;
