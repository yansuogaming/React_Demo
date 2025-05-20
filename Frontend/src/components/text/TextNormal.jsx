const TextNormal = ({ className = '', children, ...props }) => {
    return (
        <p className={`text-[#1A2A44] text-[16px] font-normal ${className}`} {...props}>
            {children}
        </p>
    )
}

export default TextNormal