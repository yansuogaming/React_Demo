import Reveal from "@components/animation/Reveal";
import TertiaryHeading from "@components/text/TertiaryHeading";
import useLanguage from "@hooks/useLanguage";
import { format } from "date-fns";
import { vi, enUS } from "date-fns/locale";
import { Link } from "react-router";

const CardEvent = ({
    title,
    image,
    children,
    href = "/",
    startTime = new Date(),
    endTime = new Date(),
}) => {
    const { language } = useLanguage();

    let txtStartTime = "";
    let txtEndTime = "";
    switch (language) {
        case "vi":
            txtStartTime = format(startTime, "d MMM", { locale: vi });
            txtEndTime = format(endTime, "d MMM", { locale: vi });
            break;
        default:
            txtStartTime = format(startTime, "d MMM", { locale: enUS });
            txtEndTime = format(endTime, "d MMM", { locale: enUS });
            break;
    }

    return (
        <Reveal className="group">
            <Link
                to={href}
                className="rounded-[60px_0_0_0] overflow-hidden block relative"
            >
                <img
                    src={image}
                    alt={title}
                    style={{ width: "100%", height: "100%" }}
                    className="group-hover:scale-[1.1] transition-all duration-500"
                    loading="lazy"
                />
                <p className="absolute bottom-[15px] bg-white text-right p-[6px_8px] rounded-[4px] left-[15px]">
                    <b>{txtStartTime}</b>
                    {txtStartTime !== txtEndTime && (
                        <>
                            <br />
                            to <b>{txtEndTime}</b>
                        </>
                    )}
                </p>
            </Link>
            <div className="bg-white p-[16px] rounded-[0_0_12px_12px]">
                <TertiaryHeading className="text-[20px] mb-[8px] group-hover:text-[#007BFF] transition-all duration-500">
                    <Link to={href}>{title}</Link>
                </TertiaryHeading>
                {children}
            </div>
        </Reveal>
    );
};

export default CardEvent;
