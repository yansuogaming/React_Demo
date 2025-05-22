import { NavLink } from "react-router";
import visaImage from "@images/visa-image.png";

export default function VisaBanner() {
    return (
        <section className="bg-[#F6F6FB] p-[48px_0_35px_0]">
            <div className="flex justify-center px-4">
                <div className="flex flex-col lg:flex-row items-stretch max-w-[1100px] w-full overflow-hidden rounded-[40px] lg:rounded-[0_0_40px_0]">
                    <div className="lg:w-[272px] lg:h-[272px] shrink-0">
                        <img
                            src={visaImage}
                            alt="Visa support"
                            className="w-full h-full object-cover rounded-t-[40px] lg:rounded-[40px_0_0_40px]"
                        />
                    </div>

                    <div className="bg-white p-[66px_35px] flex flex-col justify-center w-full">
                        <h3 className="text-[26px] font-[500] text-[#1A2A44] mb-[12px]">
                            Vietnam offers easy entry for travelers
                        </h3>
                        <p className="text-[16px] font-[400] text-[#494951] mb-[20px]">
                            Helping visitors easily experience a seamless
                            immigration process when coming to Vietnam.
                        </p>
                        <NavLink
                            to="#"
                            className="w-fit bg-[#007BFF] text-white hover:bg-blue-700 transition p-[10px_20px] font-[500] text-[16px]"
                        >
                            Explore now
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
