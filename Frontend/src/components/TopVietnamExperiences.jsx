
import { NavLink } from "react-router";
import ViewMoreButton from "./button/ViewMoreButton";
import Reveal from "./animation/Reveal";
import { cn } from "@lib/utils";
import { FaArrowRight } from "react-icons/fa6";

const TopVietnamExperiences = ({ className = '', data = [] }) => {
    const hoverElement = (e) => {
        const content = e.currentTarget.querySelector('.content');
        content.style.top = `calc(100% - ${content.clientHeight + 20}px)`;
    };

    const hoverLeavElement = (e) => {
        e.currentTarget.querySelector('.content').style.removeProperty('top');
    }

    return (
        <section className={`container ${className}`}>
            <h2 className="mb-[32px] text-[#1A2A44] lg:text-[40px] text-[34px] font-[700] lg:text-center">
                Unforgettable Vietnam Experiences
            </h2>
            {data.map((experienceType, index) => (
                <Reveal key={index}>
                    <NavLink
                        to="/"
                        className={cn(
                            "w-full mx-auto block relative",
                            "mt-[10px] group overflow-hidden"
                        )}
                        onMouseEnter={hoverElement}
                        onMouseLeave={hoverLeavElement}
                    >
                        <img
                            className={cn(
                                'w-full h-[280px] object-cover',
                                index == 0
                                    ? 'rounded-[60px_0_0_0]'
                                    : (index === data.length - 1)
                                        ? 'rounded-[0_0_60px_0]'
                                        : ''
                            )}
                            src={experienceType.image}
                            alt={experienceType.title}
                            loading="lazy"
                        />
                        <div
                            className={cn(
                                "absolute left-[20px] top-[calc(100%-50px)] lg:top-[calc(100%-55px)]",
                                "transition-all duration-500 lg:left-[35px] z-1 content"
                            )}
                        >
                            <h3 className="text-[28px] lg:text-[32px] font-bold text-white mb-[5px]">
                                {experienceType.title}
                            </h3>
                            <div
                                className={cn(
                                    "text-[16px] text-white opacity-0 group-hover:opacity-100",
                                    "w-[400px] transition-all duration-500"
                                )}
                                dangerouslySetInnerHTML={{ __html: experienceType.intro }}
                            >
                            </div>
                            <div
                                className={cn(
                                    "opacity-0 group-hover:opacity-100 transition-all",
                                    "duration-500 mt-[15px] text-white text-[25px]"
                                )}
                            >
                                <FaArrowRight />
                            </div>
                        </div>
                        <div
                            className={cn(
                                "w-[80%] lg:w-1/2 h-full absolute top-0 left-0",
                                index == 0
                                    ? 'bg-[linear-gradient(90deg,_#F258BE_0%,_rgba(242,88,190,0.5)_56.25%,_rgba(242,88,190,0)_100%)]'
                                    : index == 1
                                        ? 'bg-[linear-gradient(90deg,_#F26833_0%,_rgba(242,104,51,0.5)_61.37%,_rgba(242,104,51,0)_100%)]'
                                        : 'bg-[linear-gradient(90deg,_#33B6E2_0%,_rgba(51,182,226,0.5)_65.38%,_rgba(51,182,226,0)_100%)]',
                                index == 0
                                    ? 'rounded-[60px_0_0_0]'
                                    : (index === data.length - 1)
                                        ? 'rounded-[0_0_60px_0]'
                                        : ''
                            )}
                        ></div>
                    </NavLink>
                </Reveal>
            ))}
            <Reveal>
                <ViewMoreButton
                    text="Explore All Experiences"
                    className={cn(
                        "text-[#007BFF] p-[15px] w-fit mx-auto border-1",
                        "border-[#007BFF] mt-[32px] rounded-[80px] font-[700] text-[16px] lg:text-[18px]"
                    )}
                />
            </Reveal>
        </section>
    );
};

export default TopVietnamExperiences;
