import { useState } from "react";
import { Accordion } from "../components";
// import { useNavigate } from "react-router-dom";
import Container from "./Container";

const AccordionPage = () => {
  // const navigate = useNavigate();

  const [openIndex, setOpenIndex] = useState<number[] | number | null>([1]);

  const data = [
    {
      label: "What is Accordion?",
      description:
        "An accordion is a UI component commonly used in web and mobile interfaces to display content in a collapsible and expandable manner. It allows users to toggle between hiding and showing content, saving space on the page by displaying only the section the user is interested in. Accordions are useful for grouping related information, FAQs, or navigation links, where each section can expand or collapse when clicked.",
    },
    {
      label: "What is Accordion?",
      description:
        "An accordion is a UI component commonly used in web and mobile interfaces to display content in a collapsible and expandable manner. It allows users to toggle between hiding and showing content, saving space on the page by displaying only the section the user is interested in. Accordions are useful for grouping related information, FAQs, or navigation links, where each section can expand or collapse when clicked.",
    },
    {
      label: "What is Accordion?",
      description:
        "An accordion is a UI component commonly used in web and mobile interfaces to display content in a collapsible and expandable manner. It allows users to toggle between hiding and showing content, saving space on the page by displaying only the section the user is interested in. Accordions are useful for grouping related information, FAQs, or navigation links, where each section can expand or collapse when clicked.",
    },
  ];

  return (
    <Container
      title="Accordion Component"
      description="Used to show and hide sections of content, allowing users to expand or collapse details."
    >
      {/* Basic */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-gray-200">
          Basic Example Accordion
        </h2>
        <div className="flex flex-wrap gap-4">
          <Accordion data={data} />
        </div>
      </div>

      {/* Single State */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-gray-200">
          Single State Accordion
        </h2>
        <div className="flex flex-wrap gap-4">
          <Accordion data={data} />
        </div>
      </div>

      {/* Multiple State */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-gray-200">
          Multiple State Accordion
        </h2>
        <div className="flex flex-wrap gap-4">
          <Accordion single={false} data={data} />
        </div>
      </div>

      {/* Custom Class */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-gray-200">
          With Custom Class
        </h2>
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
        <h2 className="text-xl font-semibold dark:text-gray-200">
          With Custom Class + Icon
        </h2>
        <div className="flex flex-wrap gap-4">
          <Accordion
            data={data}
            labelClassName="font-bold"
            labelContainerClassName="bg-info/35 border-info"
            descriptionClassName="bg-info/50 font-semibold"
            single={false}
            openIndex={openIndex}
            onToggleItem={setOpenIndex}
            icon={(isActive) => (
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isActive ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v14M5 12h14"
                />
              </svg>
            )}
          />
        </div>
      </div>
    </Container>
  );
};

export default AccordionPage;
