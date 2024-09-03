import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            exact
            to="/"
            className="navbar-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/resume"
            className="navbar-link"
            activeClassName="active"
          >
            Resume
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/project"
            className="navbar-link"
            activeClassName="active"
          >
            Project
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/contact"
            className="navbar-link"
            activeClassName="active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
