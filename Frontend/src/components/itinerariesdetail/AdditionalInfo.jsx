import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronUp, ChevronDown } from "lucide-react";

const accordionData = [
    {
        id: "item-1",
        icon: (
            <div className="flex flex-col">
                <div className="h-1 w-5 bg-blue-500 mb-1"></div>
                <div className="h-1 w-5 bg-blue-500 mb-1"></div>
                <div className="h-1 w-5 bg-blue-500"></div>
            </div>
        ),
        title: "Cancellation Policy",
        content:
            "Cancel within 24 hours for a full refund. Even up to 7 days before your experience, you'll receive a refund, minus the service fee.",
        defaultOpen: true,
    },
    {
        id: "item-2",
        icon: (
            <div className="flex flex-col">
                <div className="h-1 w-5 bg-blue-500 mb-1"></div>
                <div className="h-1 w-5 bg-blue-500"></div>
            </div>
        ),
        title: "Payment Policy",
        content: "Payment details go here.",
    },
    {
        id: "item-3",
        icon: (
            <div className="flex flex-col">
                <div className="h-1 w-5 bg-blue-500 mb-1"></div>
                <div className="h-1 w-5 bg-blue-500 mb-1"></div>
                <div className="h-1 w-5 bg-blue-500"></div>
            </div>
        ),
        title: "Notes",
        content: "Notes content goes here.",
    },
    {
        id: "item-4",
        icon: (
            <div className="rounded-full border-2 border-blue-500 p-1">
                <div className="w-3 h-3 border-t-2 border-l-2 border-blue-500 rounded-full"></div>
            </div>
        ),
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
                        <AccordionTrigger className="flex items-center justify-between py-3 px-0">
                            <div className="flex items-center text-left">
                                <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-500 mr-4">
                                    {icon}
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 font-[Visit_Qatar]">
                                    {title}
                                </h3>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-14 pr-4 pb-4 text-lg text-gray-700 font-[Visit_Qatar]">
                            {content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default AdditionalInfo;
