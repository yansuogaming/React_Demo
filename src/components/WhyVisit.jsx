import SubHeading from './text/SubHeading'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import image from '@images/why-visit.png'
import CardService from './card/CardService'
import TextNormal from './text/TextNormal'
import Reveal from './animation/Reveal'
import { useEffect, useRef, useState } from 'react'

const WhyVisit = () => {
    const ref = useRef(null)
    const [top, setTop] = useState(0)

    useEffect(() => {
        const img = ref.current.querySelector('img')
        const onloadImage = (e) => {
            setTop(e.target.clientHeight)
        };
        img.addEventListener('load', onloadImage)
        return () => img.removeEventListener('load', onloadImage)
    }, [])

    return (
        <section ref={ref} className="my-[40px] sm:my-[60px] md:my-[80px] py-[40px] sm:py-[60px] md:py-[80px] bg-[#F5F6FA]">
            <div className="container px-4 md:px-6">
                <SubHeading className="mb-[30px] sm:mb-[35px] md:mb-[40px] text-[28px] sm:text-[32px] md:text-[36px]">
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
                        <CarouselContent className="-ml-[20px]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-[20px] basis-full sm:basis-1/2 lg:basis-1/4">
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
                        <CarouselPrevious style={{ top }} className="left-0 cursor-pointer -translate-x-1/2" />
                        <CarouselNext style={{ top }} className="right-0 cursor-pointer translate-x-1/2" />
                    </Carousel>
                </Reveal>
            </div>
        </section>
    )
}

export default WhyVisit