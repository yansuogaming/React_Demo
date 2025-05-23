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
    widthImage = "100%",
    heightImage = "auto",
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
        <div className="group flex flex-col h-full">
            <Link
                to={href}
                className="rounded-[60px_0_0_0] overflow-hidden block relative"
            >
                <img
                    src={image}
                    alt={title}
                    style={{ width: widthImage, height: heightImage }}
                    className="group-hover:scale-[1.1] transition-all duration-500"
                    loading="lazy"
                />
                <div className="absolute bottom-[15px] bg-white text-right p-[6px_8px] rounded-[4px] left-[15px] leading-tight text-sm font-[700]">
                    {txtStartTime === txtEndTime ? (
                        <div className="p-[3px_10px_0px_10px]">
                            <div className="text-[20px]">
                                {txtStartTime.split(" ")[0]}
                            </div>
                            <div className="text-[14px]">
                                {txtStartTime.split(" ")[1]}
                            </div>
                        </div>
                    ) : (
                        <div className="font-[400] text-[14px]">
                            <b className="font-[700]">{txtStartTime}</b>
                            <br />
                            to <b>{txtEndTime}</b>
                        </div>
                    )}
                </div>
            </Link>
            <div className="bg-white p-[16px] rounded-[0_0_12px_12px] flex flex-col grow">
                <TertiaryHeading className="text-[20px] mb-[8px] group-hover:text-[#007BFF] transition-all duration-500">
                    <Link to={href}>{title}</Link>
                </TertiaryHeading>
                {children}
            </div>
        </div>
    );
};

export default CardEvent;
