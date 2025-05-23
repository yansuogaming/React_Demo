import React from "react";

const PhotoGallery = () => {
    const largeImage =
        "http://dulichtoday.vn/wp-content/uploads/2017/04/vinh-Ha-Long.jpg";
    const smallImage1 =
        "http://dulichtoday.vn/wp-content/uploads/2017/04/vinh-Ha-Long.jpg";
    const smallImage2 =
        "http://dulichtoday.vn/wp-content/uploads/2017/04/vinh-Ha-Long.jpg";


    return (
        <div className="flex flex-col md:flex-row gap-2">
            {/* Large Image (Left) */}
            <div className="w-full md:w-2/3">
                <img
                    src={largeImage}
                    alt="Large scenic view"
                    className="w-full h-96 object-cover"
                />
            </div>

            {/* Small Images (Right) */}
            <div className="w-full md:w-1/7 flex flex-col gap-2">
                <img
                    src={smallImage1}
                    alt="Small scenic view 1"
                    className="w-full h-47 object-cover"
                />
                <img
                    src={smallImage2}
                    alt="Small Scenic View 2"
                    className="w-full h-47 object-cover"
                />
            </div>
            <div className="w-full md:w-1/3 relative">
                <img
                    src={largeImage}
                    alt="Large scenic view"
                    className="w-full h-96 object-cover"
                />
                <button className="absolute bottom-4 right-4 bg-black text-white text-sm font-medium py-2 px-4 hover:bg-gray-800 transition-colors duration-200">
                    See all 14 photos
                </button>
            </div>

        </div>
    );
};

export default PhotoGallery;