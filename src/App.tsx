import { Routes, Route } from "react-router-dom";
import LayoutDocs from "./components/LayoutDocs";


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
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import DetailBlog from "./pages/DetailBlog";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/detailblog/:id" element={<DetailBlog />}></Route>
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
