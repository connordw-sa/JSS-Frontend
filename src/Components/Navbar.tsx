import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import logoDark from "../assets/logo-dark.jpg";

// imports ----------------------------------------------------------

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // toggle for sidebar
  // close sidebar if user does navigate to different page
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="nav-parent">
        <button className="nav-hamburger" onClick={toggleSidebar}>
          ☰
        </button>

        <div className="nav-logo">
          <Link to="/">
            <img className="logo" src={logoDark} />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/About">
            <h2>About</h2>
          </Link>
          <Link to="/Services">
            <h2>Services</h2>
          </Link>
          <Link to="/Contact">
            <h2>Contact</h2>
          </Link>
          <button className="nav-profile-link">
            <Link to="/Profile">
              <h2>Profile</h2>
            </Link>
          </button>
        </div>
      </div>

      <div className={`navbar-sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="nav-links-sidebar">
          <button className="nav-arrow-sidebar" onClick={toggleSidebar}>
            arrow Logo here
          </button>
          <Link to="/About">
            <h2>About</h2>
          </Link>
          <Link to="/Services">
            <h2>Services</h2>
          </Link>
          <Link to="/Contact">
            <h2>Contact</h2>
          </Link>
          <button className="nav-profile-link">
            <Link to="/Profile">
              <h2>Profile</h2>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
