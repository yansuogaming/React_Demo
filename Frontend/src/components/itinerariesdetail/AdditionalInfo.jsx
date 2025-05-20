import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Individual accordion item component
const AccordionItem = ({ icon, title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-4 font-[Visit_Qatar]">
      <div 
        className="flex items-center justify-between cursor-pointer py-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-500 mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-gray-900 font-[Visit_Qatar]">{title}</h3>
        </div>
        {isOpen ? 
          <ChevronUp className="text-gray-500" size={24} /> : 
          <ChevronDown className="text-gray-500" size={24} />
        }
      </div>
      
      {isOpen && (
        <div className="pl-14 pr-4 pb-4">
          <p className="text-gray-700 text-lg font-[Visit_Qatar]">{content}</p>
        </div>
      )}
      
      <div className="border-b border-gray-200 mt-2"></div>
    </div>
  );
};

// Main component
const AdditionalInfo = () => {
  return (
    <div className="max-w-4xl mx-auto font-[Visit_Qatar] mt-20">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 font-[Visit_Qatar]">Additional Info</h2>
      
      <AccordionItem 
        icon={<div className="flex flex-col">
          <div className="h-1 w-5 bg-blue-500 mb-1"></div>
          <div className="h-1 w-5 bg-blue-500 mb-1"></div>
          <div className="h-1 w-5 bg-blue-500"></div>
        </div>}
        title="Cancellation Policy"
        content="Cancel within 24 hours for a full refund. Even up to 7 days before your experience, you'll receive a refund, minus the service fee."
        defaultOpen={true}
      />
      
      <AccordionItem 
        icon={<div className="flex flex-col">
          <div className="h-1 w-5 bg-blue-500 mb-1"></div>
          <div className="h-1 w-5 bg-blue-500"></div>
        </div>}
        title="Payment Policy"
        content="Payment details go here."
      />
      
      <AccordionItem 
        icon={<div className="flex flex-col">
          <div className="h-1 w-5 bg-blue-500 mb-1"></div>
          <div className="h-1 w-5 bg-blue-500 mb-1"></div>
          <div className="h-1 w-5 bg-blue-500"></div>
        </div>}
        title="Notes"
        content="Notes content goes here."
      />
      
      <AccordionItem 
        icon={<div className="rounded-full border-2 border-blue-500 p-1">
          <div className="w-3 h-3 border-t-2 border-l-2 border-blue-500 rounded-full"></div>
        </div>}
        title="Visa Application Documents"
        content="Visa application document details go here."
      />
    </div>
  );
};

export default AdditionalInfo;