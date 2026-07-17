import "../styles/globalstyles.css";
import "../styles/footer.css";
import { NavLink } from "react-router";
import busLogo from "../assets/ic_buslogo.png";

export default function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div>
          <img src={busLogo} alt="logo" className="logo" />
        </div>

        <div className="nav-list">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/routes">Routes</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-list">
          <h3>Top Destinations</h3>
          <ul>
            <li>Oslob</li>
            <li>Moalboal</li>
            <li>Badian</li>
            <li>Dalaguete</li>
            <li>Barili</li>
            <li>Santander</li>
          </ul>
        </div>

        <div className="nav-list">
          <h3>Contact Us</h3>
          <ul>
            <li>N. Bacalso Ave., Cebu City, Philippines</li>
            <li>(054) 645-6557</li>
            <li>southbus@csbt.gov.ph</li>
            <li>Open daily, 4:00AM - 10:00PM</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
