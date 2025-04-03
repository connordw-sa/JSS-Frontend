import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logoDark from "../../assets/logo-dark.jpg";

// imports ----------------------------------------------------------

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  // toggle for sidebar
  // close sidebar if user does navigate to different page
  const toggleSidebar = () => {
    console.log("opening sidebar");
    setSidebarOpen((prev) => !prev);
  };
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // useRef for sidebar so that react detects outside click
  useEffect(() => {
    if (!sidebarOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };
    // need to use mousedown instead of click to fire earlier
    // navbar elements were stoppingg propogation
    document.addEventListener("mousedown", handleClickOutside);
    // clean up the event listener
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

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

      <div
        ref={sidebarRef}
        className={`navbar-sidebar ${sidebarOpen ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
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
