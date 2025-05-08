import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

const items = [
    {
        value: "best-time",
        title: "Best time to travel",
        content: (
            <ul className="list-disc pl-5 space-y-2 text-[#1A2A44] text-[16px]">
                <li>
                    Hanoi has four distinct seasons: spring (Jan-Apr), summer
                    (May-Aug), autumn (Sep-Nov) and winter (Dec-Feb).
                </li>
                <li>
                    The best time to visit is autumn (Sep-Nov) when the weather
                    is cool and there are many cultural festivals.
                </li>
                <li>
                    The Mid-Autumn Festival in September fills the city with
                    lanterns and children's activities.
                </li>
            </ul>
        ),
    },
    { value: "from-airport", title: "Getting from the airport" },
    { value: "around-city", title: "Getting around the city" },
    { value: "culture-laws", title: "Culture and laws" },
    { value: "food-entertainment", title: "Food and entertainment" },
];

const NotesContent = () => (
    <Accordion
        type="single"
        collapsible
        defaultValue="best-time"
        className="w-full space-y-4"
    >
        {items.map(({ value, title, content }) => (
            <AccordionItem
                key={value}
                value={value}
                className="bg-white rounded-md shadow-sm px-4 py-3"
            >
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);

export default NotesContent;
