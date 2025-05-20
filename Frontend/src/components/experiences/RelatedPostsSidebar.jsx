import React from "react";
import { NavLink } from "react-router";

const RelatedPostsSidebar = ({ relatedPosts, stuckRight }) => {
    return (
        <div
            className={`hidden lg:block lg:col-span-3 ${
                stuckRight ? "sticky top-[170px]" : ""
            }`}
        >
            <div>
                <h3 className="text-[16px] font-[700] text-[#1A2A44] mb-[16px]">
                    Explore more
                </h3>

                {relatedPosts.map((post, i) => (
                    <div
                        key={i}
                        className={`flex flex-col gap-[10px] pb-[25px] ${
                            i === relatedPosts.length - 1
                                ? "border-b border-[#D9D9D9]"
                                : ""
                        }`}
                    >
                        <img
                            src={post.image}
                            alt="Related"
                            className="w-full h-[120px] object-cover rounded-md"
                        />
                        <p className="text-[16px] font-[700] text-[#000] leading-snug">
                            {post.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Quảng cáo */}
            <NavLink to="/">
                <img
                    src="https://mochibooks.vn/wp-content/uploads/2023/11/z4903684139997_18e5be009706c977675ecfd148748cbd-510x727.jpg"
                    alt="Ad banner"
                    className="w-full rounded shadow mt-6"
                />
            </NavLink>
        </div>
    );
};

export default RelatedPostsSidebar;
