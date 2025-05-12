const TabButtons = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { key: "spots", label: "List of spots" },
        { key: "itinerary", label: "Itinerary" },
        { key: "notes", label: "Notes & Tips" },
    ];

    return (
        <div className="sticky top-0 flex justify-between bg-white border-b z-10 rounded-t-[16px] md:rounded-t-[30px] h-[52px]">
            {tabs.map((tab) => (
                <div
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 flex justify-center items-center cursor-pointer text-[18px] font-medium ${
                        activeTab === tab.key
                            ? "border-b-4 text-[#007BFF] border-[#007BFF]"
                            : "text-[#1A2A44]"
                    }`}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
};

export default TabButtons;
