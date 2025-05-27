import React from "react";
import { Star } from "lucide-react";

const NearbyPoints = ({ points }) => {
    return (
        <div className="mt-12">
            <h2 className="text-[28px] text-[#10154C] font-bold mb-6">
                Nearby Points
            </h2>

            {/* Grid Layout for Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-2/3 pr-4">
                {points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                        {/* Image */}
                        <img
                            src={point.image_resize}
                            alt={point.name}
                            className="w-24 h-24 object-cover rounded-lg"
                        />
                        {/* Details */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">{point.name}</h3>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-yellow-500 font-medium">
                                    {point.scores_avg} <span className="text-gray-600">({point.total_reviews})</span>
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                                {point.distance} km • {point.type_name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NearbyPoints;