import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logoDark from "../../assets/logo-dark.jpg";
import { useHandleClickPage } from "../../utils/CustomHooks";
import Sidebar from "./SIdebar";

// imports ----------------------------------------------------------

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // custom hook is expecting obj but ref can be null
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // callback for sidebar state
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // close sidebar if user does navigate to different page
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // pass ref and callback to custom hook
  useHandleClickPage(sidebarRef, () => setSidebarOpen(false));

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

      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        sidebarRef={sidebarRef as React.RefObject<HTMLDivElement>}
        closeSidebar={() => setSidebarOpen(false)}
      />
    </>
  );
}
