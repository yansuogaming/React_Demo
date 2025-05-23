import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@lib/utils";
import { Link } from "react-router";

function ConfirmForgotPassword() {
    const { t } = useTranslation();

    return (
        <section className="container mt-[100px] mb-[100px]">
            <div className="max-w-[400px] mx-auto">
                <h1 className="text-[28px] font-bold leading-[40px] mb-[20px] text-center">
                    {t("check_your_mailbox")}
                </h1>
                <p className="text-center mb-[20px]">
                    {t("forgot_password.description")}
                </p>
                <Link
                    className={cn(
                        'rounded-[4px] bg-[#18BABD] flex items-center justify-center',
                        'text-[#fff] font-bold w-full h-[48px] cursor-pointer',
                    )}
                    to="/forgot-password"
                >
                    {t("Back to login step")}
                </Link>
            </div>
        </section>
    );
}

export default ConfirmForgotPassword;
