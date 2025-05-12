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
            </div>
        </section>
    )
}

export default FilterTours