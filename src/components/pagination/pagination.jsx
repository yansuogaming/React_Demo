import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Pagination= ({ 
  totalPages = 3, 
  initialPage = 1,
  onChangePage=()=>{

  }
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onChangePage(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onChangePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onChangePage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-[5px]">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-2 text-gray-400 hover:text-gray-700 disabled:opacity-50"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        const isActive = pageNumber === currentPage;
        
        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`flex items-center justify-center h-[50px] w-[50px] rounded ${
              isActive 
                ? "bg-blue-500 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-label={`Page ${pageNumber}`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNumber}
          </button>
        );
      })}
      
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2 text-gray-400 hover:text-gray-700 disabled:opacity-50"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;