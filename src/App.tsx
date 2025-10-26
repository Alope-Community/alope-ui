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


function App() {
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
          <Route path="tooltip" element={<Tooltip/>} />
          <Route path="fileUpload" element={<FileUpload />} />
          <Route path="avatar" element={<Avatar />} />
          <Route path="avatarGroup" element={<AvatarGroup />} />
          <Route path="pagination" element={<Pagnation />} />
      </Route>
    </Routes>
  );
}
export default App;
