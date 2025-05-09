import iconFilter from '@images/icon-filter.svg'
import { Checkbox } from '@ui/checkbox'

const FilterTours = ({ className = '' }) => {
    return (
        <section className={`container ${className}`}>
            <div className="grid grid-cols-3 gap-[30px]">
                <div>
                    <div className="mb-[24px] flex gap-[12px] font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[10px_15px]">
                        <img src={iconFilter} alt="Applled filters" />
                        <h3>Applled filters</h3>
                    </div>
                    <div>
                        <p className="text-[18px] font-bold mb-[16px]">Duration</p>
                        <ul className="flex flex-col gap-[15px]">
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    Full day
                                </label>
                            </li>
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    1 to 3 days
                                </label>
                            </li>
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    4 to 7 days
                                </label>
                            </li>
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    &gt; 7 days
                                </label>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-[24px]" />
                    <div>
                        <p className="text-[18px] font-bold mb-[16px]">Departure point</p>
                        <ul className="flex flex-col gap-[15px]">
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    Hanoi
                                </label>
                            </li>
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    Ho Chi Minh City
                                </label>
                            </li>
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    Da Nang
                                </label>
                            </li>
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    Phu Quoc
                                </label>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-[24px]" />
                    <div>
                        <p className="text-[18px] font-bold mb-[16px]">Travel styles</p>
                        <ul className="flex flex-col gap-[15px]">
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    Festival & Events
                                </label>
                            </li>
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    In-depth Cultural
                                </label>
                            </li>
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    Explorer
                                </label>
                            </li>
                            <li>
                                <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                    <Checkbox />
                                    Hiking & Trekking
                                </label>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-[24px]" />
                    <div>
                        <p className="text-[18px] font-bold mb-[16px]">Travel agency</p>

                    </div>
                </div>
                {/* <div className="col-span-2">
                    <p className="font-medium text-[18px] mb-[30px]">
                        1,000+ results
                    </p>
                    {Array.from({ length: 5 }).map((_, index) => (
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
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default FilterTours