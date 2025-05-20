import * as Dialog from "@radix-ui/react-dialog";

import { ArrowRight, X } from "lucide-react";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router";

function ModalSearch({ isOpen, onClose }) {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { t } = useTranslation();
  const [keyword, setKeyword] = React.useState("");
  const navigate = useNavigate();
  const [listResult, setListResult] = React.useState([
    {
      id: 1,
      title: "Passports and visas",
      description: "Planning Information",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png",
    },
    {
      id: 2,
      title: "The Swiss Chesses Passport",
      description: "Planning Information",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4I0WNZl7vF5JMVH0VwX3YY990_zL7seigA&s",
    },
    {
      id: 3,
      title: "Restuarants and bars",
      description: "Planning Information",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/5d/20/bc/home-hanoi-home-vietnamese.jpg?w=900&h=500&s=1",
    },
  ]);

  const location = useLocation();

  // Lấy keyword từ URL nếu đang ở trang search-result
  useEffect(() => {
    if (location.pathname.includes("/search-result/")) {
      const currentKeyword = location.pathname.split("/search-result/")[1];
      if (currentKeyword) {
        setKeyword(decodeURIComponent(currentKeyword));
      }
    }
  }, [location.pathname, isOpen]);

  useEffect(() => {
    if (keyword) {
      setListResult(listResult);
    }
  }, [keyword]);

  const onPresSearch = () => {
    onClose();
    navigate(`/search-result/${keyword}`);
  };
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 text-gray-800 border-none p-4 w-[100vw] h-[100vh] overflow-y-auto rounded-lg z-100">
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-gray-800 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full container mt-20 mx-auto relative">
            {/* Header */}
            <div style={{borderBottomWidth:1,borderBottomColor:"black"}} className="mb-8 mx-4 ">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder={t("Search")}
                  value={keyword}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onPresSearch();
                    }
                  }}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="text-xl xl:text-5xl font-light xl:font-medium bg-transparent border-none outline-none w-full placeholder:text-gray-500"
                  autoFocus
                />
                <button
                  onClick={onPresSearch}
                  className="text-[#000000] flex items-center text-lg xl:text-2xl gap-2 hover:underline"
                >
                  Search <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="h-px bg-white/20 w-full mt-6"></div>
            </div>

            {/* Content */}
            <div className="flex flex-row justify-between gap-15  ">
              {/* Left column - List of items */}
              <div className="space-y-6 flex-1">
                {listResult.map((item, index) => (
                  <Item
                    setSelectedItem={setSelectedItem}
                    index={index}
                    item={item}
                    key={index}
                  />
                ))}
                {listResult.length > 0 && (
                  <button
                    onClick={onPresSearch}
                    className="text-[#000000] flex items-center text-lg xl:text-2xl gap-2 hover:underline mx-4"
                  >
                    Show All <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Right column - Featured content */}
              <div className="w-sm hidden lg:block">
                <div className="mb-6 ">
                  <img
                    src={listResult[selectedItem]?.image}
                    alt="Passport and visa stamps"
                    width={500}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-black">
                    {listResult[selectedItem]?.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span className="text-lg">Planning Information</span>
                  </div>

                  <p className="text-gray-900 text-lg">
                    {listResult[selectedItem]?.description}
                  </p>

                  <Link
                    href="#"
                    className="text-[#FF5A70] inline-flex items-center"
                  >
                    <ArrowRight className="w-8 h-8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ModalSearch;

const Item = ({ setSelectedItem, item, index }) => (
  <Link
    href="#"
    className="flex group hover:bg-blue-200 items-center gap-4 p-4 rounded-md"
    onMouseEnter={() => {
      setSelectedItem(index);
    }}
  >
    <div className="w-28 h-18 rounded-md overflow-hidden flex-shrink-0">
      <img
        src={item?.image}
        alt="Passports and visas"
        width={96}
        height={64}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 className="text-lg font-medium group-hover:text-blue-700 text-black">
        {item?.title}
      </h3>
      <p className="text-gray-700">{item?.description}</p>
    </div>
  </Link>
);
