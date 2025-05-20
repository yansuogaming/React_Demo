import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

const Share = ({ className = "" }) => {
    return (
        <section
            className={`flex flex-col md:flex-row items-center justify-center gap-[12px] md:gap-[20px] text-center ${className}`}
        >
            <p className="text-[#1A2A44] text-[20px] font-[500]">
                Do you like it? Share it
            </p>
            <div className="flex flex-row gap-[20px] lg:gap-[12px]">
                <a href="">
                    <TwitterIcon className="fill-[#007BFF]" />
                </a>
                <a href="">
                    <InstagramIcon className="fill-[#007BFF]" />
                </a>
                <a href="">
                    <YoutubeIcon className="stroke-[#007BFF]" />
                </a>
                <a href="">
                    <FacebookIcon className="fill-[#007BFF]" />
                </a>
            </div>
        </section>
    );
};

export default Share;
