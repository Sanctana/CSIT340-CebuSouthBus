import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import PassengerList from "../components/review/PassengerList";
import { formatFullName } from "../utils/utilities";
import "../styles/review.css";
import "../styles/confirmation.css";
import { bookTicket } from "../api/book";
import leftArrow from "../assets/ic_arrow_left.png";
import rightArrow from "../assets/ic_arrow_right_white.png";
import { formatTime } from "../utils/utilities";

const paymentOptions = [
  { value: "gcash", label: "GCash" },
  { value: "maya", label: "Maya" },
];

const paymentLabels = {
  gcash: "GCash",
  maya: "Maya",
  cash: "Cash at Terminal",
};

const randomDigits = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
};

export default function Review() {
  const location = useLocation();
  const navigate = useNavigate();

  const { bus, date, passengerCount, contact, passengers, totalFare } =
    location.state ?? {};

  const [paymentMethod, setPaymentMethod] = useState("gcash");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentPhone, setPaymentPhone] = useState("");
  const [priorityNumber, setPriorityNumber] = useState("");
  const [cashierNumber, setCashierNumber] = useState("");

  // Arrived here directly (e.g. refresh, back button gone too far) with no
  // booking in progress — nothing to review.
  if (!bus || !contact || !passengers || !date) {
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

  // TODO: Handle duplicated requests when user clicks "Confirm & Pay" multiple times before the first request completes.
  // This can be done by disabling the button after the first click and showing a loading indicator.
  const submitBooking = async () => {
    bookTicket({
      busScheduleId: bus.id,
      passengerContact: contact,
      passengers,
      paymentMethod,
      date,
    })
      .then((data) => {
        // TODO: When an endpoint for fetching ticket has been created,
        // remove the redundant data being passed from `Review.jsx` to `Confirmation.jsx`
        // and use the endpoint to fetch the complete ticket data in `Confirmation.jsx` instead.
        navigate("/confirmation", {
          state: {
            bus,
            passengerCount: effectivePassengerCount,
            contact,
            passengers,
            totalFare,
            paymentMethod,
            confirmationCode: data.confirmationCode,
          },
        });
      })
      .catch((error) => {
        console.error("Error booking ticket:", error);
        alert("An error occurred while booking the ticket. Please try again.");
      });
  };

  const openPaymentModal = () => {
    if (paymentMethod === "cash") {
      setPriorityNumber(`P-${randomDigits(3)}`);
      setCashierNumber(`Cashier ${Math.floor(Math.random() * 6) + 1}`);
    } else {
      setPaymentPhone("");
    }
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handlePaymentConfirm = () => {
    setShowPaymentModal(false);
    submitBooking();
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
              <p>South Bus Terminal → {bus.route.destination}</p>
            </div>
            <div>
              <span className="review-label">Travel Date</span>
              <p>{date || "Not specified"}</p>
            </div>
            <div>
              <span className="review-label">Departure</span>
              <p>{formatTime(bus.departureTime)}</p>
            </div>
            <div>
              <span className="review-label">Amount</span>
              <p>
                ₱{bus.isAircon ? bus.route.maxFare : bus.route.minFare} /
                passenger
              </p>
            </div>
            <div>
              <span className="review-label">Operator</span>
              <p>
                {bus.busOperator} {bus.busNumber}
              </p>
            </div>
            <div>
              <span className="review-label">Bus Type</span>
              <p>{bus.isAircon ? "Aircon" : "Non-Aircon"}</p>
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
          <button className="back-button-pd" onClick={handleEdit}>
            <img src={leftArrow} alt="Back" />
            Back
          </button>
          <button className="continue-btn" onClick={openPaymentModal}>
            Continue
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>

      {showPaymentModal && (
        <div
          className="payment-modal-overlay"
          onClick={closePaymentModal}
          role="presentation"
        >
          <div
            className="payment-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="payment-modal-title">
              Confirm {paymentLabels[paymentMethod] ?? paymentMethod} Number
            </h2>
            <p className="payment-modal-note">
              Enter the mobile number linked to your{" "}
              {paymentLabels[paymentMethod] ?? paymentMethod} account. A payment
              request will be sent there.
            </p>

            <div className="payment-modal-field">
              <label htmlFor="payment-phone">Mobile Number</label>
              <input
                id="payment-phone"
                type="tel"
                placeholder="09171234567"
                maxLength={11}
                value={paymentPhone}
                onChange={(e) =>
                  setPaymentPhone(e.target.value.replace(/\D/g, ""))
                }
              />
            </div>

            <div className="payment-modal-actions">
              <button
                className="payment-modal-cancel"
                onClick={closePaymentModal}
              >
                Cancel
              </button>
              <button
                className="payment-modal-confirm"
                onClick={handlePaymentConfirm}
              >
                {paymentMethod === "cash"
                  ? "Got It, Continue →"
                  : "Confirm & Pay"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
