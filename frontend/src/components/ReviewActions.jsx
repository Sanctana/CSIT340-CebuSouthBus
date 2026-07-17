import React from "react";

export default function ReviewActions({ onConfirm, onEdit }) {
  return (
    <div className="review-actions">
      <button className="btn btn-outline" onClick={onEdit}>
        Edit
      </button>

      <button className="btn btn-primary" onClick={onConfirm}>
        Confirm Booking
      </button>
    </div>
  );
}
