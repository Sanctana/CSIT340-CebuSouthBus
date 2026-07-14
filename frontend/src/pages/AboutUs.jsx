import React from "react";
import heroPhoto from "../assets/hero_photo.jpg";
import "../styles/aboutus.css";

function AboutUs() {
  return (
    <div className="aboutusInnerContainer">
      <div className="aboutTop">
        <div className="aboutusOuterContainer1">
          <h1>Who We Are</h1>
          <div className="pContainer">
            <p>
              Cebu South Bus is a transportation information and <br />
              booking platform created to simplify travel across <br />
              Southern Cebu. We aim to give our passengers <br />a convenient
              experience by providing updated <br />
              routes, schedules, and easy online booking.
              <br />
            </p>

            <p>
              Whether you're traveling for work, school, <br />
              leisure, or visiting family, we are here to make <br />
              every journey comfortable and hassle-free.
            </p>
          </div>
        </div>
        <div className="aboutRight">
          <img src={heroPhoto} />
        </div>
      </div>

      <div className="aboutBottom">
        <div className="mission">
          <h2>Our Mission</h2>
          <p className="pMission">
            To provide safe, reliable, and affordable
            <br />
            transportation while connecting
            <br />
            communities across Southern Cebu
            <br />
            through modern digital services.
          </p>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p className="pVision">
            To become the leading digital transportation <br />
            platform for Southern Ceby by making every
            <br />
            journey easier, safer, and more accessible.
          </p>
        </div>
      </div>

      <h2>Why Choose Us?</h2>

      <div className="container">
        <div className="aboutusRoutes">
          <h3>Reliable Routes</h3>
          <p>Connecting you to over 20 destination across Southern Cebu.</p>
        </div>
        <div className="aboutusSchedules">
          <h3>Updated Schedules</h3>
          <p>Real-time departure information so you never miss your trip.</p>
        </div>
        <div className="aboutusBooking">
          <h3>Easy Booking</h3>
          <p>Book your tickets online in just a few simple steps.</p>
        </div>
        <div className="aboutusSafe">
          <h3>Safe & Comfortable</h3>
          <p>
            Travel with trusted bus operators for a safe and comfortable
            journey.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
