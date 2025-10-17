import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Installation from "../components/Section/Installation";
import Comparation from "../components/Section/Comparation";
import Collaborators from "../components/Section/Collabolators";
import Navbar from "../components/Layout/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar onToggleSidebar={() => {}} />
      <Header />
      <Installation />
      <Comparation />
      <Collaborators />
      <Footer />
    </div>
  );
};

export default HomePage;
