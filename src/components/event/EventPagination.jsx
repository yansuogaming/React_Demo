const EventPagination = ({ totalPages, currentPage, setCurrentPage }) => (
    <div className="flex justify-center items-center gap-2 mt-8">
        <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
            ◀
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
            <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-full text-sm font-medium ${
                    currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
                {i + 1}
            </button>
        ))}
        <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
            ▶
        </button>
    </div>
);

export default EventPagination;
