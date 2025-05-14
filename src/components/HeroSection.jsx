import { FaArrowDown } from "react-icons/fa6";

const HeroSection = ({ title, image, children, showArrowDown = false }) => {
    return (
        <section className="relative text-white">
            <img src={image} alt={title} />
            <div className="absolute top-1/3 left-1/2 translate-[-50%] w-full">
                <h1 className="text-center text-[60px] font-bold text-shadow-[0_2px_4px_rgba(0_0_0_/_0.40)] w-full">
                    {title}
                </h1>
                {children}
            </div>
            {showArrowDown && <FaArrowDown
                className="absolute bottom-[20px] text-[24px] left-1/2 translate-[-50%]"
            />}
        </section>
    )
}

export default HeroSection