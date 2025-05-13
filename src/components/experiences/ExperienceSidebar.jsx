import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const ExperienceSidebar = ({
    showSidebar,
    setShowSidebar,
    showToggleButton,
    activeId,
}) => {
    const contents = [
        { id: "po-nagar", label: "Po Nagar Cham Towers" },
        { id: "museum", label: "National Oceanographic Museum of Vietnam" },
        { id: "cathedral", label: "Nha Trang Cathedral" },
        { id: "vinpearl", label: "Vinpearl Amusement Park" },
        { id: "pagoda", label: "Long Son Pagoda & White Buddha" },
        { id: "hot-spring", label: "Thap Ba Hot Springs Centre" },
        { id: "waterfall", label: "Ba Ho Waterfalls" },
        { id: "museum-yersin", label: "Alexandre Yersin Museum" },
    ];

    // Create refs map
    const sectionRefs = useRef({});

    const handleClick = (id) => {
        const section = sectionRefs.current[id];
        if (section && section.scrollIntoView) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            {!showSidebar && showToggleButton && (
                <button
                    onClick={() => setShowSidebar(true)}
                    className="fixed left-4 top-[140px] z-50 bg-white border rounded-full shadow-md p-2 hover:bg-gray-100"
                >
                    <FontAwesomeIcon
                        icon={faBookOpen}
                        className="text-[#1A2A44]"
                    />
                </button>
            )}

            {showSidebar && (
                <div className="sticky w-full px-4 mb-6 lg:w-[230px] lg:px-0 lg:mr-[34px] lg:float-left lg:min-h-[1200px] lg:ml-auto 2xl:ml-0 top-[0]">
                    <div
                        className={`w-full bg-white p-4 text-sm lg:sticky lg:top-[170px]`}
                    >
                        <div className="flex items-center gap-[6px] mb-[16px]">
                            <h3 className="font-[700] text-[#1A2A44] text-[16px]">
                                Content
                            </h3>
                            <button
                                onClick={() => setShowSidebar(false)}
                                className="text-[14px] p-[1px_12px] bg-[#F5F6FA] text-gray-500 rounded-[4px] hover:underline"
                            >
                                hide
                            </button>
                        </div>

                        <ol className="border-l-[2px] border-[#D9D9D9] pl-[17px] space-y-3 text-[#1A2A44] text-sm flex flex-col gap-[4px]">
                            {contents.map((item, idx) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleClick(item.id)}
                                        className={`text-left w-full transition text-[15px] cursor-pointer ${
                                            activeId === item.id
                                                ? "text-[#007BFF]"
                                                : "text-[#1A2A44]"
                                        }`}
                                    >
                                        {`${idx + 1}. ${item.label}`}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExperienceSidebar;
