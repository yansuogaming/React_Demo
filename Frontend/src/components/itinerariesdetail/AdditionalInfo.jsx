import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { TbShieldCancel } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { FaPassport, FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router";

const accordionData = [
    {
        id: "item-1",
        icon: <TbShieldCancel size={28} />,
        title: "Cancellation Policy",
        content:
            "Cancel within 24 hours for a full refund. Even up to 7 days before your experience, you'll receive a refund, minus the service fee.",
        defaultOpen: true,
    },
    {
        id: "item-2",
        icon: <RiSecurePaymentLine size={28} />,
        title: "Payment Policy",
        content: "Payment details go here.",
    },
    {
        id: "item-3",
        icon: <LuNotebookPen size={28} />,
        title: "Notes",
        content: "Notes content goes here.",
    },
    {
        id: "item-4",
        icon: <FaPassport size={28} />,
        title: "Visa Application Documents",
        content: "Visa application document details go here.",
    },
];

const AdditionalInfo = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-8 text-gray-900">
                    Additional Info
                </h2>

                <Accordion
                    type="multiple"
                    defaultValue={["item-1"]}
                    className="space-y-4"
                >
                    {accordionData.map(({ id, icon, title, content }) => (
                        <AccordionItem value={id} key={id}>
                            <AccordionTrigger className="px-0 py-3">
                                <div className="flex items-center gap-4">
                                    {/* Icon bên trái */}
                                    <div className="min-w-[28px] text-blue-500 mt-1">
                                        {icon}
                                    </div>

                                    {/* Tiêu đề bên phải icon */}
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {title}
                                    </h3>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="pl-[40px] pr-4 pb-4 text-lg text-gray-700">
                                {content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            {/* Operated by Box */}
            <div
                className="mt-[60px] rounded-[8px] p-[24px]"
                style={{ boxShadow: "0px 1px 4px 0px rgba(3, 54, 63, 0.4)" }}
            >
                {" "}
                {/* Top row: Logo + Info */}
                <div className="flex gap-6 mb-6">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D560BAQHBlIDzkaxY4w/company-logo_200_200/company-logo_200_200/0/1691654827480/realistic_asia_logo?e=2147483647&v=beta&t=kzy1tsPet6i7ErU0ejkX9bLp5zSm_DCuGtp0Fs9kyHw"
                            alt="Realistic Asia logo"
                            className="w-[90px] h-[90px] rounded-[8px] object-contain border"
                        />
                    </div>

                    {/* Operated by + name + rating */}
                    <div>
                        <p className="text-[#494951] text-[14px] font-[400]">
                            Operated by
                        </p>
                        <h3 className="text-[#1A2A44] text-[28px] font-[700] mb-[4px]">
                            Realistic Asia
                        </h3>
                        <div className="flex items-center flex-wrap text-[16px] text-[#494951] gap-x-2">
                            <span className="font-[500] text-[#1D2D53]">
                                4.5
                            </span>
                            <FaStar className="text-[#FED141]" />
                            <span className="text-[400]">(879 reviews)</span>
                            <GoDotFill className="text-[10px] text-[#A3A3A3]" />
                            <span className="font-[500] text-[#1A2A44]">
                                13 services
                            </span>
                        </div>
                    </div>
                </div>
                {/* Bottom: Address + Contact info + Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-[16px] text-[#000] font-[400]">
                        <p className="mb-1">
                            18th Floor, VTC Online Building, 18 Tam Trinh,
                            Hanoi, Vietnam
                        </p>
                        <p>
                            Phone:{" "}
                            <NavLink
                                to="tel:02438293838"
                                className="text-[#007BFF] font-[700] hover:underline"
                            >
                                (024) 3829 3838
                            </NavLink>{" "}
                            | Email:{" "}
                            <NavLink
                                to="mailto:info@vietiso.com"
                                className="text-[#007BFF] font-[700] hover:underline"
                            >
                                info@vietiso.com
                            </NavLink>
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <button className="bg-[#007BFF] text-white text-[16px] font-[500] p-[11px_24px] rounded-[4px] hover:bg-blue-700 transition whitespace-nowrap hover:cursor-pointer">
                            Contact →
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdditionalInfo;
