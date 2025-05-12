import iconMagicSpark from '@images/icon-magic-spark.svg'

const CreateItineraryButton = ({className = ''}) => {
    return (
        <button className={`cursor-pointer flex gap-[18px] bg-[#007BFF] rounded-[33px] p-[15px_60px] text-[22px] items-center text-white font-bold ${className}`}>
            <img src={iconMagicSpark} alt="Create itinerary now!" />
            Create itinerary now!
        </button>
    )
}

export default CreateItineraryButton