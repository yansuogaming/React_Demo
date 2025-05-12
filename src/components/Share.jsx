import FacebookIcon from "./icons/FacebookIcon"
import InstagramIcon from "./icons/InstagramIcon"
import TwitterIcon from "./icons/TwitterIcon"
import YoutubeIcon from "./icons/YoutubeIcon"

const Share = ({ className = '' }) => {
    return (
        <section className={`flex gap-[20px] justify-center ${className}`}>
            <p className="text-[#1A2A44] text-[20px] font-medium">Do you like it? Share it</p>
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
        </section>
    )
}

export default Share