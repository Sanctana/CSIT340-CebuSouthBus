import { useState } from "react";
import { useNavigate } from "react-router";
import { formatTime } from "../../utils/utilities";

export default function BusSelectionConfirmation({
  destination,
  passengerCount,
  pendingBus,
  date,
  setPendingBus,
}) {
  const navigate = useNavigate();

  const closeConfirm = () => {
    setPendingBus(null);
  };

  const confirmSelectBus = () => {
    if (!pendingBus) return;
    navigate("/passenger-details", {
      state: { bus: pendingBus, date, passengerCount },
    });
  };

  return (
    <div
      className="confirm-modal-overlay"
      onClick={closeConfirm}
      role="presentation"
    >
      <div
        className="confirm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="confirm-modal-title">Confirm Your Selection</h2>

        <div className="confirm-modal-details">
          <div>
            <span className="review-label">Route</span>
            <p>Cebu City → {destination || pendingBus.route?.destination}</p>
          </div>
          <div>
            <span className="review-label">Departure</span>
            <p>{formatTime(pendingBus.departureTime)}</p>
          </div>
          <div>
            <span className="review-label">Operator</span>
            <p>{pendingBus.busOperator}</p>
          </div>
          <div>
            <span className="review-label">Bus Type</span>
            <p>{pendingBus.isAircon ? "Aircon" : "Non-Aircon"}</p>
          </div>
          <div>
            <span className="review-label">Fare</span>
            <p>
              ₱
              {pendingBus.isAircon
                ? pendingBus.route.maxFare
                : pendingBus.route.minFare}{" "}
              per passenger
            </p>
          </div>
        </div>

        <p className="confirm-modal-note">
          You're about to book this bus for {passengerCount} passenger
          {passengerCount === 1 ? "" : "s"}. Continue to passenger details?
        </p>

        <div className="confirm-modal-actions">
          <button className="confirm-btn-cancel" onClick={closeConfirm}>
            Cancel
          </button>
          <button className="confirm-btn-confirm" onClick={confirmSelectBus}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
