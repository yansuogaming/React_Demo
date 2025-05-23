import React, { useState } from "react";
import { Form, useNavigate } from "react-router";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Button } from "@ui/button";
import { useTranslation } from "react-i18next";
import UserService from "@services/UserService";

function SignUp() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const checkLogin = async () => {
        const check = await UserService.checkLogin(email);
        if (check) {
            navigate(`/signin-password?email=${email}`);
            return;
        }

        navigate('/signup');
    }
    return (
        <section className="container mt-[100px] mb-[100px]">
            <div className="max-w-[530px] mx-auto">
                <h1 className="text-[28px] font-bold leading-[40px] mb-[30px] text-center">
                    {t("Sign in or create an account")}
                </h1>
                <Form action="" className="flex flex-col gap-[16px]">
                    <div className="hnv_signin_field">
                        <Input
                            type="email"
                            id="email"
                            className="hnv_signin_input px-[26px] py-[18px] h-[60px]"
                            placeholder=" "
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
                        className="rounded-[4px] bg-[#18BABD] text-[#fff] font-bold w-full h-[48px]"
                        onClick={checkLogin}
                    >
                        {t("Sign in")}
                    </Button>
                </Form>
                <div className="relative my-[46px] mb-[42px] h-px bg-[#DADFE6]">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[10px] text-[#717171] text-[16px] font-normal leading-[24px] z-[1] bg-white">
                        {t("or continue with")}
                    </span>
                </div>
                <div className="flex items-center justify-between gap-[26px]">
                    <Button
                        className="h-[52px] flex-1 bg-[#fff] rounded-[4px] border border-[#26456E] hover:bg-accent"
                        title="Google"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            className="!w-[24px] !h-[24px]"
                        >
                            <g clipPath="url(#clip0_536_2449)">
                                <path
                                    d="M6.20539 16.9207L5.23075 20.5592L1.66846 20.6346C0.603859 18.66 0 16.4008 0 14C0 11.6785 0.564594 9.4892 1.56538 7.56152H1.56614L4.73758 8.14296L6.12686 11.2954C5.83609 12.1431 5.6776 13.0531 5.6776 14C5.67771 15.0277 5.86387 16.0123 6.20539 16.9207Z"
                                    fill="#FBBB00"
                                />
                                <path
                                    d="M27.7552 11.3846C27.916 12.2315 27.9998 13.1062 27.9998 14C27.9998 15.0023 27.8945 15.98 27.6937 16.9231C27.0122 20.1323 25.2314 22.9346 22.7645 24.9177L22.7637 24.917L18.7691 24.7131L18.2038 21.1839C19.8407 20.2239 21.1199 18.7216 21.7938 16.9231H14.3076V11.3846H21.903H27.7552Z"
                                    fill="#518EF8"
                                />
                                <path
                                    d="M22.7638 24.9169L22.7646 24.9177C20.3654 26.8461 17.3177 28 14 28C8.66846 28 4.03309 25.02 1.66846 20.6346L6.20539 16.9208C7.38768 20.0761 10.4315 22.3223 14 22.3223C15.5338 22.3223 16.9708 21.9077 18.2038 21.1838L22.7638 24.9169Z"
                                    fill="#28B446"
                                />
                                <path
                                    d="M22.9362 3.22306L18.4008 6.93613C17.1247 6.13845 15.6162 5.67766 14.0001 5.67766C10.3508 5.67766 7.25003 8.02687 6.12697 11.2954L1.5662 7.56153H1.56543C3.89545 3.06923 8.58927 0 14.0001 0C17.397 0 20.5116 1.21002 22.9362 3.22306Z"
                                    fill="#F14336"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_536_2449">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Button>
                    <Button
                        className="h-[52px] flex-1 bg-[#fff] rounded-[4px] border border-[#26456E] hover:bg-accent"
                        title="Facebook"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            className="!w-[24px] !h-[24px]"
                        >
                            <g clipPath="url(#clip0_536_2445)">
                                <path
                                    d="M28 14C28 20.988 22.8802 26.7799 16.1875 27.8299V18.0469H19.4496L20.0703 14H16.1875V11.3739C16.1875 10.2665 16.73 9.1875 18.4691 9.1875H20.2344V5.74219C20.2344 5.74219 18.632 5.46875 17.1002 5.46875C13.9027 5.46875 11.8125 7.40687 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C5.11984 26.7799 0 20.988 0 14C0 6.26828 6.26828 0 14 0C21.7317 0 28 6.26828 28 14Z"
                                    fill="#1877F2"
                                />
                                <path
                                    d="M19.4496 18.0469L20.0703 14H16.1875V11.3739C16.1875 10.2667 16.7299 9.1875 18.469 9.1875H20.2344V5.74219C20.2344 5.74219 18.6323 5.46875 17.1005 5.46875C13.9026 5.46875 11.8125 7.40688 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C12.5253 27.9417 13.2558 28 14 28C14.7442 28 15.4747 27.9417 16.1875 27.8299V18.0469H19.4496Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_536_2445">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
