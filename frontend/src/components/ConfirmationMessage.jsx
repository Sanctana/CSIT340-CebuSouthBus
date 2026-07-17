import React from "react";

export default function ConfirmationMessage({ booking = {}, onClose }) {
  const { ticketId, route, date, time, passenger, seats } = booking;

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-message card">
        <h1>Booking Confirmed!</h1>

        <p className="muted">Thank you, {passenger && passenger.name}.</p>

        <div className="ticket-info">
          <div>
            <strong>Ticket ID:</strong> {ticketId}
          </div>
          <div>
            <strong>Route:</strong> {route}
          </div>
          <div>
            <strong>Date / Time:</strong> {date} {time}
          </div>
          <div>
            <strong>Seats:</strong> {seats && seats.join(", ")}
          </div>
        </div>

        <div className="actions">
          <button className="btn" onClick={onClose}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={() => alert("Show/Print ticket: " + ticketId)}
          >
            View Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
