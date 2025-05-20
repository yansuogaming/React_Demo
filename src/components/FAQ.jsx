import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@ui/accordion";
import { decode } from "html-entities";

const FAQ = ({ className = '', data = [] }) => {
    const listFaqs1 = data.filter((_, i) => i % 2 === 0);
    const listFaqs2 = data.filter((_, i) => i % 2 === 1);

    return (
        <section className={`container ${className}`}>
            <h2 className="text-[#1A2A44] text-[40px] font-bold mb-[10px]">
                FAQs
            </h2>
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {listFaqs1.map((faq, i) => (
                            <AccordionItem
                                key={faq.id}
                                value={`item-${i}`}
                            >
                                <AccordionTrigger className="text-[#1A2A44] text-[20px] font-normal cursor-pointer">
                                    {faq?.title}
                                </AccordionTrigger>
                                <AccordionContent
                                    isHtml
                                    className="text-[#1A2A44] text-[16px] font-normal"
                                >
                                    {decode(faq?.content)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {listFaqs2.map((faq, i) => (
                            <AccordionItem
                                key={faq?.faq_id}
                                value={`item-${i}`}
                            >
                                <AccordionTrigger className="text-[#1A2A44] text-[20px] font-normal cursor-pointer">
                                    {faq?.title}
                                </AccordionTrigger>
                                <AccordionContent
                                    isHtml
                                    className="text-[#1A2A44] text-[16px] font-normal"
                                >
                                    {decode(faq?.content)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
