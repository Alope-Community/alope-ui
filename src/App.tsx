import { Button, Card } from "./components";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  const docs = [
    { label: "Button", to: "/button", description: "Interactive button components." },
    { label: "Badge", to: "/badge", description: "Small count or status indicators." },
    { label: "Accordion", to: "/accordion", description: "Expandable and collapsible sections." },
    { label: "Alert", to: "/alert", description: "Display important messages to users." },
    { label: "Breadcrumb", to: "/breadcrumb", description: "Navigation for multi-level pages." },
    { label: "Card", to: "/card", description: "Container for displaying content." },
    { label: "Modal", to: "/modal", description: "Overlays for dialogs and interactions." },
    { label: "Offcanvas", to: "/offcanvas", description: "Sliding panels for navigation or content.", },
    { label: "Toast", to: "/toast", description: "Temporary notifications." },
    { label: "Text Input", to: "/text-input", description: "Single-line text input fields." },
    { label: "Select Input", to: "/select-input", description: "Dropdown selection component." },
    { label: "Radio Input", to: "/radio-input", description: "Choose one from a group of options." },
    { label: "Checkbox Input", to: "/checkbox-input", description: "Toggle multiple selections." },
    { label: "Pagination", to: "/pagination", description: "Navigate between multiple pages of content." },
    { label: "Table", to: "/table", description: "Used to display data in a tabular format." },
    { label: "Tooltip", to: "/tooltip", description: "Used to display hint of a component." },
    { label: "Spinner", to: "/spinner", description: "Loading or processing state component." },
    { label: "Skeleton", to: "/skeleton", description: "Displays a placeholder preview while loading." },
    { label: "Toggle", to: "/toggle", description: "A switch component used to toggle on/off." },
    { label: "Textarea", to: "/textarea", description: "Multi-line text input fields." },
    { label: "Avatar", to: "/avatar", description: "Displays user profile images or initials." },
    { label: "File Upload", to: "/file-upload", description: "Allow users to upload files." },
    { label: "Tabs", to: "/tabs", description: "Used to navigate between different sections." },
    { label: "Collection", to: "/collection", description: "A component to display a collection of items." },
    { label: "FAB", to: "/fab", description: "A floating button for primary actions." },
    { label: "Bottom Navbar", to: "/bottom-navbar", description: "A navigation bar that appears at the bottom of the screen, typically used in mobile views." },
    { label: "Grid", to: "/grid", description: "Create a grid layouts." },
    { label: "Masonry", to: "/masonry", description: "Create a \"Masonry Grid\" layout." },
    { label: "Timeline", to: "/timeline", description: "Displays a list of events in chronological order." },
    { label: "Slider", to: "/slider", description: "Allow users to make selections from a range of values." },
    { label: "Code Input", to: "/code-input", description: "Used to input the code verification." },
    { label: "Date Picker", to: "/date-picker", description: "Used to pick a date input value." },
  ];

  return (
    <div className="p-10 space-y-12 min-h-screen bg-gradient-to-br from-primary/25 to-blue-100 dark:from-gray-900 dark:to-gray-700">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
          Welcome to <span className="text-primary dark:text-primary-dark">ALOPE UI Library</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
          Explore our beautifully designed components below:
        </p>

        <Button onClick={toggleTheme} className="absolute top-10 right-10">
          Toggle {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
        </Button>

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
              titleClassName="dark:text-white"
              descriptionClassName="dark:text-secondary"
              containerClassName="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border dark:border-gray-700"
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
