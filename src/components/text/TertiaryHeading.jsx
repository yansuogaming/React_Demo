const TertiaryHeading = ({ className = '', children, ...props }) => {
    return (
        <h3 className={`text-[#1A2A44] font-bold ${className}`} {...props}>
            {children}
        </h3>
    )
}

export default TertiaryHeading