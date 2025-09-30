import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Collaborators from "../components/Section/Collabolators";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar onToggleSidebar={() => {}} />
      <Header />
      <Collaborators />
      <Footer />
    </div>
  );
};

export default HomePage;
