import React from "react";
import {
    Calendar,
    Users,
    Edit,
    X,
    CheckCircle,
    Delete,
    DeleteIcon,
} from "lucide-react";
import time_quarter from "@images/time_quarter.svg";
import ic_visa from "@images/ic_visa.svg";
import ic_onepay from "@images/ic_onepay.svg";
import ic_vnpay from "@images/ic_vnpay.svg";
import ic_close from "@images/ic_close.svg";
import ic_date from "@images/ic_date.svg";
import ic_delete from '@images/ic_delete.svg';

const ShoppingCart = () => {
    const cartItems = [
        {
            id: 1,
            image:
                "https://dulichsaigon.edu.vn/wp-content/uploads/2024/02/top-cac-loai-hinh-du-lich-pho-bien-tai-viet-nam-nhieu-ban-tre-yeu-thich.jpg",
            title: "Pharaohs Nile Cruise Adventure - Return Flights Included",
            date: "Nov 23, 2024",
            duration: "3 days 2 nights",
            guests: "2 Adults, 1 Children",
            isNonRefundable: true,
            dateChanged: true,
            originalPrice: 68.24,
            finalPrice: 91.24,
            addOns: [
                { name: "3 x Romantic Cruise Dining", price: 21.0, originalPrice: 21.0, isFree: false },
                { name: "6 x Breakfast/Dinner of your choice", price: 0, originalPrice: 21.0, isFree: true },
            ],
            depositPercentage: 30,
            depositAmount: 27.372,
        },
        {
            id: 2,
            image:
                "https://dulichsaigon.edu.vn/wp-content/uploads/2024/02/top-cac-loai-hinh-du-lich-pho-bien-tai-viet-nam-nhieu-ban-tre-yeu-thich.jpg",
            title: "Bangkok Canal Tour: 2-Hour Longtail Boat Ride",
            date: "Nov 28, 2024",
            duration: "3 days 2 nights",
            guests: "2 Adults",
            isNonRefundable: true,
            dateChanged: false,
            originalPrice: 64.22,
            finalPrice: 64.22,
            addOns: [],
            depositPercentage: 30,
            depositAmount: 19.266,
        },
    ];

    const CartItem = ({ item }) => (
        <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 mb-3 md:mb-4">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                {/* Image */}
                <div className="flex-shrink-0">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
                    />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* Title and Price Row */}
                    <div className="flex-col">
                        <div className="flex justify-between items-start mb-2 md:mb-3">
                            <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-2 md:pr-4 leading-tight">
                                {item.title}
                            </h3>
                        </div>

                        {/* Date and Duration */}
                        <div className="flex items-center gap-1 mb-1 md:mb-2">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                            <span className="text-sm md:text-base text-gray-700">{item.date}</span>
                            <span className="text-sm md:text-base text-gray-500 mx-0.5 md:mx-1">•</span>
                            <span className="text-sm md:text-base text-gray-700">{item.duration}</span>
                        </div>

                        {/* Guests */}
                        <div className="flex items-center gap-1 mb-2 md:mb-3">
                            <Users className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                            <span className="text-sm md:text-base text-gray-700">{item.guests}</span>
                        </div>

                        {/* Status badges */}
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mb-2 md:mb-4 justify-between border-b border-b-gray-200 pb-2 md:pb-[10px]">
                            <div className="flex items-center gap-3 md:gap-6 mt-[-20px]">
                                <div className="flex items-center gap-1">
                                    <img src={ic_close} className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                                    <span className="text-sm md:text-base text-gray-600">Non-refundable</span>
                                </div>
                                {item.dateChanged ? (
                                    <div className="flex items-center gap-1">
                                        <img src={ic_date} className="w-3 h-3 md:w-4 md:h-4 text-[#00818A]" />
                                        <span className="text-sm md:text-base text-[#00818A]">Date changed</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1">
                                        <img src={ic_close} className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                                        <span className="text-sm md:text-base text-gray-600">No date change</span>
                                    </div>
                                )}
                            </div>

                            <div className="text-right flex-shrink-0">
                                <div className="text-sm md:text-base text-gray-700 font-medium mb-0.5 md:mb-1">
                                    US ${item.originalPrice.toFixed(2)}
                                </div>
                                <div className="text-xs md:text-sm text-blue-600 underline cursor-pointer">
                                    Price details
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add-ons */}
                    {item.addOns.length > 0 && (
                        <div className="mb-2 md:mb-4 space-y-1 md:space-y-2">
                            {item.addOns.map((addon, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-sm md:text-base text-gray-700">{addon.name}</span>
                                    <div className="flex items-center gap-1 md:gap-2">
                                        {addon.isFree ? (
                                            <>
                                                <span className="text-sm md:text-base text-gray-400 line-through">
                                                    US ${addon.originalPrice.toFixed(2)}
                                                </span>
                                                <span className="text-sm md:text-base text-green-600 font-medium">
                                                    Free
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-sm md:text-base text-gray-900 font-medium">
                                                US ${addon.price.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Bottom row with buttons and final price */}
                    <div className="flex flex-col md:flex-row justify-between items-end w-full md:w-[600px] lg:w-[810px] h-[60px] md:h-[70px] ml-0 md:ml-[-50px] lg:ml-[-112px] p-2 md:p-[15px] bg-gray-100 mb-0 md:mb-[-16px] rounded-bl-[8px] rounded-br-[8px]">
                        {/* Action buttons */}
                        <div className="flex items-center gap-2 md:gap-4 pl-2 md:pl-[20px]">
                            <button className="flex items-center gap-1 text-black hover:text-blue-800 text-xs md:text-sm p-1 md:p-[8px] bg-white rounded-2xl">
                                <Edit className="w-3 h-3 md:w-4 md:h-4" />
                                Edit
                            </button>
                            <button className="flex items-center gap-1 text-black hover:text-blue-800 text-xs md:text-sm p-1 md:p-[10px] bg-white rounded-2xl">
                                <img src={ic_delete} className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                            <div className="text-xs md:text-sm text-red-700 bg-red-50 px-2 py-0.5 md:px-3 md:py-1 font-bold rounded-2xl">
                                Deposit {item.depositPercentage}% (US ${item.depositAmount.toFixed(3)})
                            </div>
                        </div>

                        {/* Final price */}
                        <div className="text-right mt-2 md:mt-0">
                            <div className="text-lg md:text-xl font-bold text-red-600 mb-0.5 md:mb-1">
                                US ${item.finalPrice.toFixed(2)}
                            </div>
                            <div className="text-xs md:text-sm text-green-600">All taxes and fees included</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const totalAmount = cartItems.reduce((sum, item) => sum + item.finalPrice, 0);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto p-3 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {/* Left Column - Cart Items */}
                    <div className="md:col-span-2">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6 text-gray-900">
                            Shopping cart
                        </h1>

                        {/* Warning Message */}
                        <div className="bg-pink-50 border border-pink-200 rounded-lg mb-3 md:mb-6 w-full md:w-[299px] h-[32px] md:h-[38px] items-center p-1 md:p-2 justify-center">
                            <div className="flex items-center gap-1 md:gap-2">
                                <img src={time_quarter} className="w-4 md:w-5 h-4 md:h-5" />
                                <span className="text-[12px] md:text-[14px]">Items aren't reserved until you book</span>
                            </div>
                        </div>

                        {/* Tours Section */}
                        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900">
                            Tours
                        </h2>

                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Right Column - Summary */}
                    <div className="md:col-span-1">
                        <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-6 sticky top-3 md:top-6">
                            {/* Subtotal */}
                            <div className="flex justify-between items-start mb-2 md:mb-4">
                                <div>
                                    <div className="text-base md:text-lg font-semibold text-gray-900">
                                        Subtotal
                                    </div>
                                    <div className="text-xs md:text-sm text-gray-600">(7 items)</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-base md:text-lg font-bold text-gray-900">
                                        US ${totalAmount.toFixed(2)}
                                    </div>
                                    <div className="text-xs md:text-sm text-green-600">
                                        All taxes and fees included
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg md:rounded-3xl mb-3 md:mb-6 transition-colors duration-200">
                                Go to checkout
                            </button>

                            {/* Features */}
                            <div className="space-y-2 md:space-y-4 mb-3 md:mb-6">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm md:text-base">
                                            Guaranteed Reservation
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-600">
                                            Even with 0% deposit
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 md:gap-3">
                                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm md:text-base">
                                            Multiple Payment Methods Accepted
                                        </div>
                                        <div className="flex items-center gap-1 md:gap-2 mt-0.5 md:mt-1">
                                            <div className="flex items-center gap-1 md:gap-1">
                                                <img src={ic_vnpay} className="w-[30px] md:w-[41px] h-[10px] md:h-[13px]" />
                                                <img src={ic_visa} className="w-[30px] md:w-[41px] h-[10px] md:h-[13px]" />
                                                <img src={ic_onepay} className="w-[30px] md:w-[41px] h-[10px] md:h-[13px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Why book with us */}
                            <div className="border-t pt-2 md:pt-4">
                                <h3 className="font-semibold mb-2 md:mb-4 text-gray-900 text-sm md:text-base">
                                    Why book with us?
                                </h3>
                                <div className="space-y-1 md:space-y-3">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-green-500 flex-shrink-0" />
                                        <span className="text-xs md:text-sm text-gray-700">Secure payment</span>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-green-500 flex-shrink-0" />
                                        <span className="text-xs md:text-sm text-gray-700">No hidden costs</span>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-green-500 flex-shrink-0" />
                                        <span className="text-xs md:text-sm text-gray-700">24/7 customer support</span>
                                    </div>
                                </div>
                            </div>

                            {/* Help Section */}
                            <div className="border-t pt-2 md:pt-4 mt-2 md:mt-4 text-center">
                                <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                                    Need more help?
                                </div>
                                <div className="flex items-center justify-center gap-1 text-xs md:text-sm">
                                    <button className="text-blue-600 hover:text-blue-800 underline">
                                        Chat now
                                    </button>
                                    <span className="text-gray-600">or call</span>
                                    <button className="text-blue-600 hover:text-blue-800 underline">
                                        +84 243 829 3838
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;