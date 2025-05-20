import NorthImage from "./NorthImage";
import CentralImage from "./CentralImage";
import SouthImage from "./SouthImage";
import ParacelIslands from "./ParacelIslands";
import SpratlyIslands from "./SpratlyIslands";

const MapsRegion = ({ className = "" }) => {
    return (
        <svg
            width="512"
            height="643"
            viewBox="0 0 512 643"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clipPath="url(#clip0_6678_3258)">
                <NorthImage />
                <CentralImage />
                <SouthImage />
                <ParacelIslands />
                <SpratlyIslands />
            </g>
            <defs>
                <clipPath id="clip0_6678_3258">
                    <rect width="512" height="643" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default MapsRegion;
