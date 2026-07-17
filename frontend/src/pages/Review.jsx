import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "../styles/review.css";

const paymentOptions = [
    { value: "gcash", label: "GCash" },
    { value: "maya", label: "Maya" },
    { value: "cash", label: "Cash at Terminal" },
];

function generateConfirmationCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

export default function Review() {
    const location = useLocation();
    const navigate = useNavigate();

    const { bus, date, passengerCount, contact, passengers, totalFare } =
    location.state ?? {};

    const [paymentMethod, setPaymentMethod] = useState("");
    const [error, setError] = useState("");

    // Nothing to review — most likely the page was visited directly.
    if (!bus || !contact || !passengers) {
        return (
            <div className="review-page">
                <div className="review-empty">
                    <h1>Nothing to review yet</h1>
                    <p>
                        We couldn't find any booking details. Start by searching for a
                        bus and filling in your passenger details.
                    </p>
                    <button className="primary-btn" onClick={() => navigate("/")}>
                        Book a Ticket
                    </button>
                </div>
            </div>
        );
    }

    const handleConfirm = () => {
        if (!paymentMethod) {
            setError("Please select a payment method to continue.");
            return;
        }

        const confirmationCode = generateConfirmationCode();

        navigate("/confirmation", {
            state: {
                bus,
                date,
                passengerCount,
                contact,
                passengers,
                totalFare,
                paymentMethod,
                confirmationCode,
            },
        });
    };

    return (
        <div className="review-page">
            <div className="review-steps">
                <span className="step done">1. Select Bus</span>
                <span className="step done">2. Passenger Details</span>
                <span className="step active">3. Review</span>
                <span className="step">4. Confirmation</span>
            </div>

            <div className="review-main">
                <h1>Review Your Booking</h1>
                <p className="subtitle">
                    Double check everything below before you confirm.
                </p>

                <section className="review-card">
                    <div className="review-card-header">
                        <h2>Contact Information</h2>
                        <button className="edit-link" onClick={() => navigate(-1)}>
                            Edit
                        </button>
                    </div>

                    <div className="review-grid">
                        <div>
                            <span className="review-label">Full Name</span>
                            <p>{contact.fullName}</p>
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
                    <div className="review-card-header">
                        <h2>
                            Passenger{passengers.length > 1 ? "s" : ""} ({passengers.length})
                        </h2>
                        <button className="edit-link" onClick={() => navigate(-1)}>
                            Edit
                        </button>
                    </div>

                    <div className="passenger-list">
                        {passengers.map((p, i) => (
                            <div className="passenger-row" key={i}>
                                <span className="passenger-index">{i + 1}</span>
                                <div className="passenger-info">
                                    <p className="passenger-name">{p.fullName}</p>
                                    <p className="passenger-meta">
                                        {p.age} yrs old • {p.gender}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="review-card">
                    <h2>Payment Method</h2>
                    <p className="hint">Choose how you'd like to pay for this trip.</p>

                    <div className="payment-options">
                        {paymentOptions.map((option) => (
                            <label
                                key={option.value}
                                className={
                                    paymentMethod === option.value
                                        ? "payment-option selected"
                                        : "payment-option"
                                }
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value={option.value}
                                    checked={paymentMethod === option.value}
                                    onChange={(e) => {
                                        setPaymentMethod(e.target.value);
                                        setError("");
                                    }}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>

                    {error && <span className="error-text">{error}</span>}
                </section>

                <section className="review-card">
                    <h2>Trip &amp; Fare Summary</h2>
                    <div className="review-grid">
                        <div>
                            <span className="review-label">Route</span>
                            <p>
                                {bus.origin} → {bus.destination}
                            </p>
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
                        Total for {passengerCount} passenger{passengerCount === 1 ? "" : "s"}:{" "}
                        <strong>₱{totalFare}</strong>
                    </p>
                </section>

                <div className="review-actions">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        ← Back
                    </button>
                    <button className="continue-btn" onClick={handleConfirm}>
                        Confirm & Book →
                    </button>
                </div>
            </div>
        </div>
    );
}