/* eslint-disable no-unused-vars */
import { Search, Menu, X } from "lucide-react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import NavigationTabs from "./NavigationTabs";
import FilterList from "./FilterList";
import Destination from "./Destination";
import { useMapContext, SIDEBAR_MODE } from "@contexts/MapContext";
import { cn } from "@lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const SubLeftSideBar = () => {
    const { showSubleftSidebar, setShowSubleftSidebar } = useMapContext();

    return (
        <AnimatePresence initial={false}>
            {showSubleftSidebar && (
                <motion.div
                    initial={{
                        x: -"100%",
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    exit={{
                        x: -"100%",
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    style={{
                        scrollbarWidth: "thin",
                    }}
                    className={cn(
                        "fixed inset-0 z-40 w-full lg:w-110 lg:relative overflow-y-auto flex flex-col border-r border-gray-700 bg-[rgb(35,37,43)]"
                    )}
                >
                    <div className="sticky flex flex-col top-0 w-full px-4 z-20 bg-[rgb(35,37,43)]">
                        <Button
                            variant="ghost"
                            size="icon"
                            className=" self-end text-gray-400"
                            onClick={() => setShowSubleftSidebar(false)}
                        >
                            <X className="h-6 w-6" />
                        </Button>

                        <div className="hidden lg:block"></div>
                    </div>
                    <div className="p-4">
                        <Destination />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SubLeftSideBar;
