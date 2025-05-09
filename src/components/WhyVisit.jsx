import SubHeading from './text/SubHeading'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import image from '@images/why-visit.png'
import CardService from './card/CardService'
import TextNormal from './text/TextNormal'
import Reveal from './animation/Reveal'

const WhyVisit = () => {
    return (
        <section className="my-[80px] py-[80px] bg-[#F5F6FA]">
            <div className="container">
                <SubHeading className="mb-[40px]">
                    Why visit Vietnam
                </SubHeading>
                <Reveal>
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-[20px]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-[20px] basis-1/3">
                                    <CardService
                                        title="Diverse Natural Landscapes"
                                        widthImage="100%"
                                        heightImage="auto"
                                        image={image}
                                        href="/"
                                        padding="16px"
                                    >
                                        <TextNormal className="text-[16px]">
                                            From the majestic mountains of Ha Giang to the pristine beaches of Phu Quoc, Vietnam boasts a rich and breathtaking natural beauty that promises unforgettable experiences for every traveler.
                                        </TextNormal>
                                    </CardService>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-[20px] cursor-pointer" />
                        <CarouselNext className="right-[20px] cursor-pointer" />
                    </Carousel>
                </Reveal>
            </div>
        </section>
    )
}

export default WhyVisit