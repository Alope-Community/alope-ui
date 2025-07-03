import { useState } from "react";
import { Accordion } from "../components"

const AccordionPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const data = [
    {
      label: 'What is Accordion?',
      description: "An accordion is a UI component commonly used in web and mobile interfaces to display content in a collapsible and expandable manner. It allows users to toggle between hiding and showing content, saving space on the page by displaying only the section the user is interested in. Accordions are useful for grouping related information, FAQs, or navigation links, where each section can expand or collapse when clicked."
    },
    {
      label: 'What is Accordion?',
      description: "An accordion is a UI component commonly used in web and mobile interfaces to display content in a collapsible and expandable manner. It allows users to toggle between hiding and showing content, saving space on the page by displaying only the section the user is interested in. Accordions are useful for grouping related information, FAQs, or navigation links, where each section can expand or collapse when clicked."
    },
    {
      label: 'What is Accordion?',
      description: "An accordion is a UI component commonly used in web and mobile interfaces to display content in a collapsible and expandable manner. It allows users to toggle between hiding and showing content, saving space on the page by displaying only the section the user is interested in. Accordions are useful for grouping related information, FAQs, or navigation links, where each section can expand or collapse when clicked."
    },
  ]

  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">Accordion Component Documentation</h1>

      {/* Basic */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Basic Example Accordion</h2>
        <div className="flex flex-wrap gap-4">
          <Accordion
            data={data}
          />
        </div>
      </div>

      {/* Custom Class */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">With Custom Class</h2>
        <div className="flex flex-wrap gap-4">
          <Accordion
            labelClassName="font-bold"
            labelContainerClassName="bg-info/35 border-info"
            descriptionClassName="bg-info/50 font-semibold"
            data={data}
          />
        </div>
      </div>

      {/* Custom Class + Icon */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">With Custom Class + Icon</h2>
        <div className="flex flex-wrap gap-4">
          <Accordion
            data={data}
            labelClassName="font-bold"
            labelContainerClassName="bg-info/35 border-info"
            descriptionClassName="bg-info/50 font-semibold"
            openIndex={openIndex}
            onToggleItem={(index) => setOpenIndex(index)}
            icon={isActive => <svg
              className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14" />
            </svg>
            }
          />
        </div>
      </div>

    </div>
  )
}

export default AccordionPage