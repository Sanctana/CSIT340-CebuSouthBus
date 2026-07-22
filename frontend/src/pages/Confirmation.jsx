import { useLocation, useNavigate } from "react-router";
import PassengerList from "../components/review/PassengerList";
import { formatFullName } from "../utils/utilities";
import "../styles/review.css";
import "../styles/confirmation.css";
import { formatTime } from "../utils/utilities";

const paymentLabels = {
  gcash: "GCash",
  maya: "Maya",
  cash: "Cash at Terminal",
};

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    bus,
    passengerCount,
    contact,
    passengers,
    totalFare,
    paymentMethod,
    confirmationCode,
  } = location.state ?? {};

    // Visited directly with no booking behind it.
  if (!bus || !confirmationCode) {
    return (
      <div className="confirmation-page">
        <div className="confirmation-empty">
          <h1>No booking found</h1>
          <p>
            We couldn't find a confirmed booking to show. If you already have a
            confirmation code, use "Manage Booking" on the homepage to look it
            up.
          </p>
          <button className="primary-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <div className="confirmation-hero">
        <div className="success-badge">✓</div>
        <h1>Booking Confirmed!</h1>
        <p>
          Your tickets are booked. We've sent a copy of your e-ticket to{" "}
          <strong>{contact.email}</strong>.
        </p>

        <div className="confirmation-code-box">
          <span className="code-label">Confirmation Code</span>
          <span className="code-value">{confirmationCode}</span>
        </div>
      </div>

      <div className="confirmation-main">
        <section className="review-card">
          <h2>Trip Details</h2>
          <div className="review-grid">
            <div>
              <span className="review-label">Route</span>
              <p>South Bus Terminal → {bus.route.destination}</p>
            </div>
            <div>
              <span className="review-label">Departure</span>
              <p>{formatTime(bus.departureTime)}</p>
            </div>
            <div>
              <span className="review-label">Operator</span>
              <p>{bus.busOperator}</p>
            </div>
          </div>
          <p className="payment-summary">
            Total for {passengerCount} passenger
            {passengerCount === 1 ? "" : "s"}: <strong>₱{totalFare}</strong>
          </p>
        </section>

        <section className="review-card">
          <h2>Contact Information</h2>
          <div className="review-grid">
            <div>
              <span className="review-label">Full Name</span>
              <p>{formatFullName(contact)}</p>
            </div>
            <div>
              <span className="review-label">Email</span>
              <p>{contact.email}</p>
            </div>
            <div>
              <span className="review-label">Mobile Number</span>
              <p>{contact.mobile}</p>
            </div>
          </div>
        </section>

        <section className="review-card">
          <h2>
            Passenger{passengers.length > 1 ? "s" : ""} ({passengers.length})
          </h2>
          <PassengerList passengers={passengers} />
        </section>

        <section className="review-card">
          <h2>Payment</h2>
          <p className="payment-summary">
            Paid via{" "}
            <strong>{paymentLabels[paymentMethod] ?? paymentMethod}</strong>
          </p>
        </section>

        <div className="confirmation-notes">
          <h3>Before you travel</h3>
          <ul>
            <li>Arrive at least 30 minutes before departure.</li>
            <li>Bring a valid ID matching the passenger names above.</li>
            <li>Show this confirmation code at the terminal counter.</li>
          </ul>
        </div>

        <div className="confirmation-actions">
          <button className="back-btn" onClick={() => window.print()}>
            🖨️ Print Ticket
          </button>
          <button className="continue-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
