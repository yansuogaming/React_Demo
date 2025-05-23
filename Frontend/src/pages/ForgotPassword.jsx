import React from "react";
import { Form, NavLink } from "react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

function SignInPassword() {
    const { t } = useTranslation();
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
                <Form action="" className="flex flex-col gap-[16px]">
                    <div className="hnv_signin_field">
                        <Input
                            type="email"
                            id="email"
                            className="hnv_signin_input px-[26px] py-[18px] h-[60px]"
                            placeholder=" "
                            value="abc.vietiso@gmail.com"
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
                        className="rounded-[4px] bg-[#18BABD] text-[#fff] font-bold w-full h-[48px]"
                    >
                        {t("Send link to reset password")}
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default SignInPassword;
