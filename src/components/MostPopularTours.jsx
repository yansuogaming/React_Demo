import CardService from './card/CardService'
import SubHeading from './text/SubHeading'
import image from '@images/image_17.png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from './ui/carousel'
import Reveal from './animation/Reveal'
import TextNormal from './text/TextNormal'
import { useEffect, useRef, useState } from 'react'

const MostPopularTours = ({ className = '' }) => {
    const ref = useRef(null)
    const [top, setTop] = useState(0)

    useEffect(() => {
        const img = ref.current.querySelector('img')
        const onloadImage = (e) => {
            setTop(e.target.clientHeight / 2 + 16)
        };
        img.addEventListener('load', onloadImage)
        return () => img.removeEventListener('load', onloadImage)
    }, [])

    return (
        <section ref={ref} className={`container ${className}`}>
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
                                    padding="15px 0 0 0"
                                >
                                    <p className="flex gap-[5px] items-center mb-[15px] -mt-[10px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z" stroke="#494951" strokeMiterlimit="10" />
                                            <path d="M10 5V10.625H13.75" stroke="#494951" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        3 days 2 nights
                                    </p>
                                    <TextNormal className="text-[16px]">
                                        From the majestic mountains of Ha Giang to the pristine beaches of Phu Quoc, Vietnam boasts a rich and breathtaking natural beauty that promises unforgettable experiences for every traveler.
                                    </TextNormal>
                                </CardService>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious style={{top}} className="left-[20px] cursor-pointer" />
                    <CarouselNext style={{top}} className="right-[20px] cursor-pointer" />
                </Carousel>
            </Reveal>
        </section>
    )
}

export default MostPopularTours