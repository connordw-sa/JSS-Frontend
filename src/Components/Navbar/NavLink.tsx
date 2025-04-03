import { Link } from "react-router-dom";

// toggleSidebar prop will always be expected
// don't really need navlink component, too much abstraction
interface NavLinkProps {
  buttonText?: string;
  to: string;
  imgSrc?: string;
  toggleSidebar: () => void;
}

export default function NavLink({
  buttonText,
  to,
  imgSrc,
  toggleSidebar,
}: NavLinkProps) {
  return (
    <Link to={to} onClick={toggleSidebar}>
      <h2>{buttonText}</h2>
    </Link>
  );
}
