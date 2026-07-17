import React from "react";

export default function TripReview({ booking = {} }) {
  const { route, date, time, seats, passenger } = booking;

  return (
    <section className="trip-review card">
      <h2>Trip Details</h2>

      <div className="row">
        <div>
          <strong>Route:</strong>
          <div className="muted">{route || "—"}</div>
        </div>
        <div>
          <strong>Date:</strong>
          <div className="muted">{date || "—"}</div>
        </div>
        <div>
          <strong>Time:</strong>
          <div className="muted">{time || "—"}</div>
        </div>
      </div>

      <div className="row">
        <div>
          <strong>Passenger:</strong>
          <div className="muted">{(passenger && passenger.name) || "—"}</div>
        </div>
        <div>
          <strong>Contact:</strong>
          <div className="muted">{(passenger && passenger.contact) || "—"}</div>
        </div>
      </div>

      <div className="seats">
        <strong>Seats:</strong>
        <div className="muted">{(seats && seats.join(", ")) || "—"}</div>
      </div>
    </section>
  );
}
