import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { TbShieldCancel } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { FaPassport } from "react-icons/fa";

import { CiMenuBurger } from "react-icons/ci";

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
        <div className="max-w-4xl mx-auto font-[Visit_Qatar] mt-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 font-[Visit_Qatar]">
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
                                <h3 className="text-xl font-bold text-gray-900 font-[Visit_Qatar]">
                                    {title}
                                </h3>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="pl-[40px] pr-4 pb-4 text-lg text-gray-700 font-[Visit_Qatar]">
                            {content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default AdditionalInfo;
