import { useState } from "react";
import { useNavigate } from "react-router";

export default function ManageBooking() {
  const [confirmation, setConfirmation] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <h3>Manage Booking</h3>

      <p>Enter your confirmation code to view your ticket.</p>

      <div className="field">
        <div className="child-field">
          <label>CONFIRMATION CODE</label>

          <input
            type="text"
            maxLength="6"
            placeholder="ABC123"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value.toUpperCase())}
          />
        </div>
      </div>

      <button
        className={
          confirmation.length === 6 ? "ticket-button active" : "ticket-button"
        }
        disabled={confirmation.length !== 6}
        onClick={() => navigate("/ticket", { state: { confirmation } })}
      >
        View My Ticket
      </button>
    </>
  );
}
