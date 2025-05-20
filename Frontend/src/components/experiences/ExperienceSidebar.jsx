import React from "react";
import { FaBookOpen } from "react-icons/fa6";

const ExperienceSidebar = ({
    showSidebar,
    setShowSidebar,
    showToggleButton,
    activeId,
    sectionRefs,
    contentSections,
}) => {
    const handleClick = (id) => {
        const section = sectionRefs.current[id]?.current;
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });

            if (window.innerWidth < 1024) {
                setShowSidebar(false);
            }
        }
    };

    return (
        <>
            {/* Toggle Button for mobile */}
            {!showSidebar && showToggleButton && (
                <button
                    onClick={() => setShowSidebar(true)}
                    className="fixed left-4 top-[140px] z-50 bg-white border rounded-full shadow-md p-2 hover:bg-gray-100 lg:hidden"
                >
                    <FaBookOpen className="text-[#1A2A44]" />
                </button>
            )}

            {/* === MOBILE/TABLET SIDEBAR === */}
            {showSidebar && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                        onClick={() => setShowSidebar(false)}
                    />
                    {/* Drawer Sidebar */}
                    <div
                        className={`
                            fixed top-0 left-0 h-full w-[280px] bg-white z-50 p-4 shadow-lg 
                            transition-transform duration-300 lg:hidden
                            ${
                                showSidebar
                                    ? "translate-x-0"
                                    : "-translate-x-full"
                            }
                        `}
                    >
                        <div className="flex items-center justify-between mb-[16px]">
                            <h3 className="font-bold text-[#1A2A44] text-[16px]">
                                Content
                            </h3>
                            <button
                                onClick={() => setShowSidebar(false)}
                                className="text-[14px] px-3 py-1 bg-[#F5F6FA] text-gray-500 rounded hover:underline"
                            >
                                Close
                            </button>
                        </div>
                        <ol className="border-l-[2px] border-[#D9D9D9] pl-[17px] space-y-3 text-[#1A2A44] text-sm flex flex-col gap-[4px]">
                            {contentSections.map((item, idx) => (
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
                </>
            )}

            {/* === DESKTOP SIDEBAR === */}
            <div className="hidden lg:block lg:w-[230px] lg:float-left lg:min-h-[1200px] lg:mr-[34px] 2xl:ml-0 lg:sticky lg:top-[170px]">
                <div className="bg-white p-4 text-sm">
                    <div className="flex items-center gap-[6px] mb-[16px]">
                        <h3 className="font-[700] text-[#1A2A44] text-[16px]">
                            Content
                        </h3>
                    </div>
                    <ol className="border-l-[2px] border-[#D9D9D9] pl-[17px] space-y-3 text-[#1A2A44] text-sm flex flex-col gap-[4px]">
                        {contentSections.map((item, idx) => (
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
        </>
    );
};

export default ExperienceSidebar;
