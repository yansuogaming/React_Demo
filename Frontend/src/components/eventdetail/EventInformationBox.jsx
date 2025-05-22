import { NavLink } from "react-router";
import { TbCalendarTime } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

export default function EventInformationBox() {
    return (
        <section className="text-[#1A2A44] mt-[44px]">
            {/* Date & Location */}
            <div className="mb-[60px]">
                <h3 className="font-[500] text-[24px] mb-[16px]">
                    Date & Location
                </h3>
                <div className="flex items-center gap-[15px] mb-[20px]">
                    <div className="flex flex-col items-center justify-center p-[8px_23px] bg-[#EEF0F5] text-[#0077B6] rounded text-center">
                        <span className="text-[#FD6050] text-[16px] font-[700]">
                            DEC
                        </span>
                        <span className="text-[#000] text-[28px] font-[700]">
                            31
                        </span>
                    </div>
                    <div>
                        <div className="flex gap-[9px] items-center text-[#1A2A44] mb-[3px]">
                            <TbCalendarTime className="text-[#494951]" />
                            <p className="text-[16px] font-[400]">
                                20:15 31/11/2024 - 0:20 01/01/2025.
                            </p>
                        </div>
                        <div className="flex gap-[9px] items-center text-[#1A2A44] mb-[3px]">
                            <CiLocationOn />
                            <NavLink
                                to="/"
                                className="text-[#0077B6] hover:underline cursor-pointer"
                            >
                                Dong Kinh Nghia Thuc Square, Hoan Kiem walking
                                street, Hanoi
                            </NavLink>
                        </div>
                    </div>
                </div>
                <button className="mt-4 p-[11px_24px] text-white bg-[#007BFF] rounded hover:bg-[#005f8c] transition cursor-pointer">
                    + Add to calendar
                </button>
            </div>

            {/* About the event */}
            <div className="text-[#1A2A44] leading-[160%]">
                <h3 className="text-[24px] font-[500] mb-[16px]">
                    About the event
                </h3>
                <div className="text-[18px] font-[400] space-y-4 mb-[60px]">
                    <p>
                        In just a few hours, 2024 will end and welcome 2025. In
                        Hanoi, there will be many venues to hold Countdown 2025
                        and fireworks to celebrate New Year 2025, creating an
                        extremely vibrant and bustling atmosphere.
                    </p>
                    <p>
                        The Herbalife Countdown Party 2025 event brings a
                        spectacular music and light party. The program features
                        famous DJs and a lineup of famous artists, promising to
                        bring vibrant performances, attracting the participation
                        of thousands of people.
                    </p>
                    <p>
                        One of the special highlights of the event is the drone
                        performance with 200 drones using advanced pyrotechnic
                        technology. This is the first time such a spectacular
                        drone performance has been held in Hanoi. The theme
                        “Live the moment” carries a positive message about
                        enjoying every moment in life, accompanying the bustling
                        atmosphere of New Year's Eve.
                    </p>
                    <p>
                        In addition to the exciting performances from famous
                        singers, Herbalife Countdown Party 2025 also has
                        entertainment and culinary areas to serve the needs of
                        the audience. This is an opportunity for everyone to not
                        only enjoy the music but also enjoy the vibrant, cozy
                        atmosphere.
                    </p>
                    <p className="font-[700]">
                        Eligibility: All people and tourists visiting Vietnam
                    </p>
                </div>
            </div>

            {/* Ticket Info */}
            <div className="text-[#1A2A44] mb-[60px]">
                <h3 className="text-[24px] font-[500]">Ticket Info</h3>
                <p className="text-[18px] font-[400]">
                    Enjoy full access to this event without spending a dime – no
                    reservations, no purchases, just pure experience waiting to
                    be discovered.
                </p>
                <button className="mt-[20px] p-[11px_24px] bg-[#09A66D] text-white rounded-[4px] font-[500] text-[16px] hover:bg-[#43a163] transition cursor-pointer">
                    Completely free
                </button>
            </div>

            {/* Organizer */}
            <div
                className="p-[26px_24px] sm:flex items-start gap-[65px]"
                style={{
                    borderRadius: "8px",
                    background: "#FFF",
                    boxShadow: "0px 1px 4px 0px rgba(3, 54, 63, 0.4)",
                }}
            >
                {/* Left: Label + Logo */}
                <div className="flex flex-col items-start mb-[8px] sm:mb-0">
                    <p className="text-[14px] text-[#494951] mb-2">
                        Organizer:
                    </p>
                    <img
                        src="https://cdn.haitrieu.com/wp-content/uploads/2023/10/Logo-Herbalife-Nutrition.png"
                        alt="Herbalife"
                        className="w-36 h-auto object-contain"
                    />
                </div>

                {/* Right: Text info */}
                <div className="text-sm text-[#1A2A44] space-y-1">
                    <p className="text-[28px] font-[700]">Herbalife Vietnam</p>
                    <div className="text-[#000] text-[16px] font-[400]">
                        <p>
                            26 Tran Cao Van, Vo Thi Sau Ward, District 3, Ho Chi
                            Minh City, Vietnam
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-[19px] text-[#000] text-[16px] font-[400]">
                        <p>
                            Phone:{" "}
                            <NavLink
                                to="tel:02838279191"
                                className="text-[#007BFF] font-[700] hover:underline"
                            >
                                028 3827 9191
                            </NavLink>
                        </p>
                        <span className="hidden sm:inline text-[#A3A3A3]">
                            |
                        </span>
                        <p>
                            Email:{" "}
                            <NavLink
                                to="mailto:dichvukhachvien@herbalife.com"
                                className="text-[#007BFF] font-[700] hover:underline"
                            >
                                dichvukhachvien@herbalife.com
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
