import "/src/assets/ic_buslogo.png";
import "../styles/navbar.css";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="/src/assets/ic_buslogo.png"
            className="logo"
            alt="Bus Logo"
          />
          <div className="logo-text">
            <p className="title">CSBT</p>
            <p className="subtitle">Cebu Southern Bus Terminal</p>
          </div>
        </div>
        <ul>
          <li>
            <NavLink to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/routes">
              Routes
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/support">
              Support
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
