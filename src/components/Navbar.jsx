import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Public Service", path: "/public-service" },
  { name: "Journey", path: "/political-journey" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Media", path: "/media" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-mark">N</span>

          <span className="brand-text">
            <strong>NABIRASOOL</strong>
            <small>PUBLIC SERVICE</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={
                location.pathname === item.path ? "active" : ""
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="nav-contact">
          Connect
          <i className="bi bi-arrow-up-right"></i>
        </Link>

      </div>
    </header>
  );
}

export default Navbar;