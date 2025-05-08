const InputSearchTrip = ({ label, iconSvg, children }) => {
    return (
        <div className="group items-center gap-[10px] flex border-2 rounded-[80px] p-[15px_20px] border-[#D8DAE2] focus-within:border-[#007BFF]">
            <div>
                {iconSvg}
            </div>
            <div className="w-full">
                <p className="text-[20px] text-[#494951] font-bold">{label}</p>
                {children}
            </div>
        </div>
    )
}

export default InputSearchTrip