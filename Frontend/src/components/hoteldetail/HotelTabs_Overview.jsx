import HotelOverview_RightBox from "./HotelOverview_RightBox";

const HotelTabs_Overview = () => {
    return (
        <div className="grid md:grid-cols-12 gap-6">
            {/* Left content */}
            <div className="md:col-span-9">
                <p className="text-sm text-gray-700 leading-relaxed">
                    Situated in the picturesque and ideal location along the
                    Vũng Tàu beachfront, Premier Pearl is one of Vũng Tàu’s
                    leading luxury beach hotels...
                    <br />
                    <br />
                    Additionally, Premier Pearl is equipped with modern
                    facilities and offers a variety of services...
                    <br />
                    <br />
                    Premier Pearl Hotel is a fantastic base for exploring the
                    vibrant city...
                    <span className="text-blue-500 cursor-pointer hover:underline">
                        {" "}
                        View more
                    </span>
                </p>

                <h3 className="text-base font-semibold mt-6 mb-3">
                    Most popular facilities
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                        🛎️ 24 hour front desk
                    </li>
                    <li className="flex items-center gap-2">
                        📶 Free Internet
                    </li>
                    <li className="flex items-center gap-2">💆 Spa service</li>
                    <li className="flex items-center gap-2">
                        🧹 Daily housekeeping
                    </li>
                    <li className="flex items-center gap-2">
                        🥐 In-room breakfast
                    </li>
                    <li className="flex items-center gap-2">🍽️ Restaurant</li>
                    <li className="flex items-center gap-2">
                        👶 Children’s play area
                    </li>
                </ul>
            </div>

            {/* Right column */}
            <div className="md:col-span-3">
                <HotelOverview_RightBox />
            </div>
        </div>
    );
};

export default HotelTabs_Overview;
