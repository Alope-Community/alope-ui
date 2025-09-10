import { Button, Card } from "./components";
function App() {
  const docs = [
    {
      label: "Button",
      to: "/button",
      description: "Interactive button components.",
    },
    {
      label: "Badge",
      to: "/badge",
      description: "Small count or status indicators.",
    },
    {
      label: "Accordion",
      to: "/accordion",
      description: "Expandable and collapsible sections.",
    },
    {
      label: "Alert",
      to: "/alert",
      description: "Display important messages to users.",
    },
    {
      label: "Breadcrumb",
      to: "/breadcrumb",
      description: "Navigation for multi-level pages.",
    },
    {
      label: "Card",
      to: "/card",
      description: "Container for displaying content.",
    },
    {
      label: "Modal",
      to: "/modal",
      description: "Overlays for dialogs and interactions.",
    },
    {
      label: "Offcanvas",
      to: "/offcanvas",
      description: "Sliding panels for navigation or content.",
    },
    { label: "Toast", to: "/toast", description: "Temporary notifications." },
    {
      label: "Text Input",
      to: "/text-input",
      description: "Single-line text input fields.",
    },
    {
      label: "Select Input",
      to: "/select-input",
      description: "Dropdown selection component.",
    },
    {
      label: "Radio Input",
      to: "/radio-input",
      description: "Choose one from a group of options.",
    },
    {
      label: "Checkbox Input",
      to: "/checkbox-input",
      description: "Toggle multiple selections.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to <span className="text-primary">ALOPE UI Library</span>
        </h1>
        <p className="text-gray-600 mb-10 text-lg">
          Explore our beautifully designed components below:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map(({ label, to, description }) => (
            <Card
              key={to}
              title={label}
              description={description}
              size="full"
              footer={
                <Button to={to} suffixIcon={<span>→</span>} fullWidth>
                  Go to Docs
                </Button>
              }
              containerClassName="hover:shadow-md transition-shadow"
            />
          ))}
        </div>
      </div>

      <hr className="my-5" />

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          ALOPE UI – Version <span className="font-semibold">1.0.0</span>
          (Stable Release). 🎉
        </p>
        <a
          href="https://github.com/Alope-Community/alope-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
        <span> | </span>
        <a
          href="https://www.npmjs.com/package/alope-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on npm js
        </a>
      </div>
    </div>
  );
}

export default App;
