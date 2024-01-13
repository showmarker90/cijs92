import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <Sidebar />
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
