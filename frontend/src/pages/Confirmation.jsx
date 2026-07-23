import { useLocation, useNavigate } from "react-router";
import PassengerList from "../components/review/PassengerList";
import { formatFullName } from "../utils/utilities";
import "../styles/review.css";
import "../styles/confirmation.css";
import { formatTime } from "../utils/utilities";

const paymentLabels = {
  gcash: "GCash",
  maya: "Maya",
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

          <h2>Trip Summary</h2>

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

            <div>
              <span className="review-label">Passengers</span>
              <p>{passengerCount}</p>
            </div>

            <div>
              <span className="review-label">Payment</span>
              <p>{paymentLabels[paymentMethod]}</p>
            </div>

            <div>
              <span className="review-label">Total Paid</span>
              <p>₱{totalFare}</p>
            </div>

          </div>

        </section>

        <section className="review-card">
          <h2>
            Passenger{passengers.length > 1 ? "s" : ""} ({passengers.length})
          </h2>
          <PassengerList passengers={passengers} />
        </section>

        <section className="review-card confirmation-notes">
          <h3>Before you travel</h3>
          <ul>
            <li>Arrive at least 30 minutes before departure.</li>
            <li>Bring a valid ID matching the passenger names above.</li>
            <li>Show this confirmation code at the terminal counter.</li>
          </ul>
        </section>

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
