import '../src/styles/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Certificate from "./pages/Cert";
// import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import FAQ from "./pages/Faq";
import Modules from "./pages/Modules";
import Path from "./pages/Path"
import Blog from "./pages/Blog";
// import NotFound from './pages/NotFound';

// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;