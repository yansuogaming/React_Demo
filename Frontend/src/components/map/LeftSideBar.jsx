import { Search } from "lucide-react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";

import NavigationTabs from "./NavigationTabs";
import FilterList from "./FilterList";
import Destination from "./Destination";
import { useMapContext } from "@contexts/MapContext";

const LeftSideBar = () => {
  const { 
    activeTab, 
    setActiveTab, 
    keywords, 
    setKeywords, 
    selectedMarker, 
    listFilter
  } = useMapContext();

  return (
    <div className="w-100 relative overflow-y-auto flex flex-col gap-4 border-r border-gray-700 bg-[rgb(35,37,43)]">
      <div className="fixed w-100 p-4 z-20 bg-[rgb(35,37,43)]">
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
  );
};

export default LeftSideBar;