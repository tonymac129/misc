import { Link } from "react-router";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/learning" className="nav-link">
        Learning
      </Link>
      <Link to="/demos" className="nav-link">
        Demos
      </Link>
    </nav>
  );
}

export default Nav;
