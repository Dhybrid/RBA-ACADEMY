import "./assets/css/index.css";
import "./assets/central1/css/background.css";
import "./assets/central1/css/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Certificate from "./pages/Cert";
// import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import FAQ from "./pages/Faq";
import Modules from "./pages/Modules";
import Path from "./pages/Path";
import Blog from "./pages/Blog";

// import NotFound from './pages/NotFound';

// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/path" element={<Path />} />
        <Route path="/blog" element={<Blog />} />
      
       
      </Routes>
    </Router>
  );
};

export default App;
