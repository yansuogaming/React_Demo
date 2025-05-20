import { useTranslation } from "react-i18next";
import impressions1 from "@images/image_impressions1.png";
import impressions2 from "@images/image_impressions2.png";
import impressions3 from "@images/image_impressions3.png";
import impressions4 from "@images/image_impressions4.png";
import ViewMoreButton from "./button/ViewMoreButton";

const Impressions = ({ className = "" }) => {
    const { t } = useTranslation();

    return (
        <section className={`container ${className}`}>
            <div className="flex flex-col md:flex-row md:justify-between mb-[40px] gap-4">
                <h2 className="text-[#1A2A44] text-[40px] font-bold">
                    Impressions
                </h2>
                <ViewMoreButton text={t("Show all")} />
            </div>

            {/* --- MOBILE LAYOUT --- */}
            <div className="flex flex-col gap-[10px] md:hidden">
                {/* Hàng 1 */}
                <div className="rounded-[60px_4px_4px_4px] cursor-pointer overflow-hidden">
                    <img className="w-full" src={impressions1} alt="" />
                </div>

                {/* Hàng 2 */}
                <div className="flex gap-[10px]">
                    <div className="w-1/2 rounded-[4px] overflow-hidden cursor-pointer">
                        <img className="w-full" src={impressions2} alt="" />
                    </div>
                    <div className="w-1/2 rounded-[4px] overflow-hidden cursor-pointer">
                        <img className="w-full" src={impressions3} alt="" />
                    </div>
                </div>

                {/* Hàng 3 */}
                <div className="rounded-[4px] overflow-hidden cursor-pointer">
                    <img className="w-full" src={impressions4} alt="" />
                </div>

                {/* Hàng 4 */}
                <div className="rounded-[4px_4px_60px_4px] relative overflow-hidden cursor-pointer">
                    <img className="w-full" src={impressions4} alt="" />
                    <div className="text-white text-[24px] font-bold absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,_rgba(4,18,58,0.2)_0%,_rgba(4,18,58,0.4)_100%)]">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            + 5
                        </span>
                    </div>
                </div>
            </div>

            {/* --- TABLET & DESKTOP LAYOUT --- */}
            <div className="hidden md:grid md:grid-cols-2 gap-[10px]">
                <div className="rounded-[60px_4px_4px_4px] cursor-pointer overflow-hidden">
                    <img className="w-full" src={impressions1} alt="" />
                </div>
                <div className="grid grid-cols-2 gap-[10px]">
                    <div className="cursor-pointer rounded-[4px] overflow-hidden">
                        <img className="w-full" src={impressions2} alt="" />
                    </div>
                    <div className="cursor-pointer rounded-[4px] overflow-hidden">
                        <img className="w-full" src={impressions3} alt="" />
                    </div>
                    <div className="cursor-pointer rounded-[4px] overflow-hidden">
                        <img className="w-full" src={impressions4} alt="" />
                    </div>
                    <div className="rounded-[4px_4px_60px_4px] relative overflow-hidden cursor-pointer">
                        <img className="w-full" src={impressions4} alt="" />
                        <div className="text-white text-[24px] font-bold absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,_rgba(4,18,58,0.2)_0%,_rgba(4,18,58,0.4)_100%)]">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                + 5
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impressions;
