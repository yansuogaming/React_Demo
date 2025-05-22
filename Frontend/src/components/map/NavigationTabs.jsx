import { MapPin, Layers, Clock, Grid } from "lucide-react";
import { Button } from "@components/ui/button";

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabItems = [
    {
      name: "welcome",
      icon: <MapPin className="h-4 w-4" />,
      label: "Welcome",
    },
    {
      name: "themes",
      icon: <Layers className="h-4 w-4" />,
      label: "Themes",
    },
    {
      name: "timeline",
      icon: <Clock className="h-4 w-4" />,
      label: "Timeline",
    },
    {
      name: "extras",
      icon: <Grid className="h-4 w-4" />,
      label: "Extras",
    },
  ];

  return (
    <div className="border-b border-gray-700">
      <div className="flex min-h-20 items-center justify-between">
        {tabItems.map((tab) => (
          <Button
            key={tab.name}
            variant="ghost"
            className={`flex min-h-16 flex-col gap-2 items-center text-base ${
              activeTab === tab.name
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.icon}
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;