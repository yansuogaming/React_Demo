import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const tripData = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/209890188.jpg?k=882e748be3114714efa7f001b6ffa97425b1a52a458d3166dea3c1af7c66ac09&o=&hp=1",
    city: "Da Nang",
    title: "Le House Boutique Hotel",
    days: 3,
    rating: 5.0,
    reviews: 2,
    price: 117.07,
}));

const HotelTabs_Trip = () => {
    return (
        <div className="">
            <h2 className="text-[28px] font-[700] text-[#1D2D53] mb-[20px]">
                Top things to do in Hanoi
            </h2>

            <div className="relative">
                <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                        {tripData.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="pl-4 basis-[83.3333%] sm:basis-[45.4545%] lg:basis-1/4"
                            >
                                <div className="rounded-lg overflow-hidden shadow-sm border border-[#E5EAF1] bg-white">
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
                                                <FaStar className="text-[12px]" />{" "}
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

                    <CarouselPrevious
                        className="hidden lg:flex !left-[-24px] !top-[35%] w-12 h-12 bg-white rounded-full items-center justify-center"
                        style={{
                            filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))",
                        }}
                    >
                        <FaChevronLeft className="w-7 h-7 text-black" />
                    </CarouselPrevious>

                    <CarouselNext
                        className="hidden lg:flex !right-[-24px] !top-[35%] w-12 h-12 bg-white rounded-full items-center justify-center"
                        style={{
                            filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))",
                        }}
                    >
                        <FaChevronRight className="w-7 h-7 text-black" />
                    </CarouselNext>
                </Carousel>
            </div>
        </div>
    );
};

export default HotelTabs_Trip;
