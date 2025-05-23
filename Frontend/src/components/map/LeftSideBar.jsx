import { Search, Menu, X } from "lucide-react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { useEffect } from "react";

import NavigationTabs from "./NavigationTabs";
import FilterList from "./FilterList";
import Destination from "./Destination";
import { useMapContext, SIDEBAR_MODE } from "@contexts/MapContext";
import { cn } from "@lib/utils";

const LeftSideBar = () => {
  const {
    activeTab,
    setActiveTab,
    keywords,
    setKeywords,
    selectedMarker,
    listFilter,
    sidebarMode,
    setSidebarMode,
    isFirstLoad,
    setIsFirstLoad,
  } = useMapContext();

  useEffect(() => {
    if (selectedMarker && (!isFirstLoad || window.innerWidth >= 1024)) {
      setSidebarMode(SIDEBAR_MODE.DESTINATION);
    }
    setIsFirstLoad(false);
  }, [selectedMarker]);

  useEffect(() => {
    if (keywords?.length > 0) {
      setSidebarMode(SIDEBAR_MODE.SEARCH);
    }
  }, [keywords]);


  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed bottom-4 right-4 z-30 rounded-full bg-black text-white group hover:bg-white h-12 w-12 border-white border-2"
        onClick={() => setSidebarMode(SIDEBAR_MODE.SEARCH)}
      >
        <Search className="h-6 w-6 group-hover:text-black" />
      </Button>

      <div
        className={cn(
          "fixed inset-0 z-40 w-full lg:w-100 lg:relative overflow-y-auto flex flex-col border-r border-gray-700 bg-[rgb(35,37,43)]",
          "transition-transform duration-300 ease-in-out",
          "lg:translate-y-0",
          sidebarMode !== SIDEBAR_MODE.CLOSED
            ? "translate-y-0"
            : "translate-y-full lg:translate-y-0"
        )}
      >
        <div className="sticky flex flex-col top-0 w-full p-4 space-y-4 z-20 bg-[rgb(35,37,43)]">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden self-end text-gray-400 "
            onClick={() => setSidebarMode(SIDEBAR_MODE.CLOSED)}
          >
            <X className="h-6 w-6" />
          </Button>
          {sidebarMode === SIDEBAR_MODE.SEARCH && (
            <div className="block lg:hidden">
              <div className="relative">
                <Input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Search"
                  autoFocus
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
              <NavigationTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          )}
            
            <div className="hidden lg:block">
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
              <NavigationTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
        
        </div>
        <div className="p-4">
          {sidebarMode === SIDEBAR_MODE.SEARCH && (
            <FilterList list_filter={listFilter} />
          )}
          {sidebarMode === SIDEBAR_MODE.DESTINATION && selectedMarker && (
            <Destination />
          )}
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
