import "../../styles/busform.css";
import Book from "./Book";
import ManageBooking from "./ManageBooking.jsx";
import "/src/assets/ic_buslogo.png";
import { useState } from "react";

export default function BusForm() {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div className="booking-form">
      <div className="tabs">
        <button
          className={activeTab === "book" ? "active" : "inactive"}
          disabled={activeTab === "book"}
          onClick={() => setActiveTab("book")}
        >
          Book a Ticket
        </button>

        <button
          className={activeTab === "manage" ? "active" : "inactive"}
          disabled={activeTab === "manage"}
          onClick={() => setActiveTab("manage")}
        >
          Manage Booking
        </button>
      </div>

      {activeTab === "book" ? <Book /> : <ManageBooking />}

      <footer className="booking-footer">
        {activeTab === "manage" && (
          <button onClick={() => setActiveTab("book")}>
            ← Back to Book a Ticket
          </button>
        )}

        <span>Need help? 0917-123-4567</span>
      </footer>
    </div>
  );
}
