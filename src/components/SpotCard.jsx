const SpotCard = ({ item, onDelete, onClick }) => (
    <div
        className="flex items-start gap-4 border rounded-lg p-4 relative cursor-pointer hover:bg-gray-50"
        onClick={onClick} // click vào toàn bộ card
    >
        <img
            src={item.image}
            alt={item.name}
            className="w-[112px] h-[112px] object-cover rounded-[12px_0px]"
        />
        <div className="flex-1">
            <h3 className="font-semibold text-md">{item.name}</h3>
            <p className="text-sm text-gray-500">
                {item.type} {item.duration && `• Duration: ${item.duration}`}
            </p>
            <p className="text-sm text-orange-500 font-medium mt-1">
                ⭐ {item.rating ?? "N/A"} (
                {item.reviews?.toLocaleString?.() ?? "0"})
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
                {(item.tags ?? []).map((tag, i) => (
                    <span
                        key={i}
                        className="bg-gray-100 px-2 py-0.5 text-sm rounded-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        <button
            onClick={(e) => {
                e.stopPropagation(); // Ngăn không cho click lan ra card
                onDelete(item.id);
            }}
            className="absolute bottom-2 right-2 text-gray-400 hover:text-red-500"
        >
            🗑️
        </button>
    </div>
);

export default SpotCard;
