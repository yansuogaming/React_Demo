import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa6";

const hotels = [
    {
        city: "Da Nang",
        title: "Merry Land Hotel Da Nang",
        rating: 9.2,
        days: 3,
        reviews: 2,
        price: 21,
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/209890188.jpg?k=882e748be3114714efa7f001b6ffa97425b1a52a458d3166dea3c1af7c66ac09&o=&hp=1",
    },
    {
        city: "Da Nang",
        title: "ViAn Hotel And Spa Danang",
        rating: 9.2,
        days: 4,
        reviews: 2,
        price: 26,
        image: "https://images.trvl-media.com/lodging/23000000/22890000/22882300/22882236/c04c718c.jpg",
    },
    {
        city: "Da Nang",
        title: "Hotel 4 star - ATP Galaxy Hotel & Apartment Danang",
        rating: 9.2,
        days: 3,
        reviews: 2,
        price: 17,
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/46843072.jpg",
    },
    {
        city: "Da Nang",
        title: "Le House Boutique Hotel",
        rating: 9.2,
        days: 2,
        reviews: 2,
        price: 20,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/da/3a/f5/img-hotel-s-rio-quente.jpg",
    },
];

const RecentlyViewedCarousel = () => {
    return (
        <div className="px-4 py-6">
            <h2 className="text-[28px] font-[700] text-[#1D2D53] mb-[20px]">
                Recently Viewed
            </h2>
            <div className="relative">
                <Carousel opts={{ align: "start" }}>
                    <CarouselContent>
                        {hotels.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-[80%] sm:basis-[45%] lg:basis-1/4"
                            >
                                <div className="">
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full lg:h-[276px] object-cover"
                                        />
                                        <div className="absolute top-0 left-0 bg-[#1786A0] text-white text-sm font-medium px-3 py-1">
                                            {item.city}
                                        </div>
                                    </div>

                                    <div className="p-3 space-y-1">
                                        <h3 className="text-[14px] font-semibold text-[#1A2C47] leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[13px] text-[#1A2C47] flex items-center gap-1">
                                            {item.days} days •{" "}
                                            <span className="text-[#FABB05] flex items-center gap-1">
                                                <FaStar className="text-[12px]" />
                                                {item.rating}
                                            </span>
                                            <span className="text-[13px] text-[#1A2C47]">
                                                ({item.reviews})
                                            </span>
                                        </p>
                                        <p className="text-[13px] text-[#5E6F82]">
                                            from{" "}
                                            <span className="text-[16px] font-bold text-[#D0021B]">
                                                US ${item.price.toFixed(2)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Prev / Next: ẩn trên mobile */}
                    <CarouselPrevious className="hidden md:flex !left-[-18px] top-1/2 -translate-y-1/2 z-10 bg-white border border-[#DADFE6] shadow-sm rounded-full" />
                    <CarouselNext className="hidden md:flex !right-[-18px] top-1/2 -translate-y-1/2 z-10 bg-white border border-[#DADFE6] shadow-sm rounded-full" />
                </Carousel>
            </div>
        </div>
    );
};

export default RecentlyViewedCarousel;
