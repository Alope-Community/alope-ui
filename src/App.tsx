import { Routes, Route } from "react-router-dom";
import LayoutDocs from "./components/LayoutDocs";

// Docs pages
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import DetailBlog from "./pages/DetailBlog";

// Docs v1.0.
import Accordion from "./pages/docs/v1.0/Accordion";
import ButtonDocs from "./pages/docs/v1.0/Button";
import CardDocs from "./pages/docs/v1.0/Card";
import ModalDocs from "./pages/docs/v1.0/Modal";
import AlertDocs from "./pages/docs/v1.0/Alert";
import ToastDocs from "./pages/docs/v1.0/Toast";
import BadgeDocs from "./pages/docs/v1.0/Badge";
import CheckboxDocs from "./pages/docs/v1.0/Checkbox";
import RadioDocs from "./pages/docs/v1.0/Radio";
import SelectDocs from "./pages/docs/v1.0/Select";
import Breadcrumb from "./pages/docs/v1.0/Breadcrumb";
import TextInput from "./pages/docs/v1.0/TextInput";
import Offcanvas from "./pages/docs/v1.0/Offcanvas";
import QuickStart from "./pages/docs/v1.0/installation";

// Docs v1.1.
import Installation from "./pages/docs/v1.1/installation";
import Skeleton from "./pages/docs/v1.1/Skeleton";
import Spinner from "./pages/docs/v1.1/Spinner";
import TableDocs from "./pages/docs/v1.1/TableDocs";
import TabsDocs from "./pages/docs/v1.1/TabsDocs";
import TextArea from "./pages/docs/v1.1/TextArea";
import Toggle from "./pages/docs/v1.1/Toggle";
import Tooltip from "./pages/docs/v1.1/Tooltip";
import FileUpload from "./pages/docs/v1.1/FileUpload";
import Avatar from "./pages/docs/v1.1/Avatar";
import AvatarGroup from "./pages/docs/v1.1/AvatarGroup";
import Pagnation from "./pages/docs/v1.1/Pagination";

// import { useTheme } from "./context/ThemeContext";

function App() {
  // const { theme, toggleTheme } = useTheme();

  // const docs = [
  //   {
  //     label: "Button",
  //     to: "/button",
  //     description: "Interactive button components.",
  //   },
  //   {
  //     label: "Badge",
  //     to: "/badge",
  //     description: "Small count or status indicators.",
  //   },
  //   {
  //     label: "Accordion",
  //     to: "/accordion",
  //     description: "Expandable and collapsible sections.",
  //   },
  //   {
  //     label: "Alert",
  //     to: "/alert",
  //     description: "Display important messages to users.",
  //   },
  //   {
  //     label: "Breadcrumb",
  //     to: "/breadcrumb",
  //     description: "Navigation for multi-level pages.",
  //   },
  //   {
  //     label: "Card",
  //     to: "/card",
  //     description: "Container for displaying content.",
  //   },
  //   {
  //     label: "Modal",
  //     to: "/modal",
  //     description: "Overlays for dialogs and interactions.",
  //   },
  //   {
  //     label: "Offcanvas",
  //     to: "/offcanvas",
  //     description: "Sliding panels for navigation or content.",
  //   },
  //   { label: "Toast", to: "/toast", description: "Temporary notifications." },
  //   {
  //     label: "Text Input",
  //     to: "/text-input",
  //     description: "Single-line text input fields.",
  //   },
  //   {
  //     label: "Select Input",
  //     to: "/select-input",
  //     description: "Dropdown selection component.",
  //   },
  //   {
  //     label: "Radio Input",
  //     to: "/radio-input",
  //     description: "Choose one from a group of options.",
  //   },
  //   {
  //     label: "Checkbox Input",
  //     to: "/checkbox-input",
  //     description: "Toggle multiple selections.",
  //   },
  //   {
  //     label: "Pagination",
  //     to: "/pagination",
  //     description: "Navigate between multiple pages of content.",
  //   },
  //   {
  //     label: "Table",
  //     to: "/table",
  //     description: "Used to display data in a tabular format.",
  //   },
  //   {
  //     label: "Tooltip",
  //     to: "/tooltip",
  //     description: "Used to display hint of a component.",
  //   },
  //   {
  //     label: "Spinner",
  //     to: "/spinner",
  //     description: "Loading or processing state component.",
  //   },
  //   {
  //     label: "Skeleton",
  //     to: "/skeleton",
  //     description: "Displays a placeholder preview while loading.",
  //   },
  //   {
  //     label: "Toggle",
  //     to: "/toggle",
  //     description: "A switch component used to toggle on/off.",
  //   },
  //   {
  //     label: "Textarea",
  //     to: "/textarea",
  //     description: "Multi-line text input fields.",
  //   },
  //   {
  //     label: "Avatar",
  //     to: "/avatar",
  //     description: "Displays user profile images or initials.",
  //   },
  //   {
  //     label: "File Upload",
  //     to: "/file-upload",
  //     description: "Allow users to upload files.",
  //   },
  //   {
  //     label: "Tabs",
  //     to: "/tabs",
  //     description: "Used to navigate between different sections.",
  //   },
  //   {
  //     label: "Collection",
  //     to: "/collection",
  //     description: "A component to display a collection of items.",
  //   },
  //   {
  //     label: "FAB",
  //     to: "/fab",
  //     description: "A floating button for primary actions.",
  //   },
  //   {
  //     label: "Bottom Navbar",
  //     to: "/bottom-navbar",
  //     description:
  //       "A navigation bar that appears at the bottom of the screen, typically used in mobile views.",
  //   },
  //   { label: "Grid", to: "/grid", description: "Create a grid layouts." },
  //   {
  //     label: "Masonry",
  //     to: "/masonry",
  //     description: 'Create a "Masonry Grid" layout.',
  //   },
  //   {
  //     label: "Timeline",
  //     to: "/timeline",
  //     description: "Displays a list of events in chronological order.",
  //   },
  // ];

  return (
    <Routes>
      {/* Docs routes v1.0.0 */}
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/detailblog/:id" element={<DetailBlog />}></Route>
      {/* Layout Docs */}
      <Route path="/docs" element={<LayoutDocs />}>
        <Route path="installation" element={<QuickStart />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="button" element={<ButtonDocs />} />
        <Route path="card" element={<CardDocs />} />
        <Route path="textinput" element={<TextInput />} />
        <Route path="modal" element={<ModalDocs />} />
        <Route path="alert" element={<AlertDocs />} />
        <Route path="toast" element={<ToastDocs />} />
        <Route path="badge" element={<BadgeDocs />} />
        <Route path="checkbox" element={<CheckboxDocs />} />
        <Route path="radio" element={<RadioDocs />} />
        <Route path="select" element={<SelectDocs />} />
        <Route path="breadcrumb" element={<Breadcrumb />} />
        <Route path="offcanvas" element={<Offcanvas />} />
        <Route path="installation" element={<Installation />} />
        <Route path="skeleton" element={<Skeleton />} />
        <Route path="spinner" element={<Spinner />} />
        <Route path="tableDocs" element={<TableDocs />} />
        <Route path="tabsDocs" element={<TabsDocs />} />
        <Route path="textArea" element={<TextArea />} />
        <Route path="toggle" element={<Toggle />} />
        <Route path="tooltip" element={<Tooltip />} />
        <Route path="fileUpload" element={<FileUpload />} />
        <Route path="avatar" element={<Avatar />} />
        <Route path="avatarGroup" element={<AvatarGroup />} />
        <Route path="pagination" element={<Pagnation />} />
      </Route>
    </Routes>
  );
}
export default App;
