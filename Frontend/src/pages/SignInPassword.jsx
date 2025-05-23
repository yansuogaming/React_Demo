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
                    {t("Please enter your password")}
                </h1>
                <p className="mb-[20px] text-center">
                    {t("Please enter the password for account")}
                    <b className="ml-[5px]">abc.vietiso@gmail.com</b>
                </p>
                <Form action="" className="flex flex-col gap-[16px]">
                    <div className="hnv_signin_field">
                        <Input
                            type="password"
                            id="password"
                            className="hnv_signin_input px-[26px] py-[18px] h-[60px]"
                            placeholder=" "
                        />
                        <Label
                            htmlFor="password"
                            className="hnv_signin_label text-[16px] font-semibold leading-[18px]"
                        >
                            {t("Password")}
                        </Label>
                    </div>
                    <Button
                        variant="outline"
                        className="rounded-[4px] bg-[#18BABD] text-[#fff] font-bold w-full h-[48px]"
                    >
                        {t("Sign in")}
                    </Button>
                </Form>
                <div className="relative my-[46px] mb-[42px] h-px bg-[#DADFE6]">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[10px] text-[#717171] text-[16px] font-normal leading-[24px] z-[1] bg-white">
                        {t("or")}
                    </span>
                </div>
                <div className="flex items-center justify-between gap-[26px]">
                    <Button className="h-[52px] flex-1 bg-[#fff] text-[#18BABD] rounded-[4px] border border-[#18BABD] hover:bg-accent">
                        {t("Sign in with the verification link")}
                    </Button>
                </div>
                <NavLink
                    to="/"
                    className="block mt-[20px] text-center text-[#18BABD] text-[14px]"
                    title={t("Forgot password")}
                >
                    {t("Forgot password")}?
                </NavLink>
            </div>
        </section>
    );
}

export default SignInPassword;
