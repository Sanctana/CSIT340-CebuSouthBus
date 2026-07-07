import '../styles/globalstyles.css';
import BusForm from "./BusForm.jsx";
import React from "react";

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-text">
                <p>SOUTHERN CEBU'S NO.1 BUS LINE</p>
                <h1>Your Gateway to Southern Cebu</h1>
                <p>Connecting Cebu City to over 20 destinations across Southern Cebu with safe, reliable, and affordable transportation
                    every day.</p>
            </div>

            <div className="hero-image">
            </div>

            <div>
                <BusForm/>
            </div>
        </div>
    )
}