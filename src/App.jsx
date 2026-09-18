import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import PublicService from "./pages/PublicService";
import PoliticalJourney from "./pages/PoliticalJourney";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/public-service"
          element={<PublicService />}
        />

        <Route
          path="/political-journey"
          element={<PoliticalJourney />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/media"
          element={<Media />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;