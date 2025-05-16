import iconMagicSpark from "@images/icon-magic-spark.svg";

const CreateItineraryButton = ({ className = "" }) => {
    return (
        <button
            className={`cursor-pointer flex gap-[18px] bg-[#007BFF] rounded-[33px] p-[19px_48px] lg:p-[16px_50px] text-[18px] lg:text-[22px] items-center text-white font-[700] ${className}`}
        >
            <img src={iconMagicSpark} alt="Create itinerary now!" />
            Create itinerary now!
        </button>
    );
};

export default CreateItineraryButton;
