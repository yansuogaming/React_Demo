import React, { createContext, useContext, useEffect, useState } from "react";

const ItinerariesContext = createContext();

export const useItineraries = () => {
    const context = useContext(ItinerariesContext);
    if (!context) {
        throw new Error(
            "useItineraries must be used within an ItinerariesProvider"
        );
    }
    return context;
};

export const ItinerariesProvider = ({ children }) => {
    const [selectedDuration, setSelectedDuration] = useState([]);
    const [selectedDeparturePoints, setSelectedDeparturePoints] = useState([]);
    const [selectedTravelStyles, setSelectedTravelStyles] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [listTours, setListTours] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [listDeparture, setListDeparture] = useState([]);
    const [listTravelstyle, setListTravelstyle] = useState([]);
    const [listTrendingTours, setListTrendingTours] = useState([]);

    const [showAllDepartures, setShowAllDepartures] = useState(false);
    const [showAllTravelstyles, setShowAllTravelstyles] = useState(false);

    const handleDurationChange = (value) => {
        setSelectedDuration((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            }
            return [...prev, value];
        });
    };

    const handleDeparturePointChange = (value) => {
        setSelectedDeparturePoints((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            }
            return [...prev, value];
        });
    };

    const handleTravelStyleChange = (value) => {
        setSelectedTravelStyles((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            }
            return [...prev, value];
        });
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const durationParam = params.get("duration");
        if (durationParam) {
            setSelectedDuration(durationParam.split(",").map(String));
        }

        const departurePointParam = params.get("departurePoint");
        if (departurePointParam) {
            setSelectedDeparturePoints(
                departurePointParam.split(",").map(String)
            );
        }

        const travelStyleParam = params.get("travelStyle");
        if (travelStyleParam) {
            setSelectedTravelStyles(travelStyleParam.split(",").map(String));
        }
        const keywordParam = params.get("keyword");
        if (keywordParam) {
            setKeyword(keywordParam);
        }
    }, []);

    useEffect(() => {
        const params = new URLSearchParams();

        if (selectedDuration.length > 0) {
            params.set("duration", selectedDuration.join(","));
        } else {
            params.delete("duration");
        }

        if (selectedDeparturePoints.length > 0) {
            params.set("departurePoint", selectedDeparturePoints.join(","));
        } else {
            params.delete("departurePoint");
        }

        if (selectedTravelStyles.length > 0) {
            params.set("travelStyle", selectedTravelStyles.join(","));
        } else {
            params.delete("travelStyle");
        }
        const keywordTimeOut = setTimeout(() => {
            if (keyword) {
                params.set("keyword", keyword);
            } else {
                params.delete("keyword");
            }
            const queryString = params.toString().replace(/%2C/g, ",");
            const newUrl = `${window.location.pathname}?${queryString}`;
            window.history.pushState({}, "", newUrl);
        }, [700]);

        if (
            selectedDeparturePoints.length === 0 &&
            selectedTravelStyles.length === 0 &&
            selectedDuration.length === 0 &&
            !keyword
        ) {
            return;
        }

        const queryString = params.toString().replace(/%2C/g, ",");
        const newUrl = `${window.location.pathname}?${queryString}`;
        window.history.pushState({}, "", newUrl);
        return () => {
            clearTimeout(keywordTimeOut);
        };
    }, [
        selectedDuration,
        selectedDeparturePoints,
        selectedTravelStyles,
        keyword,
    ]);

    const handleKeywordChange = (value) => {
        setKeyword(value);
    };

    const value = {
        selectedDuration,
        selectedDeparturePoints,
        selectedTravelStyles,
        keyword,
        currentPage,
        listTours,
        totalPage,
        listDeparture,
        listTravelstyle,
        listTrendingTours,
        showAllDepartures,
        showAllTravelstyles,
        setShowAllDepartures,
        setShowAllTravelstyles,
        handleDurationChange,
        handleDeparturePointChange,
        handleTravelStyleChange,
        handleKeywordChange,
        setCurrentPage,
        setListTours,
        setTotalPage,
        setListDeparture,
        setListTravelstyle,
        setListTrendingTours,
    };

    return (
        <ItinerariesContext.Provider value={value}>
            {children}
        </ItinerariesContext.Provider>
    );
};
