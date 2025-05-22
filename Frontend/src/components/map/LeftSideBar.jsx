import { Search, Menu } from "lucide-react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { useState } from "react";

import NavigationTabs from "./NavigationTabs";
import FilterList from "./FilterList";
import Destination from "./Destination";
import { useMapContext } from "@contexts/MapContext";
import { cn } from "@lib/utils";

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    activeTab, 
    setActiveTab, 
    keywords, 
    setKeywords, 
    selectedMarker, 
    listFilter
  } = useMapContext();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed bottom-4 right-4 z-30 rounded-full bg-blue-500 text-white hover:bg-blue-600 h-12 w-12"
        onClick={() => setIsOpen(true)}
      >
        <Search className="h-6 w-6" />
      </Button>

      <div className={cn(
        "fixed inset-0 z-40 w-full lg:w-100 lg:relative overflow-y-auto flex flex-col gap-4 border-r border-gray-700 bg-[rgb(35,37,43)]",
        "transition-transform duration-300 ease-in-out",
        "lg:translate-y-0",
        isOpen ? "translate-y-0" : "translate-y-full lg:translate-y-0"
      )}>
        <div className="sticky top-0 w-full p-4 z-20 bg-[rgb(35,37,43)]">
        <div className="relative">
          <Input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Search"
            className="text-3xl h-full rounded-md pl-3 pr-10 py-2 w-full"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full text-gray-400"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden absolute right-2 top-2 text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="mt-36 p-4">
        {keywords?.length > 0 && (
          <FilterList list_filter={listFilter} />
        )}
        {selectedMarker && keywords?.length == 0 && (
          <Destination />
        )}
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;