import CardService from './card/CardService'
import SubHeading from './text/SubHeading'
import image from '@images/image_17.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Reveal from './animation/Reveal'
import TextNormal from './text/TextNormal'

const MostPopularTours = ({ className = '' }) => {
    return (
        <section className={`container ${className}`}>
            <SubHeading className="mb-[30px]">
                Most Popular Tours
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
        </section>
    )
}

export default MostPopularTours