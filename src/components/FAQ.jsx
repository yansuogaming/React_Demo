import { getListFAQs } from "@services/FAQsServices";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui/accordion";
import { decode } from "html-entities";
import { useEffect, useMemo, useState } from "react";

const FAQ = ({ className = "" }) => {
  const [listFAQs, setListFAQs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getListFAQs();
      setListFAQs(res.list_faqs||[]);
    };
    getData();
  }, []);

  const listFaqs1 = useMemo(
    () => listFAQs.filter((_, i) => i % 2 === 0),
    [listFAQs]
  );

  const listFaqs2 = useMemo(
    () => listFAQs.filter((_, i) => i % 2 === 1),
    [listFAQs]
  );


  return (
    <section className={`container ${className}`}>
      <h2 className="text-[#1A2A44] text-[40px] font-bold mb-[10px]">FAQs</h2>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        <div>
          <Accordion type="single" collapsible className="w-full">
            {listFaqs1.map((faq, i) => (
              <AccordionItem key={faq?.faq_id} value={`item-${i}`}>
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
              <AccordionItem key={faq?.faq_id} value={`item-${i}`}>
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
