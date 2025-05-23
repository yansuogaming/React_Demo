import React from "react";
import { CheckCircle } from "lucide-react";
import Payment from "@images/payment_success.svg";

const PaymentSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-2 sm:p-4 font-[Helvetica_Neue]">
            {/* Illustration Section */}
            <div className="flex flex-col items-center mb-4 sm:mb-6 md:mb-8">
                <img
                    src={Payment}
                    alt="Payment Success Illustration"
                    className="w-48 h-36 sm:w-56 sm:h-40 md:w-64 md:h-48 object-cover rounded-lg mb-2 sm:mb-4"
                />
            </div>

            {/* Content Section */}
            <div className="text-center max-w-[90%] sm:max-w-md md:max-w-[850px]">
                <h1 className="text-2xl sm:text-2.5xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 font-[Helvetica_Neue]">
                    Your Payment is Successful
                </h1>
                <p className="text-sm sm:text-base md:text-base text-gray-700 mb-1 sm:mb-2 md:mb-2">
                    Your order has been successfully placed with order code{" "}
                    <strong>#BK-2511012</strong>. The total amount recorded is{" "}
                    <strong>US $357.372</strong>, payment via PayPal on Nov 21, 2024 at
                    18:02:00
                </p>
                <p className="text-sm sm:text-base md:text-base text-gray-700 mb-2 sm:mb-3 md:mb-4">
                    We have sent the order information and payment receipt to{" "}
                    <strong>lyds@gmail.com</strong>. If you do not see it, please check
                    your spam folder or contact hotline{" "}
                    <strong>+842438293838</strong> or email{" "}
                    <strong>support@vietiso.com</strong> for support.
                </p>
                <p className="text-sm sm:text-base md:text-base text-gray-700">
                    Thank you for choosing isoCMS, wish you a happy shopping!
                </p>
            </div>

            {/* Button Section */}
            <div className="mt-4 sm:mt-6 md:mt-8">
                <button
                    className="w-[90%] h-[40px] sm:w-[300px] sm:h-[44px] md:w-[406px] md:h-[48px] bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                    Back to home page
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;