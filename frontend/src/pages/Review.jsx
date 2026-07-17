import React, { useState } from "react";
import BookingSummary from "../components/BookingSummary";
import ConfirmationMessage from "../components/ConfirmationMessage";
import ReviewActions from "../components/ReviewActions";
import TripReview from "../components/TripReview";

export default function Review() {
  const [confirmed, setConfirmed] = useState(false);
  const [booking, setBooking] = useState({
    route: "Cebu City → Talisay",
    date: "2026-07-20",
    time: "09:30",
    seats: ["A1", "A2"],
    passenger: { name: "Juan Dela Cruz", contact: "09171234567" },
    farePerSeat: 120.0,
    ticketId: null,
  });

  function handleConfirm() {
    const ticketId = "CSB" + Math.floor(Math.random() * 900000 + 100000);
    setBooking({ ...booking, ticketId });
    setConfirmed(true);
  }

  function handleEdit() {
    setConfirmed(false);
  }

  return (
    <div className="review-page">
      <div className="review-grid">
        <TripReview booking={booking} />
        <BookingSummary booking={booking} />
      </div>

      <ReviewActions onConfirm={handleConfirm} onEdit={handleEdit} />

      {confirmed && (
        <ConfirmationMessage
          booking={booking}
          onClose={() => setConfirmed(false)}
        />
      )}
    </div>
  );
}
