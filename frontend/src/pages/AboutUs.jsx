import React from "react";
import "../styles/aboutus.css";

import heroPhoto from "../assets/busses.png";
import clockLogo from "../assets/clock_logo.png";
import mapLogo from "../assets/map_logo.png";
import shieldLogo from "../assets/shield_logo.png";
import ticketLogo from "../assets/ticket_logo.png";

function AboutUs() {
  return (
    <div className="aboutusPage">
      {/* Hero Section */}
      <div className="aboutusHero">
        <div className="aboutusBadge">
          <span>Cebu South Bus Terminal</span>
        </div>

        <h1>Who We Are</h1>

        <p>
          A transportation platform created to simplify travel across Southern
          Cebu — updated routes, schedules, and easy online booking.
        </p>
      </div>

      <div className="aboutusContent">
        {/* About Top */}
        <div className="aboutTop">
          <div className="aboutusTextCol">
            <p className="aboutusBody">
              Cebu South Bus is a transportation information and booking
              platform created to simplify travel across Southern Cebu. We aim
              to give our passengers a convenient experience by providing
              updated routes, schedules, and easy online booking.
            </p>

            <p className="aboutusBody">
              Whether you're traveling for work, school, leisure, or visiting
              family, we are here to make every journey comfortable and
              hassle-free.
            </p>

            <div className="aboutusStats">
              <div className="aboutusStat">
                <span className="aboutusStatValue">10+</span>

                <span className="aboutusStatLabel">Active Routes</span>
              </div>

              <div className="aboutusStatDivider" />

              <div className="aboutusStat">
                <span className="aboutusStatValue">40+</span>

                <span className="aboutusStatLabel">Years of Service</span>
              </div>

              <div className="aboutusStatDivider" />

              <div className="aboutusStat">
                <span className="aboutusStatValue">5K+</span>

                <span className="aboutusStatLabel">Daily Passengers</span>
              </div>
            </div>
          </div>

          <div className="aboutRight">
            <img
              src={heroPhoto}
              alt="Scenic road in Southern Cebu"
              className="aboutusPhoto"
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="aboutBottom">
          <div className="mission">
            <p className="mvLabel">Our Mission</p>

            <h2 className="mvTitle">What drives us every day</h2>

            <p className="pMission">
              To provide safe, reliable, and affordable transportation while
              connecting communities across Southern Cebu through modern digital
              services.
            </p>
          </div>

          <div className="vision">
            <p className="mvLabel">Our Vision</p>

            <h2 className="mvTitle">Where we're headed</h2>

            <p className="pVision">
              To become the leading digital transportation platform for Southern
              Cebu by making every journey easier, safer, and more accessible
              for all passengers.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="whySection">
          <h2>Why Choose Us?</h2>

          <p className="whySub">
            Trusted by thousands of passengers across Southern Cebu every day.
          </p>

          <div className="container">
            <div className="aboutusRoutes">
              <div className="cardIcon">
                <img src={mapLogo} alt="Reliable Routes" />
              </div>

              <h3>Reliable Routes</h3>

              <p>
                Connecting you to over 50 destinations across Southern Cebu.
              </p>
            </div>

            <div className="aboutusSchedules">
              <div className="cardIcon">
                <img src={clockLogo} alt="Updated Schedules" />
              </div>

              <h3>Updated Schedules</h3>

              <p>
                Real-time departure information so you never miss your trip.
              </p>
            </div>

            <div className="aboutusBooking">
              <div className="cardIcon">
                <img src={ticketLogo} alt="Easy Booking" />
              </div>

              <h3>Easy Booking</h3>

              <p>Book your tickets online in just a few simple steps.</p>
            </div>

            <div className="aboutusSafe">
              <div className="cardIcon">
                <img src={shieldLogo} alt="Safe and Comfortable" />
              </div>

              <h3>Safe & Comfortable</h3>

              <p>
                Travel with trusted bus operators for a safe and comfortable
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
