import TertiaryHeading from "@components/text/TertiaryHeading";
import { NavLink } from "react-router";

const CardService = ({
    title,
    widthImage,
    heightImage,
    image,
    children,
    href = "/",
    padding = 0,
}) => {
    return (
        <div className="group mb-[32px]">
            <NavLink
                to={href}
                className="rounded-[60px_0_0_0] overflow-hidden block"
            >
                <img
                    src={image}
                    alt={title}
                    style={{ width: widthImage, height: heightImage }}
                    className="group-hover:scale-[1.1] transition-all duration-500"
                    loading="lazy"
                />
            </NavLink>
            <div
                className="bg-white rounded-[0_0_12px_12px]"
                style={{ padding }}
            >
                <TertiaryHeading className="text-[24px] mb-[8px] group-hover:text-[#007BFF] transition-all duration-500">
                    <NavLink to={href}>{title}</NavLink>
                </TertiaryHeading>
                {children}
            </div>
        </div>
    );
};

export default CardService;
