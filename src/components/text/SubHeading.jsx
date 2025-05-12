const SubHeading = ({ className = '', children, ...props }) => {
    return (
        <h2 className={`text-[#1A2A44] text-[40px] font-bold ${className}`} {...props}>
            {children}
        </h2>
    )
}

export default SubHeading