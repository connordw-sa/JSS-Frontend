import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Landing</Link>
      <Link to="/About">About</Link>
      <Link to="/Service">Services</Link>
      <Link to="/Profile">Profile</Link>
    </div>
  );
}
