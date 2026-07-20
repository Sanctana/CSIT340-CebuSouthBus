import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import PassengerList from "../components/review/PassengerList";
import { formatFullName } from "../utils/utilities";
import "../styles/review.css";
import "../styles/confirmation.css";

const paymentOptions = [
  { value: "gcash", label: "GCash" },
  { value: "maya", label: "Maya" },
  { value: "cash", label: "Cash at Terminal" },
];

export default function Review() {
  const location = useLocation();
  const navigate = useNavigate();

  const { bus, date, passengerCount, contact, passengers, totalFare } =
    location.state ?? {};

  const [paymentMethod, setPaymentMethod] = useState("gcash");

  // Arrived here directly (e.g. refresh, back button gone too far) with no
  // booking in progress — nothing to review.
  if (!bus || !contact || !passengers) {
    return (
      <div className="confirmation-page">
        <div className="confirmation-empty">
          <h1>No booking to review</h1>
          <p>
            We couldn't find any trip details to review. Please start a new
            search to book a ticket.
          </p>
          <button className="primary-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const effectivePassengerCount = passengerCount ?? passengers.length;

  const handleConfirm = () => {
    const confirmationCode =
      "CSB" + Math.floor(100000 + Math.random() * 900000);

    navigate("/confirmation", {
      state: {
        bus,
        passengerCount: effectivePassengerCount,
        contact,
        passengers,
        totalFare,
        paymentMethod,
        confirmationCode,
      },
    });
  };

  const handleEdit = () => {
    navigate(-1);
  };

  return (
    <div className="review-page">
      <div className="passenger-steps">
        <span className="step done">1. Select Bus</span>
        <span className="step done">2. Passenger Details</span>
        <span className="step active">3. Review</span>
        <span className="step">4. Confirmation</span>
      </div>

      <div className="confirmation-main">
        <section className="review-card">
          <h2>Trip Details</h2>
          <div className="review-grid">
            <div>
              <span className="review-label">Route</span>
              <p>
                {bus.origin} → {bus.destination}
              </p>
            </div>
            <div>
              <span className="review-label">Travel Date</span>
              <p>{date || "Not specified"}</p>
            </div>
            <div>
              <span className="review-label">Departure</span>
              <p>{bus.departureTime}</p>
            </div>
            <div>
              <span className="review-label">Operator</span>
              <p>
                {bus.operator} {bus.busNumber}
              </p>
            </div>
          </div>
          <p className="payment-summary">
            Total for {effectivePassengerCount} passenger
            {effectivePassengerCount === 1 ? "" : "s"}:{" "}
            <strong>₱{totalFare}</strong>
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
          <h2>Payment Method</h2>
          <div className="payment-options">
            {paymentOptions.map((option) => (
              <label key={option.value} className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option.value}
                  checked={paymentMethod === option.value}
                  onChange={() => setPaymentMethod(option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </section>

        <div className="confirmation-actions">
          <button className="back-btn" onClick={handleEdit}>
            ← Edit Details
          </button>
          <button className="continue-btn" onClick={handleConfirm}>
            Confirm &amp; Pay →
          </button>
        </div>
      </div>
    </div>
  );
}
