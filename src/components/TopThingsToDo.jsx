import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@ui/carousel'
import imageThingToDo from '@images/thing-to-do.png'
import { NavLink } from 'react-router'

const TopThingsToDo = ({ className = '' }) => {
    return (
        <section className={className}>
            <div className="container">
                <h3 className="text-[#1A2A44] text-[40px] font-bold mb-[20px]">
                    Top things to do in Hanoi
                </h3>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="w-fit">
                        <CarouselItem className="basis-[50%] pl-[30px]">
                            <NavLink to="" className="rounded-[60px_4px]">
                                <img className="w-full" src={imageThingToDo} alt="Explore the beautiful and poetic roads" />
                            </NavLink>
                            <h3 className="text-[#090909] text-[20px] font-bold mt-[20px] mb-[12px]">
                                Explore the beautiful and poetic roads
                            </h3>
                            <p className="text-[#494951] text-[16px]">
                                Lose yourself in a wonderland of colorful street art, al fresco cafes, intimate wine bars, and quirky boutiques – you never know what you'll find just around the corner.
                            </p>
                        </CarouselItem>
                        <CarouselItem className="basis-[50%] pl-[30px]">
                            <NavLink to="" className="rounded-[60px_4px]">
                                <img className="w-full" src={imageThingToDo} alt="Explore the beautiful and poetic roads" />
                            </NavLink>
                            <h3 className="text-[#090909] text-[20px] font-bold mt-[20px] mb-[12px]">
                                Explore the beautiful and poetic roads
                            </h3>
                            <p className="text-[#494951] text-[16px]">
                                Lose yourself in a wonderland of colorful street art, al fresco cafes, intimate wine bars, and quirky boutiques – you never know what you'll find just around the corner.
                            </p>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-[40px]" />
                    <CarouselNext className="right-[25px]" />
                </Carousel>
            </div>
        </section>
    )
}

export default TopThingsToDo