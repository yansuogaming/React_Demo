import React, { useState } from "react";
import { Form, useNavigate } from "react-router";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Button } from "@ui/button";
import { useTranslation } from "react-i18next";
import UserService from "@services/UserService";
import { cn } from "@lib/utils";

function ForgotPassword() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    const submitForgotPassword = async (e) => {
        e.preventDefault();
        setDisabled(true);
        await UserService.forgotPassword(email);
        navigate('/forgot-password/confirm');
    };

    return (
        <section className="container mt-[100px] mb-[100px]">
            <div className="max-w-[530px] mx-auto">
                <h1 className="text-[28px] font-bold leading-[40px] mb-[30px] text-center">
                    {t("Forgot password")}
                </h1>
                <p className="text-center">
                    {t("We'll send you a link to reset your password.")}
                </p>
                <p className="text-center mb-[20px]">
                    {t("Please enter the email address you use to sign in.")}
                </p>
                <Form action="" onSubmit={submitForgotPassword} className="flex flex-col gap-[16px]">
                    <div className="hnv_signin_field">
                        <Input
                            type="email"
                            id="email"
                            className="hnv_signin_input px-[26px] py-[18px] h-[60px]"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label
                            htmlFor="email"
                            className="hnv_signin_label text-[16px] font-semibold leading-[18px]"
                        >
                            {t("Email address")}
                        </Label>
                    </div>
                    <Button
                        variant="outline"
                        className={cn(
                            'rounded-[4px] bg-[#18BABD]',
                            'text-[#fff] font-bold w-full h-[48px]',
                        )}
                        disabled={disabled}
                    >
                        {t("Send link to reset password")}
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default ForgotPassword;
