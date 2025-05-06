import imageCity from '@images/hanoi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons' 

const City = () => {
    return (
        <main>
            <section className="relative text-white bg-[linear-gradient(180deg,_#F5F6FA_0%,_#EFF4FF_70.01%)]">
                <img src={imageCity} alt="Hà Nội"/>
                <h1 className="text-center text-[60px] font-bold text-shadow-[0_2px_4px_rgba(0_0_0_/_0.40)] absolute bottom-[285px] w-full">
                    Hanoi
                </h1>
                <p className="text-center text-[20px] font-normal absolute bottom-[220px] w-full">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br/>
                    the industry's standard dummy text ever since the 1500s
                </p>
                <FontAwesomeIcon icon={faArrowDown} className="absolute bottom-[20px] text-[24px] left-1/2 translate-[-50%]" />
            </section>

            {/* Overview city */}
            <section className="grid grid-cols-3 gap-[32px]">
                <div className="col-span-2">
                    
                </div>
                <div>
                    
                </div>
            </section>
        </main>
    )
}

export default City
