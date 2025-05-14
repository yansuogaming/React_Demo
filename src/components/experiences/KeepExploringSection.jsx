import React from "react";
import { NavLink } from "react-router";

const KeepExploringSection = ({ explorePosts }) => {
    return (
        <section className="mt-20 container mx-auto px-4 xl:px-0">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[24px] sm:text-[28px] font-bold text-[#1A2A44]">
                    Keep Exploring Cultural Heritage
                </h2>
                <NavLink
                    to="#"
                    className="text-sm text-blue-600 hover:underline"
                >
                    Show all →
                </NavLink>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Big post on the left */}
                <div className="lg:col-span-7 relative rounded-xl overflow-hidden group">
                    <NavLink
                        to="/"
                        className="overflow-hidden relative rounded-tl-[60px] "
                    >
                        <img
                            src={explorePosts.hero.image}
                            alt="Hero post"
                            className="w-full h-full object-cover group-hover:scale-[1.1] transform transition-all duration-500"
                        />
                    </NavLink>
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0)_100%)] p-[53px_27px_53px_27px] flex flex-col justify-end text-white">
                        <h3 className="text-[32px] font-[700] mb-[3px]">
                            <NavLink to="/" className="hover:underline">
                                {explorePosts.hero.title}
                            </NavLink>
                        </h3>
                        <p className="text-[16px] text-white font-[400] mb-[9px]">
                            {explorePosts.hero.date}
                        </p>
                        <p className="text-[16px] text-white font-[400]">
                            {explorePosts.hero.excerpt}
                        </p>
                    </div>
                </div>

                {/* List posts on the right */}
                <div className="lg:col-span-5 space-y-4">
                    {explorePosts.list.map((post, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 p-[25px_13px] bg-[#F5F6FA] rounded-[8px] group"
                        >
                            <NavLink
                                to="/"
                                className="overflow-hidden relative rounded-tl-[20px]"
                            >
                                <img
                                    src={post.image}
                                    alt="Related"
                                    className="w-[80px] h-[80px] object-cover group-hover:scale-[1.1] transform transition-all duration-500"
                                />
                            </NavLink>
                            <div className="flex-1">
                                <h3 className="text-[18px] font-[700] text-[#1A2A44] ">
                                    <NavLink to="/" className="hover:underline">
                                        {post.title}
                                    </NavLink>
                                </h3>
                                <p className="text-[14px] text-[#494951] mt-1">
                                    {post.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeepExploringSection;
