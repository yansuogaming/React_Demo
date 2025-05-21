import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const BookingForm = () => {
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);

    const priceAdult = 712;
    const priceChild = 412;
    const total = adult * priceAdult + child * priceChild;

    return (
        <div className="mt-[63px]">
            <div>
                <h2 className="text-[28px] font-[700] text-[#1A2A44] mb-[12px]">
                    Dates & Availability
                </h2>
                <p className="text-[#494951] text-[14px] font-[700] uppercase">
                    3 days 2 nights
                </p>
                <h3 className="text-[20px] font-[700] text-[#1A2A44] mb-[2px]">
                    Hoi An/ Da Nang - Ba Na Hills - Golden Bridge Deluxe
                </h3>
                <p className="text-[#494951] text-[16px] font-[400] mb-[20px]">
                    From Hanoi to Da Nang
                </p>
            </div>
            <div className="mx-auto p-[24px] bg-[#F5F6FA] rounded-[8px] border shadow-sm">
                {/* Departure date */}
                <div className="text-[16px] font-[500] mb-[32px]">
                    <label className="block text-[#64646D] mb-2">
                        Please select departure date
                    </label>
                    <div className="flex flex-wrap gap-[8px]">
                        <button className="p-[6px_15px] border border-[#D9D9D9] rounded-[4px] bg-white text-[#1A2A44] hover:bg-gray-100">
                            Today
                        </button>
                        <button className="p-[6px_15px] border rounded-[4px] bg-[#007BFF] text-white hover:bg-blue-700">
                            Tomorrow
                        </button>
                        <button className="p-[6px_15px] border border-[#D9D9D9] rounded-[4px] bg-white text-[#1A2A44] hover:bg-gray-100">
                            Select date ›
                        </button>
                    </div>
                </div>

                {/* Tour type */}
                <div className="text-[16px] font-[500] mb-[32px]">
                    <label className="block text-[#64646D] mb-[10px]">
                        Tour type
                    </label>
                    <div className="flex gap-[8px]">
                        <button className="p-[6px_15px] border rounded-[4px] bg-[#007BFF] text-white hover:bg-blue-700">
                            Standard Tour
                        </button>
                        <button className="p-[6px_15px] border border-[#D9D9D9] rounded-[4px] bg-white text-[#1A2A44] hover:bg-gray-100">
                            Tour VIP
                        </button>
                    </div>
                </div>

                {/* Quantity */}
                <div className="text-[16px] font-[500] mb-[32px]">
                    <label className="block text-[#64646D] mb-[10px]">
                        Quantity
                    </label>

                    {/* Adult */}
                    <div className="flex justify-between items-center border rounded p-4 mb-4 bg-white">
                        <div>
                            <p className="text-[18px] font-[500] text-[#1A2A44]">
                                Adult
                            </p>
                            <p className="text-[16px] text-[#FD6050] font-[400]">
                                Minimum requirement
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#1A2A44] font-[400] text-[14px]">
                                US
                            </span>
                            <span className="text-[20px] text-[#1A2A44] font-[700]">
                                ${priceAdult}
                            </span>
                            <button
                                onClick={() => setAdult(Math.max(1, adult - 1))}
                                className="p-1 border rounded"
                            >
                                <FaMinus size={12} />
                            </button>
                            <span>{adult}</span>
                            <button
                                onClick={() => setAdult(adult + 1)}
                                className="p-1 border rounded"
                            >
                                <FaPlus size={12} />
                            </button>
                        </div>
                    </div>

                    {/* Child */}
                    <div className="flex justify-between items-center border rounded p-4 mb-4 bg-white">
                        <p className="text-[18px] font-[500] text-[#1A2A44]">
                            Child <span className="font-[400]">(4-10 age)</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[#1A2A44] font-[400] text-[14px]">
                                US
                            </span>
                            <span className="text-[20px] text-[#1A2A44] font-[700]">
                                ${priceChild}
                            </span>
                            <button
                                onClick={() => setChild(Math.max(0, child - 1))}
                                className="p-1 border rounded"
                            >
                                <FaMinus size={12} />
                            </button>
                            <span>{child}</span>
                            <button
                                onClick={() => setChild(child + 1)}
                                className="p-1 border rounded"
                            >
                                <FaPlus size={12} />
                            </button>
                        </div>
                    </div>

                    {/* Infant */}
                    <div className="flex justify-between items-center border rounded p-4 bg-white">
                        <p className="text-[18px] font-[500] text-[#1A2A44]">
                            Infant <span className="font-[400]">(0-3 age)</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[20px] text-[#FD6050] font-[700]">
                                Free
                            </span>
                            <button
                                onClick={() =>
                                    setInfant(Math.max(0, infant - 1))
                                }
                                className="p-1 border rounded"
                            >
                                <FaMinus size={12} />
                            </button>
                            <span>{infant}</span>
                            <button
                                onClick={() => setInfant(infant + 1)}
                                className="p-1 border rounded"
                            >
                                <FaPlus size={12} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Total */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                    <div>
                        <p className="text-[16px] font-[400] text-[#1A2A44]">
                            US{" "}
                            <span className="text-[24px] font-[700]">
                                ${total}
                            </span>
                        </p>
                        <p className="text-[#09A66D] text-[16px] font-[400]">
                            Taxes and fees included
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-[11px_24px] border border-[#007BFF] rounded-[4px] bg-white text-[16px] font-[500] text-[#007BFF] hover:bg-gray-100">
                            Add to cart
                        </button>

                        <button className="bg-[#007BFF] text-white p-[11px_24px] rounded-[4px] text-[16px] font-[500] hover:bg-blue-700">
                            Book now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
