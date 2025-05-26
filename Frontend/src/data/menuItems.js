import ROUTES from "@routes/routes";

// Cấu hình menu items dưới dạng mảng
export const MENU_TYPES = {
    PLAN_YOUR_TRIP: "planYourTrip",
    EXPERIENCES: "experiences",
    DESTINATIONS: "destinations",
    EVENTS: "events",
    TRAVEL_OFFERS: "travelOffers",
};

// Mảng chứa tất cả các menu items
export const menuItems = [
    {
        type: MENU_TYPES.DESTINATIONS,
        to: ROUTES.ITINERARIES,
        title:"itineraries",
        items: [
            {
                titleKey: "Regions",
                descriptionKey: "Discover the charm of Northern Vietnam",
                to: "/",
            },
            {
                titleKey: "Iconic Highlights",
                descriptionKey: "Explore the heart of Vietnam",
                to: "/",
            },
            {
                titleKey: "UNESCO Heritage",
                descriptionKey: "Experience Southern Vietnam's vibrancy",
                to: "/",
            },
        ],
    },
    {
        type: MENU_TYPES.EXPERIENCES,
        to: ROUTES.EXPERIENCES,
        title: "experiences",
        items: [
            {
                titleKey: "Cultural Heritage",
                descriptionKey: "plan_ahead_for_travel",
                to: "/",
            },
            {
                titleKey: "Cuisine",
                descriptionKey: "from_etiquette_to_currency",
                to: "/",
            },
            {
                titleKey: "Nature & Adventure",
                descriptionKey: "book_flight_tickets",
                to: "/",
            },
            {
                titleKey: "Sustainable Travel",
                descriptionKey: "incredible_range_of_stay_options",
                to: "/",
            },
            {
                titleKey: "City Vibes",
                descriptionKey: "navigating_vietnam_is_a_breeze",
                to: "/",
            },
            {
                titleKey: "Wellness Escapes",
                descriptionKey: "guide_to_enjoying_safely",
                to: "/",
            },
            {
                titleKey: "Romantic Getaways",
                descriptionKey: "vietnam_climate_guide",
                to: "/",
            },
            {
                titleKey: "Local Life",
                descriptionKey: "all_about_vietnam_currency",
                to: "/",
            },
        ],
    },
    {
        type: MENU_TYPES.EVENTS,
        to: ROUTES.EVENTS,
        title: "events",
        items: [],
    },
    {
        type: MENU_TYPES.PLAN_YOUR_TRIP,
        to: "/",
        title: "plan_your_trip",
        items: [
            {
                titleKey: "visa_guide",
                descriptionKey: "plan_ahead_for_travel",
                to: ROUTES.VISA_GUIDE,
            },
            {
                titleKey: "essentials",
                descriptionKey: "from_etiquette_to_currency",
                to: ROUTES.ESSENTIALS,
            },
            {
                titleKey: "flights",
                descriptionKey: "book_flight_tickets",
                to: ROUTES.HOME,
            },
            {
                titleKey: "accommodation",
                descriptionKey: "incredible_range_of_stay_options",
                to: ROUTES.HOME,
            },
            {
                titleKey: "getting_around_vietnam",
                descriptionKey: "navigating_vietnam_is_a_breeze",
                to: ROUTES.GETTING_TO_AND_AROUND,
            },
            {
                titleKey: "safety",
                descriptionKey: "guide_to_enjoying_safely",
                to: ROUTES.SAFETY,
            },
            {
                titleKey: "weather",
                descriptionKey: "vietnam_climate_guide",
                to: ROUTES.WEATHER_TRIP,
            },
            {
                titleKey: "currency",
                descriptionKey: "all_about_vietnam_currency",
                to: ROUTES.CURRENCY_GUIDE,
            },
            {
                titleKey: "accessibility",
                descriptionKey: "for_travelers_with_special_needs",
                to: ROUTES.ACCESSIBILITY,
            },
            {
                titleKey: "vietnam_attractions_passes",
                descriptionKey: "unlock_savings_with_passes",
                to: ROUTES.VIETNAM_PASS,
            },
            {
                titleKey: "visa_information",
                descriptionKey: "visa_information",
                to: ROUTES.VISA_INFORMATION,
            },
            {
                titleKey: "place_to_go",
                descriptionKey: "place_to_go",
                to: ROUTES.PLACE_TO_GO,
            },
            {
                titleKey: "download_apps",
                descriptionKey: "get_apps_for_attractions",
                to: ROUTES.DOWNLOAD_APP,
            },
        ],
    },
    {
        type: MENU_TYPES.TRAVEL_OFFERS,
        title: "travel_offers",
        to: "",
        items: [],
    },
];

// Hàm tiện ích để lấy menu items theo loại
export const getMenuItemsByType = (type) => {
    const menu = menuItems.find((menu) => menu.type === type);
    return menu ? menu.items : [];
};

export const getItemByType = (type) => {
    const menu = menuItems.find((menu) => menu.type === type);
    return menu? menu : {};
};

// Giữ lại các export cũ để tương thích ngược
export const planYourTripItems = getMenuItemsByType(MENU_TYPES.PLAN_YOUR_TRIP);
export const experiencesItems = getMenuItemsByType(MENU_TYPES.EXPERIENCES);
export const destinationsItems = getMenuItemsByType(MENU_TYPES.DESTINATIONS);
