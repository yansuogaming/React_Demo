const TourSidebar = () => {
    return (
        <aside className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                    CONTACT TO BOOKING
                </h3>
                <p className="text-sm font-semibold">
                    VietISO Joint Stock Company
                </p>
                <p className="text-sm text-gray-600">
                    18th Floor, VTC Online Building, 18 Tam Trinh, Hanoi,
                    Vietnam
                </p>
                <p className="text-sm">
                    Phone:{" "}
                    <a href="tel:02438293838" className="text-blue-600">
                        (024) 3829 3838
                    </a>
                </p>
                <p className="text-sm">
                    Email:{" "}
                    <a href="mailto:info@vietiso.com" className="text-blue-600">
                        info@vietiso.com
                    </a>
                </p>
            </div>

            <div className="border border-blue-300 rounded-lg p-4">
                <h3 className="text-blue-600 font-semibold text-sm mb-4">
                    The perfect choice for you:
                </h3>
                <ul className="text-sm space-y-2">
                    <li>
                        <span className="text-blue-600">✔</span> Absolute safety
                        – Supervised by travel experts
                    </li>
                    <li>
                        <span className="text-blue-600">✔</span> Verified
                        quality – Carefully selected
                    </li>
                    <li>
                        <span className="text-blue-600">✔</span> 24/7 support –
                        Always ready to assist
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default TourSidebar;
