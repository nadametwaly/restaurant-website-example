import Logo from "./Logo";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <Logo />
        </div>
        <nav className="navbar">
          <div className="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <Link to="/courses">Our Courses</Link>
            </li>
            <li>
              <Link to="/chipions">Chipions</Link>
            </li>
            <li>
              <Link to="/article">Our Article</Link>
            </li>
            <li>
              <Link to="/committes">Committes</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
