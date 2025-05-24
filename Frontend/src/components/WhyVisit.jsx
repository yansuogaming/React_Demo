import SubHeading from "./text/SubHeading";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import image from "@images/why-visit.png";
import CardService from "./card/CardService";
import TextNormal from "./text/TextNormal";
import Reveal from "./animation/Reveal";

const WhyVisit = () => {
    return (
        <section className="my-6 sm:my-8 md:my-[80px] py-6 sm:py-8 md:py-[80px] bg-[#F5F6FA]">
            <div className="container px-4 sm:px-6 md:px-8">
                <SubHeading className="mb-3 sm:mb-4 md:mb-[40px] text-lg sm:text-xl md:text-[36px]">
                    Why visit Vietnam
                </SubHeading>
                <Reveal>
                    <Carousel
                        className="w-full"
                        opts={{
                            align: "start",
                            skipSnaps: false,
                            loop: false,
                        }}
                    >
                        <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-[16px]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-2 sm:pl-4 md:pl-[16px] basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                                >
                                    <CardService
                                        title="Diverse Natural Landscapes"
                                        widthImage="100%"
                                        heightImage="auto"
                                        image={image}
                                        href="/"
                                        padding="8px sm:12px md:16px"
                                    >
                                        <TextNormal className="text-xs sm:text-sm md:text-[16px] text-[#494951]">
                                            Từ những dãy núi hùng vĩ ở Hà Giang
                                            đến các bãi biển hoang sơ của Phú
                                            Quốc, Việt Nam tự hào có vẻ đẹp
                                            thiên nhiên phong phú và ngoạn mục,
                                            mang đến những trải nghiệm khó quên
                                            cho mọi du khách.
                                        </TextNormal>
                                    </CardService>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex absolute left-[-20px] sm:left-[-24px] md:left-[-32px] top-1/2 -translate-y-1/2 z-10" />
                        <CarouselNext className="hidden sm:flex absolute right-[-20px] sm:right-[-24px] md:right-[-32px] top-1/2 -translate-y-1/2 z-10" />
                    </Carousel>
                </Reveal>
            </div>
        </section>
    );
};

export default WhyVisit;
