const WeatherTabs = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
        <button className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded">
            Winter in Hanoi
        </button>
        <button className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded">
            Summer in Hanoi
        </button>
        <button className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded">
            Things to do in Hanoi each month
        </button>
    </div>
);

export default WeatherTabs;
