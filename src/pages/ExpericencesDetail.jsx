import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Breadcrumb from "@components/Breadcrumb";

import ExperienceHeader from "@components/experiences/ExperienceHeader";
import ExperienceSidebar from "@components/experiences/ExperienceSidebar";
import ExperienceMainContent from "@components/experiences/ExperienceMainContent";
import RelatedPostsSidebar from "@components/experiences/RelatedPostsSidebar";
import KeepExploringSection from "@components/experiences/KeepExploringSection";

const ExperiencesDetail = () => {
    const { t } = useTranslation();
    const keepExploringRef = useRef(null);
    //   const asideRightRef = useRef(null);

    const [showSidebar, setShowSidebar] = useState(true);
    const [showToggleButton, setShowToggleButton] = useState(true);
    const [stuckRight, setStuckRight] = useState(true);
    const [activeId, setActiveId] = useState("");
    const [showMoreSocials, setShowMoreSocials] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const isVisible = entry.isIntersecting;
                setShowToggleButton(!isVisible);
            },
            { rootMargin: "0px 0px -170px 0px", threshold: 0 }
        );
        const current = keepExploringRef.current;
        if (current) observer.observe(current);
        return () => current && observer.unobserve(current);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setStuckRight(!entry.isIntersecting),
            { rootMargin: "0px 0px -170px 0px", threshold: 0 }
        );
        const current = keepExploringRef.current;
        if (current) observer.observe(current);
        return () => current && observer.unobserve(current);
    }, []);

    // useEffect(() => {
    //     const headings = document.querySelectorAll("[id]");
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             for (let entry of entries) {
    //                 if (entry.isIntersecting) {
    //                     setActiveId(entry.target.id);
    //                     break;
    //                 }
    //             }
    //         },
    //         { threshold: 0.3, rootMargin: "0px 0px -40% 0px" }
    //     );
    //     headings.forEach((el) => observer.observe(el));
    //     return () => observer.disconnect();
    // }, []);

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Experiences"), href: "/" },
        { label: t("Nature & Adventure"), href: "/" },
        { label: "Unmissable attractions in Nha Trang" },
    ];

    const relatedPosts = [
        {
            title: "First look: The St. Regis Aruba is home to the...",
            image: "https://www.travelandleisure.com/thmb/EVx5B9ofYTKDLxQzT3VegvyMEu4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-lead-image-ANTIGUAGUIDE0425-3771969164664eccbd3bd8d2104e87c9.jpg",
        },
        {
            title: "When to transfer Chase points instead of...",
            image: "https://www.travelandleisure.com/thmb/fMSRA1FKVH4knzQ01WH8YS5D6Nc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-best-time-to-visit-ANTIGUAGUIDE0425-9870b086df744a3ab57a77d871d571a4.jpg",
        },
    ];

    const explorePosts = {
        hero: {
            title: "This Tropical Island Has 365 Beaches - One for Every Day of the Year",
            date: "20 Apr, 2025",
            excerpt:
                "Plenty of Caribbean islands are known for their beaches, but blissfully beautiful Antigua beats them all...",
            image: "https://s.yimg.com/ny/api/res/1.2/jwPFmuN6FGN4YDBCmlugzA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/21527a53743c5aa41d91ef3c1d97323e",
        },
        list: [
            {
                title: "Explore cultural villages in northern Vietnam",
                date: "18 Mar, 2025",
                image: "https://s.yimg.com/ny/api/res/1.2/RzqlDu4esWjSL0GxwLb.ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/19044a0d7dfb8855c1e280e18049f43d",
            },
            {
                title: "Explore cultural villages in northern Vietnam",
                date: "18 Mar, 2025",
                image: "https://s.yimg.com/ny/api/res/1.2/RzqlDu4esWjSL0GxwLb.ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/19044a0d7dfb8855c1e280e18049f43d",
            },
            {
                title: "Explore cultural villages in northern Vietnam",
                date: "18 Mar, 2025",
                image: "https://s.yimg.com/ny/api/res/1.2/RzqlDu4esWjSL0GxwLb.ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/19044a0d7dfb8855c1e280e18049f43d",
            },
            {
                title: "Explore cultural villages in northern Vietnam",
                date: "18 Mar, 2025",
                image: "https://s.yimg.com/ny/api/res/1.2/RzqlDu4esWjSL0GxwLb.ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/19044a0d7dfb8855c1e280e18049f43d",
            },
        ],
    };

    return (
        <div>
            <ExperienceHeader />
            <div className="container mx-auto py-[16px] relative">
                <Breadcrumb
                    className="m-[0px_40px_28px] text-[14px]"
                    items={breadcrumdItems}
                />
            </div>

            <main className="container mx-auto">
                <ExperienceSidebar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                    showToggleButton={showToggleButton}
                    activeId={activeId}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[29px]">
                    <ExperienceMainContent
                        showMoreSocials={showMoreSocials}
                        setShowMoreSocials={setShowMoreSocials}
                        keepExploringRef={keepExploringRef}
                    />
                    <RelatedPostsSidebar
                        relatedPosts={relatedPosts}
                        stuckRight={stuckRight}
                    />
                </div>
            </main>

            <KeepExploringSection explorePosts={explorePosts} />
        </div>
    );
};

export default ExperiencesDetail;
