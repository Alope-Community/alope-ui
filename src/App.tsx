import { Routes, Route, Navigate } from "react-router-dom";
import LayoutDocs from "./components/LayoutDocs";

// Docs pages
import Accordion from "./pages/docs/Accordion";
import ButtonDocs from "./pages/docs/Button";
import CardDocs from "./pages/docs/Card";
import ModalDocs from "./pages/docs/Modal";
import AlertDocs from "./pages/docs/Alert";
import ToastDocs from "./pages/docs/Toast";
import BadgeDocs from "./pages/docs/Badge";
import CheckboxDocs from "./pages/docs/Checkbox";
import RadioDocs from "./pages/docs/Radio";
import SelectDocs from "./pages/docs/Select";
import Breadcrumb from "./pages/docs/Breadcrumb";
import TextInput from "./pages/docs/TextInput";
import Offcanvas from "./pages/docs/Offcanvas";
import QuickStart from "./pages/docs/installation";
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

export default function App() {
  return (
    <Routes>
      {/* Docs routes */}
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
      </Route>
    </Routes>
  );
}