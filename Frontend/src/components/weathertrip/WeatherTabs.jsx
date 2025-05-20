const WeatherTabs = () => {
    const scrollToThingsToDo = () => {
        const el = document.getElementById("things-to-do");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
            <button className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded">
                Winter in Dubai
            </button>
            <button className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded">
                Summer in Dubai
            </button>
            <button
                onClick={scrollToThingsToDo}
                className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded"
            >
                Things to do in Dubai each month
            </button>
        </div>
    );
};

export default WeatherTabs;
