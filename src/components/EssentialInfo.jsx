import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@lib/utils";

export default function EssentialInfo({ title, description, essentialsList }) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <section className="w-full mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-5xl font-bold mb-1">{title}</h2>
      <p className="text-gray-600 mb-10 text-5xl">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className=" pl-4">
                <h3 className="font-semibold text-lg text-gray-500">
                  ESSENTIALS
                </h3>
                <ul className="mt-2  text-lg ">
                  {essentialsList.map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        selectedItem == index ? "border-r-5" : "border-r-4"
                      } 
                      ${
                        selectedItem === index
                          ? "border-blue-600"
                          : "border-gray-300 "
                      }
                      py-2 cursor-pointer transition-colors duration-200 ${
                        selectedItem === index
                          ? "text-blue-600"
                          : "hover:text-blue-400"
                      }`}
                      red
                      onClick={() => setSelectedItem(index)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-span-2 space-y-4 pr-2">
              {essentialsList[selectedItem].infoContent.map((info, index) => (
                <p key={index} className={info.className || "text-base"}>
                  {info.highlight && (
                    <span className="font-semibold">{info.highlight}</span>
                  )}
                  {info.text}
                </p>
              ))}
              {essentialsList[selectedItem]?.button && (
                <Button
                  onClick={essentialsList[selectedItem]?.button?.onClick}
                  variant="outline"
                  size="lg"
                  className={cn(
                    "mt-4",
                    essentialsList[selectedItem]?.button?.className
                  )}
                >
                  {essentialsList[selectedItem]?.button?.text}
                </Button>
              )}
            </div>
          </div>
        </div>

        <div>
          <img
            src={essentialsList[selectedItem].imageSrc}
            alt={essentialsList[selectedItem].imageAlt}
            width={300}
            height={200}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
