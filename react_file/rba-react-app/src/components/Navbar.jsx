import { Link } from "react-router-dom";
import logo from "../assets/image/icon/RBA4.png"; 

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="top-navbar">
          <div className="navbar-brand">
            <Link to="/">
              <img src={logo} alt="RBA Academy Logo" />
            </Link>
          </div>

          <ul className="topnavbar-items">
            <li className="nav-items">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-items">
              <Link to="/cert">Certification</Link>
            </li>
            <li className="nav-items">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="nav-items">
              <Link to="/path">Path</Link>
            </li>
            <li className="nav-items">
              <Link to="/modules">Modules</Link>
            </li>
            <li className="nav-items">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="nav-items">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-items">
              <Link to="/partnership">Partnership</Link>
            </li>
          </ul>

          <Link to="/signup">
            <button className="bton bton-primary bton-modify" id="header-bton">
              <p className="bton-text">Register / Signup</p>
              <span className="square Hsquare"></span>
            </button>
          </Link>

          <button className="nav-toggle-bton">
            <span className="one1"></span>
            <span className="two2"></span>
            <span className="three3"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};


export default Navbar
