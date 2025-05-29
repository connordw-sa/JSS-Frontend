import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logoDark from "../../assets/logo-light.jpg";
import { useHandleClickPage } from "../../utils/CustomHooks";
import Sidebar from "../Sidebar/Sidebar";

// imports ----------------------------------------------------------

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

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
            <hr />
          </Link>
          <Link to="/Services">
            <h2>Services</h2>
            <hr />
          </Link>
          <Link to="/Contact">
            <h2>Contact</h2>
            <hr />
          </Link>
          <button className="nav-profile-link">
            <Link to="/Profile">
              <h2 className="this">Profile</h2>
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
