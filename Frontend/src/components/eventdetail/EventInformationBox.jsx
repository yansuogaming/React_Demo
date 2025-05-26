import { NavLink } from "react-router";
import { TbCalendarTime } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { format, fromUnixTime, getDate } from "date-fns";

export default function EventInformationBox({ event }) {
    const startDate = fromUnixTime(event.start_date * 1000);
    const endDate = fromUnixTime(event.due_date * 1000);

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
                            {format(startDate, 'MMM').toUpperCase()}
                        </span>
                        <span className="text-[#000] text-[28px] font-[700]">
                            {getDate(startDate)}
                        </span>
                    </div>
                    <div>
                        <div className="flex gap-[9px] items-center text-[#1A2A44] mb-[3px]">
                            <TbCalendarTime className="text-[#494951]" />
                            <p className="text-[16px] font-[400]">
                                {format(startDate, 'HH:mm dd/MM/yyyy')} - {format(endDate, 'HH:mm dd/MM/yyyy')}.
                            </p>
                        </div>
                        <div className="flex gap-[9px] items-center text-[#1A2A44] mb-[3px]">
                            <CiLocationOn />
                            <NavLink
                                to="/"
                                className="text-[#0077B6] hover:underline cursor-pointer"
                            >
                                {event.address}
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
                {event.schedule.map((item) => {
                    return (
                        <>
                            <h3 className="text-[24px] font-[500] mb-[16px]">
                                {item.title}
                            </h3>
                            <div className="text-[18px] font-[400] space-y-4 mb-[60px]" dangerouslySetInnerHTML={{ __html: item.intro }}></div>
                        </>
                    )
                })}
            </div>

            {/* Ticket Info */}
            {/* <div className="text-[#1A2A44] mb-[60px]">
                <h3 className="text-[24px] font-[500]">Ticket Info</h3>
                <p className="text-[18px] font-[400]">
                    Enjoy full access to this event without spending a dime – no
                    reservations, no purchases, just pure experience waiting to
                    be discovered.
                </p>
                <button className="mt-[20px] p-[11px_24px] bg-[#09A66D] text-white rounded-[4px] font-[500] text-[16px] hover:bg-[#43a163] transition cursor-pointer">
                    Completely free
                </button>
            </div> */}

            {/* Organizer */}
            {/* <div
                className="p-[26px_24px] sm:flex items-start gap-[65px]"
                style={{
                    borderRadius: "8px",
                    background: "#FFF",
                    boxShadow: "0px 1px 4px 0px rgba(3, 54, 63, 0.4)",
                }}
            >
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
            </div> */}
        </section>
    );
}
