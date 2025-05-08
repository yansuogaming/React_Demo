import SubHeading from './text/SubHeading'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import image from '@images/why-visit.png'
import CardService from './card/CardService'
import TextNormal from './text/TextNormal'

const WhyVisit = () => {
    return (
        <section className="my-[80px] bg-[#F5F6FA]">
            <div className="container">
                <SubHeading className="mb-[40px]">
                    Why visit Vietnam
                </SubHeading>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="w-full">
                        <CarouselItem className="basis-[25%] pl-[30px]">
                            <CardService
                                title="Diverse Natural Landscapes"
                                widthImage="300px"
                                heightImage="200px"
                                image={image}
                                href="/"
                            >
                                <TextNormal className="text-[16px]">
                                    From the majestic mountains of Ha Giang to the pristine beaches of Phu Quoc, Vietnam boasts a rich and breathtaking natural beauty that promises unforgettable experiences for every traveler.
                                </TextNormal>
                            </CardService>
                        </CarouselItem>
                        <CarouselItem className="basis-[25%] pl-[30px]">
                            <CardService
                                title="Diverse Natural Landscapes"
                                widthImage="300px"
                                heightImage="200px"
                                image={image}
                                href="/"
                            >
                                <TextNormal className="text-[16px]">
                                    From the majestic mountains of Ha Giang to the pristine beaches of Phu Quoc, Vietnam boasts a rich and breathtaking natural beauty that promises unforgettable experiences for every traveler.
                                </TextNormal>
                            </CardService>
                        </CarouselItem>
                        <CarouselItem className="basis-[25%] pl-[30px]">
                            <CardService
                                title="Diverse Natural Landscapes"
                                widthImage="300px"
                                heightImage="200px"
                                image={image}
                                href="/"
                            >
                                <TextNormal className="text-[16px]">
                                    From the majestic mountains of Ha Giang to the pristine beaches of Phu Quoc, Vietnam boasts a rich and breathtaking natural beauty that promises unforgettable experiences for every traveler.
                                </TextNormal>
                            </CardService>
                        </CarouselItem>
                        <CarouselItem className="basis-[25%] pl-[30px]">
                            <CardService
                                title="Diverse Natural Landscapes"
                                widthImage="300px"
                                heightImage="200px"
                                image={image}
                                href="/"
                            >
                                <TextNormal className="text-[16px]">
                                    From the majestic mountains of Ha Giang to the pristine beaches of Phu Quoc, Vietnam boasts a rich and breathtaking natural beauty that promises unforgettable experiences for every traveler.
                                </TextNormal>
                            </CardService>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-[40px]" />
                    <CarouselNext className="right-[25px]" />
                </Carousel>
            </div>
        </section>
    )
}

export default WhyVisit