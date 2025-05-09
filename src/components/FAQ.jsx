import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ui/accordion"

const FAQ = ({ className = '' }) => {
    return (
        <section className={`container mx-auto ${className}`}>
            <h2 className="text-[#1A2A44] text-[40px] font-bold mb-[10px]">FAQs</h2>
            <hr />
            <div className="grid grid-cols-2 gap-[30px]">
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[#1A2A44] text-[20px] font-normal cursor-pointer">
                                Is it accessible?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#1A2A44] text-[16px] font-normal">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[#1A2A44] text-[20px] font-normal cursor-pointer">
                                Is it styled?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#1A2A44] text-[16px] font-normal">
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[#1A2A44] text-[20px] font-normal cursor-pointer">
                                Is it animated?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#1A2A44] text-[16px] font-normal">
                                Yes. It&apos;s animated by default, but you can disable it if you
                                prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[#1A2A44] text-[20px] font-normal cursor-pointer">
                                Is it accessible?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#1A2A44] text-[16px] font-normal">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[#1A2A44] text-[20px] font-normal cursor-pointer">
                                Is it styled?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#1A2A44] text-[16px] font-normal">
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[#1A2A44] text-[20px] font-normal">
                                Is it animated?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#1A2A44] text-[16px] font-normal">
                                Yes. It&apos;s animated by default, but you can disable it if you
                                prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQ