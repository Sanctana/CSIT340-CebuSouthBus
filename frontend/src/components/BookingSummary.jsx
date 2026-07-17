import React from 'react';

export default function BookingSummary({ booking = {} }) {
  const { seats = [], farePerSeat = 0 } = booking;
  const subtotal = seats.length * farePerSeat;
  const taxes = +(subtotal * 0.12).toFixed(2);
  const total = +(subtotal + taxes).toFixed(2);

  return (
    <aside className="booking-summary card">
      <h2>Booking Summary</h2>

      <div className="summary-row">
        <span>Seats</span>
        <span>{seats.length}</span>
      </div>

      <div className="summary-row">
        <span>Fare per seat</span>
        <span>₱{farePerSeat.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₱{subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-row muted small">
        <span>Taxes & fees</span>
        <span>₱{taxes.toFixed(2)}</span>
      </div>

      <div className="summary-row total">
        <strong>Total</strong>
        <strong>₱{total.toFixed(2)}</strong>
      </div>
    </aside>
  );
}
  