import { NavLink } from "react-router";

const BestTimeToVisit = () => {
    return (
        <section className="container mx-auto px-4 py-10 max-w-4xl">
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#1A2A44] mb-6">
                When is the best time to visit Dubai?
            </h2>
            <div className="text-[#505050] text-[16px] space-y-4 leading-relaxed">
                <p>
                    There's a huge amount to enjoy in Dubai, no matter what time
                    of year you visit – but if you're looking for specific
                    activities or conditions, then it's best to visit Dubai at
                    the most appropriate time.
                </p>
                <p>
                    If you're looking for the best weather, winter in Dubai
                    brings mild temperatures and sunny days, making it ideal for
                    being out and about. Spring and autumn also offer good
                    weather, but can be warmer than winter – great for those who
                    crave the heat.
                </p>
                <p>
                    For the best value, and opportunities to enjoy Dubai without
                    the crowds, summer is an ideal time to visit. While
                    temperatures are high during the summer, there are plenty of
                    indoor and air-conditioned attractions to enjoy – and you
                    can take advantage of much cheaper flights and hotels.
                </p>
                <p>
                    Finally, if you want to enjoy a specific festival or
                    activity, make sure you book the right dates:{" "}
                    <NavLink
                        to="/dubai-shopping-festival"
                        className="text-[#0077B6] underline hover:text-[#005f8c] transition"
                    >
                        Dubai Shopping Festival
                    </NavLink>
                    is held over the winter months, while{" "}
                    <NavLink
                        to="/ramadan-in-dubai"
                        className="text-[#0077B6] underline hover:text-[#005f8c] transition"
                    >
                        Ramadan in Dubai
                    </NavLink>{" "}
                    starts in March, with Dubai Food Festival following in late
                    spring.
                </p>
                <p>
                    Find more information below on what's happening every month
                    in Dubai.
                </p>
            </div>
        </section>
    );
};

export default BestTimeToVisit;
