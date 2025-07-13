import { useState } from "react";
import { Accordion, Button } from "../components"
import { useNavigate } from "react-router-dom";

const AccordionPage = () => {
  const navigate = useNavigate()

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
    <div className="p-10 space-y-12 min-h-screen">

      <Button
        onClick={() => navigate(-1)}
        className="absolute top-10 left-10 flex items-center gap-2"
        prefixIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        }>
        Back
      </Button>

      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Accordion Component</h1>
        <p className="text-lg text-gray-600 mt-2">
          Used to show and hide sections of content, allowing users to expand or collapse details.
        </p>
      </header>

      <div className="max-w-4xl mx-auto space-y-10">

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
    </div>
  )
}

export default AccordionPage