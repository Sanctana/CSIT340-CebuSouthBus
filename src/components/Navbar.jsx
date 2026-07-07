
import '/src/assets/ic_buslogo.png';
import '../styles/navbar.css';

export default function Navbar() {
    return(
        <div>
            <nav className="navbar">
                <div className="logo-container">
                    <img src="/src/assets/ic_buslogo.png" className="logo" alt="Bus Logo"/>
                        <div className="logo-text">
                            <p className="title">CSBT</p>
                            <p className="subtitle">Cebu Southern Bus Terminal</p>
                        </div>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/routes">Routes</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/support">Support</a></li>
                </ul>
            </nav>
        </div>
    )
}