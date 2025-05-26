import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";

// Component InfoCard tái sử dụng
function InfoCard({ title, description, icon, onClickItem, to }) {
  return (
    <NavLink
      to={to}
      onClick={onClickItem}
      className="block transition-all duration-300 hover:translate-x-1"
    >
      <div className="border-b pb-6">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-bold text-gray-800 mt-[2px]">{title}</h3>
          {icon}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </NavLink>
  );
}

// Component chung cho dropdown content
const DropdownContent = ({
  className,
  onMouseLeave,
  onMouseEnter,
  setHoverContent,
  setHoverMenu,
  menuItems = [],
}) => {
  const { t } = useTranslation();

  // Hàm xử lý khi click vào item info card
  const onClickItem = () => {
    setHoverContent(false);
    setHoverMenu(false);
  };

  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`absolute left-1/2 -translate-x-1/2 top-full  w-full -mt-[30px] pt-[15px] z-50 ${className}`}
    >
      <div className="bg-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-white py-8 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <InfoCard
                key={index}
                onClickItem={onClickItem}
                title={t(item.titleKey)}
                description={t(item.descriptionKey)}
                icon={<ChevronRight color="black" className="h-5 w-5" />}
                to={item.to}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownContent;
