import { Link } from "react-router";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Coding
      </Link>
      <Link to="/school" className="nav-link">
        School
      </Link>
      <Link to="/other" className="nav-link">
        Other
      </Link>
    </nav>
  );
}

export default Nav;
