import { FaStar } from "react-icons/fa6";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
    {
        name: "Tazeen",
        country: "Pakistan",
        flag: "🇵🇰",
        color: "bg-blue-100 text-blue-800",
        text: `I was a bit disappointed when I walked in my room because there was a weird spray on one of the walls. The room however was really spacious. The staff was very courteous. I loved how when after hours they could not understand English,...`,
    },
    {
        name: "Hạnh Ngân",
        country: "Vietnam",
        flag: "🇻🇳",
        color: "bg-blue-100 text-blue-800",
        text: `I was a bit disappointed when I walked in my room because there was a weird spray on one of the walls. The room however was really spacious. The staff was very courteous. I loved how when after hours they could not understand English,...`,
    },
    {
        name: "Thomas",
        country: "Singapore",
        flag: "🇸🇬",
        color: "bg-orange-100 text-orange-800",
        text: `Charming boutique hotel. Staff were kind and very helpful. Location was great.`,
    },
];

const ratings = [
    { label: "Location", value: 9.2 },
    { label: "Facilities", value: 9.2 },
    { label: "Value for money", value: 9.1 },
    { label: "Service", value: 9.2 },
    { label: "Cleanliness", value: 9.3 },
    { label: "Comfort", value: 9.2 },
];

const HotelTabs_Reviews = () => {
    return (
        <div className="">
            {/* Header */}
            <div className="flex justify-between items-start mb-[24px]">
                <h2 className="text-[#000] text-[28px] font-[700]">
                    Guest reviews
                </h2>
                <button className="p-[9px_20px] bg-[#18BABD] text-white text-[16px] font-[500] rounded-[4px] hover:bg-[#28b3ae] transition">
                    Review
                </button>
            </div>

            {/* Score + Rating grid */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-16">
                {/* Score block */}
                <div className="min-w-[120px] pr-6 lg:pr-12">
                    <div className="flex items-center text-[36px] font-[500] text-[#18BABD] leading-none">
                        9.2{" "}
                        <span className="text-[16px] font-[400] ml-[8px]">
                            /10
                        </span>
                    </div>
                    <div className="text-[18px] font-[700] text-[#1D2D53]">
                        Excellent
                    </div>
                    <div className="text-[14px] text-[#18BABD] font-[400]">
                        From 20 review
                    </div>
                </div>

                {/* Ratings grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 flex-1">
                    {ratings.map((item) => (
                        <div key={item.label} className="space-y-1">
                            <div className="flex justify-between text-[14px] text-[#1D2D53] font-[400]">
                                <span>{item.label}</span>
                                <span>{item.value}</span>
                            </div>
                            <div className="w-full h-[6px] bg-gray-200 rounded-[4px] overflow-hidden">
                                <div
                                    className="h-full bg-[#007850] rounded-[4px]"
                                    style={{
                                        width: `${(item.value / 10) * 100}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subheading */}
            <div className="flex justify-between items-center mt-[37px] mb-[12px]">
                <h3 className="text-[18px] text-[#000] font-[700]">
                    Guests who stayed here loved
                </h3>
                <button className="text-[#18BABD] border border-[#18BABD] p-[9px_20px] cursor-pointer rounded-[4px] hover:bg-[#28b3ae] transition hover:text-[#FFFF]">
                    Read all reviews
                </button>
            </div>

            {/* Carousel */}
            <div className="relative">
                <Carousel className="w-full">
                    <CarouselContent className="pl-2">
                        {reviews.map((review, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/3 px-2"
                            >
                                <div className="h-[262px] border border-[#DADFE6] rounded-[8px] p-[28px_20px] flex flex-col justify-between bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] transition">
                                    <div>
                                        <div className="flex items-center gap-2 font-semibold text-sm mb-3">
                                            <div
                                                className={`w-[36px] h-[36px] rounded-full flex items-center justify-center uppercase ${review.color}`}
                                            >
                                                {review.name.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[14px] text-[#1D2D53] font-[500]">
                                                    {review.name}
                                                </span>
                                                <div className="flex items-center gap-[6px] text-[12px] text-[#1D2D53]">
                                                    <span>{review.flag}</span>
                                                    <span className="font-[400]">
                                                        {review.country}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#1D2D53] text-[16px] font-[400] line-clamp-4">
                                            {review.text}
                                        </p>
                                    </div>
                                    <button className="text-[16px] text-[#18BABD] font-[400] cursor-pointer hover:underline text-start">
                                        Read more
                                    </button>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Centered Prev/Next buttons */}
                    <CarouselPrevious className="hidden md:flex !left-[-18px] top-1/2 -translate-y-1/2 z-10 bg-white border border-[#DADFE6] shadow-sm rounded-full" />
                    <CarouselNext className="hidden md:flex !right-[-18px] top-1/2 -translate-y-1/2 z-10 bg-white border border-[#DADFE6] shadow-sm rounded-full" />
                </Carousel>
            </div>
        </div>
    );
};

export default HotelTabs_Reviews;
