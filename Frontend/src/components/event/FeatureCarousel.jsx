import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import iconExp from "@images/ticket2.png";
import iconSupport from "@images/support.png";
import iconReview from "@images/telephone.png";

const features = [
    {
        id: 1,
        title: "Unforgettable experiences",
        description:
            "Every experience is designed to leave a lasting impression. Every event is curated with the best experiences for you to enjoy.",
        icon: iconExp,
        bg: "bg-gradient-to-b from-[#FED074] to-[#FE9D00]",
    },
    {
        id: 2,
        title: "24/7 Support",
        description:
            "Every experience is designed to leave a lasting impression. Every event is curated with the best experiences for you to enjoy.",
        icon: iconSupport,
        bg: "bg-gradient-to-b from-[#BD81F6] to-[#9249EF]",
    },
    {
        id: 3,
        title: "Good reviews",
        description:
            "Every experience is designed to leave a lasting impression. Every event is curated with the best experiences for you to enjoy.",
        icon: iconReview,
        bg: "bg-gradient-to-b from-[#A4C2FB] to-[#759DF6]",
    },
];

export default function FeatureCarousel() {
    return (
        <section className="py-[101px] bg-white">
            <div className="container mx-auto">
                <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent className="-ml-4">
                        {features.map((feature, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="flex gap-4 items-start max-w-sm">
                                    {/* Gradient icon box */}
                                    <div
                                        className={`p-[24px] rounded-md flex items-center justify-center ${feature.bg}`}
                                    >
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="w-full h-full"
                                        />
                                    </div>

                                    {/* Text content */}
                                    <div>
                                        <h3 className="text-[24px] font-[700] text-black mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[16px] text-[#494951]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Ẩn trên mobile */}
                    <CarouselPrevious className="left-0 hidden" />
                    <CarouselNext className="right-0 hidden" />
                </Carousel>
            </div>
        </section>
    );
}
