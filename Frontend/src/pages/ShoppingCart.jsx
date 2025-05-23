import React from "react";
import {
    Calendar,
    Users,
    Edit,
    X,
    CheckCircle,
    Delete,
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
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Image */}
                <div className="flex-shrink-0">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 rounded-lg object-cover"
                    />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* Title and Price Row */}
                    <div className="flex-col">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 lg:mb-0 lg:pr-4 leading-tight">
                                {item.title}
                            </h3>

                            {/* Price section - visible on mobile, positioned differently on desktop */}
                            <div className="text-left lg:text-right flex-shrink-0 lg:hidden">
                                <div className="text-base text-gray-700 font-medium mb-1">
                                    US ${item.originalPrice.toFixed(2)}
                                </div>
                                <div className="text-sm text-blue-600 underline cursor-pointer">
                                    Price details
                                </div>
                            </div>
                        </div>

                        {/* Date and Duration */}
                        <div className="flex flex-wrap items-center gap-1 mb-2">
                            <Calendar className="w-4 h-4 text-gray-600" />
                            <span className="text-sm md:text-base text-gray-700">{item.date}</span>
                            <span className="text-sm md:text-base text-gray-500 mx-1">•</span>
                            <span className="text-sm md:text-base text-gray-700">{item.duration}</span>
                        </div>

                        {/* Guests */}
                        <div className="flex items-center gap-1 mb-3">
                            <Users className="w-4 h-4 text-gray-600" />
                            <span className="text-sm md:text-base text-gray-700">{item.guests}</span>
                        </div>

                        {/* Status badges */}
                        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 mb-4 lg:justify-between border-b border-b-gray-200 pb-3">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                                <div className="flex items-center gap-1">
                                    <img src={ic_close} className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm md:text-base text-gray-600">Non-refundable</span>
                                </div>
                                {item.dateChanged ? (
                                    <div className="flex items-center gap-1">
                                        <img src={ic_date} className="w-4 h-4 text-[#00818A]" />
                                        <span className="text-sm md:text-base text-[#00818A]">Date changed</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1">
                                        <img src={ic_close} className="w-4 h-4 text-gray-500" />
                                        <span className="text-sm md:text-base text-gray-600">No date change</span>
                                    </div>
                                )}
                            </div>

                            {/* Price section - hidden on mobile, visible on desktop */}
                            <div className="text-right flex-shrink-0 hidden lg:block">
                                <div className="text-base text-gray-700 font-medium mb-1">
                                    US ${item.originalPrice.toFixed(2)}
                                </div>
                                <div className="text-sm text-blue-600 underline cursor-pointer">
                                    Price details
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add-ons */}
                    {item.addOns.length > 0 && (
                        <div className="mb-4 space-y-2">
                            {item.addOns.map((addon, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-sm md:text-base text-gray-700 flex-1 pr-2">{addon.name}</span>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        {addon.isFree ? (
                                            <>
                                                <span className="text-sm text-gray-400 line-through">
                                                    US ${addon.originalPrice.toFixed(2)}
                                                </span>
                                                <span className="text-sm text-green-600 font-medium">
                                                    Free
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-sm text-gray-900 font-medium">
                                                US ${addon.price.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}


                </div>
            </div>
            {/* Bottom row with buttons and final price */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end bg-gray-100 p-4 -mx-4 -mb-4 rounded-b-lg gap-3 lg:gap-0">
                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-2 lg:gap-4">
                    <button className="flex items-center gap-1 text-black hover:text-blue-800 text-sm px-3 py-2 bg-white rounded-2xl">
                        <Edit className="w-4 h-4" />
                        Edit
                    </button>
                    <button className="flex items-center gap-1 text-black hover:text-blue-800 text-sm px-3 py-2 bg-white rounded-2xl">
                        <img src={ic_delete} className="w-4 h-4" />
                    </button>
                    <div className="text-sm text-red-700 bg-red-50 px-3 py-1 font-bold rounded-2xl">
                        Deposit {item.depositPercentage}% (US ${item.depositAmount.toFixed(3)})
                    </div>
                </div>

                {/* Final price */}
                <div className="text-left lg:text-right w-full lg:w-auto">
                    <div className="text-xl font-bold text-red-600 mb-1">
                        US ${item.finalPrice.toFixed(2)}
                    </div>
                    <div className="text-sm text-green-600">All taxes and fees included</div>
                </div>
            </div>
        </div>
    );

    const totalAmount = cartItems.reduce((sum, item) => sum + item.finalPrice, 0);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto p-4 lg:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left Column - Cart Items */}
                    <div className="lg:col-span-2">
                        <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
                            Shopping cart
                        </h1>

                        {/* Warning Message */}
                        <div className="bg-pink-50 border border-pink-200 rounded-lg mb-6 w-full sm:w-80 h-auto p-3 flex items-center justify-center">
                            <div className="flex items-center gap-2">
                                <img src={time_quarter} className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm">Items aren't reserved until you book</span>
                            </div>
                        </div>

                        {/* Tours Section */}
                        <h2 className="text-xl font-semibold mb-4 text-gray-900">
                            Tours
                        </h2>

                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Right Column - Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6 sticky top-6">
                            {/* Subtotal */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="text-lg font-semibold text-gray-900">
                                        Subtotal
                                    </div>
                                    <div className="text-sm text-gray-600">(7 items)</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-900">
                                        US ${totalAmount.toFixed(2)}
                                    </div>
                                    <div className="text-sm text-green-600">
                                        All taxes and fees included
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-3xl mb-6 transition-colors duration-200">
                                Go to checkout
                            </button>

                            {/* Features */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-semibold text-gray-900 text-base">
                                            Guaranteed Reservation
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Even with 0% deposit
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-semibold text-gray-900 text-base">
                                            Multiple Payment Methods Accepted
                                        </div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="flex items-center gap-1">
                                                <img src={ic_vnpay} className="w-10 h-3" />
                                                <img src={ic_visa} className="w-10 h-3" />
                                                <img src={ic_onepay} className="w-10 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Why book with us */}
                            <div className="border-t pt-4">
                                <h3 className="font-semibold mb-4 text-gray-900 text-base">
                                    Why book with us?
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">Secure payment</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">No hidden costs</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">24/7 customer support</span>
                                    </div>
                                </div>
                            </div>

                            {/* Help Section */}
                            <div className="border-t pt-4 mt-4 text-center">
                                <div className="text-sm text-gray-600 mb-2">
                                    Need more help?
                                </div>
                                <div className="flex items-center justify-center gap-1 text-sm flex-wrap">
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