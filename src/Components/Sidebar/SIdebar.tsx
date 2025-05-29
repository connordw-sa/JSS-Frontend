import { Link } from "react-router-dom";
import "./Sidebar.css";
// imports ----------------------------------------------------------

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  sidebarRef: React.RefObject<HTMLDivElement> | null;
  closeSidebar: () => void;
}

export default function Sidebar({
  sidebarOpen,
  toggleSidebar,
  sidebarRef,
  closeSidebar,
}: SidebarProps) {
  return (
    <div
      ref={sidebarRef}
      className={`navbar-sidebar ${sidebarOpen ? "active" : ""}`}
    >
      <div className="nav-links-sidebar">
        <button className="nav-arrow-sidebar" onClick={toggleSidebar}>
          arrow Logo here
        </button>
        <Link to="/About" onClick={closeSidebar}>
          <h2>About</h2>
        </Link>
        <Link to="/Services" onClick={closeSidebar}>
          <h2>Services</h2>
        </Link>
        <Link to="/Contact" onClick={closeSidebar}>
          <h2>Contact</h2>
        </Link>
        <button className="nav-profile-link">
          <Link to="/Profile" onClick={closeSidebar}>
            <h2>Profile</h2>
          </Link>
        </button>
      </div>
    </div>
  );
}
