import { useState } from "react";
import { useNavigate } from "react-router";

import "../styles/ticketview.css";

import PassengerBookingCard from "../components/ticket/PassengerBookingCard";
import ETicketModal from "../components/ticket/ETicketModal";
import leftArrow from "../assets/ic_arrow_left.png";

export default function TicketView() {
  const navigate = useNavigate();

  const [selectedPassenger, setSelectedPassenger] = useState(null);

  const passengers = [
    {
      id: 1,
      name: "Saint Tria Tangpos",
      fare: 200,
      destination: "Oslob",
      departure: "6:00 AM",
      date: "July 25, 2026",
      bus: "Bus 204 - Aircon Express",
      bookingId: "CSB-8A72F1",
    },
    {
      id: 2,
      name: "Irish Jean Manubag",
      fare: 200,
      destination: "Oslob",
      departure: "6:00 AM",
      date: "July 25, 2026",
      bus: "Bus 204 - Aircon Express",
      bookingId: "CSB-8A72F2",
    },
    {
      id: 3,
      name: "Andrew Sangasina",
      fare: 100,
      destination: "Oslob",
      departure: "6:00 AM",
      date: "July 25, 2026",
      bus: "Bus 204 - Aircon Express",
      bookingId: "CSB-8A72F3",
    },
  ];

  const totalFare = passengers.reduce((sum, p) => sum + p.fare, 0);

  const handleViewTicket = (passenger) => {
    setSelectedPassenger(passenger);
  };

  const closeTicket = () => {
    setSelectedPassenger(null);
  };

  return (
      <div className="ticket-page">
        <section className="ticket-hero">
          <div className="ticket-hero-content">
            <div className="ticket-hero-left">
              <button className="back-button-ticket" onClick={() => navigate("/")}>
                <img src={leftArrow} alt="Back" />
                Back to Manage Booking
              </button>

              <h1>MSK2S4</h1>

              <p>
                Booking Reference
              </p>
            </div>

            <div className="ticket-hero-right">
              <span>Total Fare</span>
              <h2>₱{totalFare}</h2>
              <p>{passengers.length} Passengers</p>
            </div>
          </div>
        </section>

        <main className="ticket-content">

          <section className="summary-card">

            <div>
              <span>FROM</span>
              <h3>Cebu South Bus Terminal</h3>
            </div>

            <div className="summary-arrow">
              →
            </div>

            <div>
              <span>TO</span>
              <h3>Oslob</h3>
            </div>

            <div>
              <span>DATE</span>
              <h3>July 25, 2026</h3>
            </div>

            <div>
              <span>DEPARTURE</span>
              <h3>6:00 AM</h3>
            </div>

            <div>
              <span>BUS</span>
              <h3>{passengers[0].bus}</h3>
            </div>

          </section>

          <section className="passenger-section">

            <div className="passenger-header">
              <div>
                <h2>Passengers</h2>
                <p>
                  Every passenger has their own E-Ticket.
                </p>
              </div>

              <span className="passenger-count">
              {passengers.length} Passenger
                {passengers.length > 1 ? "s" : ""}
            </span>

            </div>

            <div className="passenger-list">

              {passengers.map((passenger, index) => (

                  <PassengerBookingCard
                      key={passenger.id}
                      passenger={passenger}
                      number={index + 1}
                      onViewTicket={handleViewTicket}
                  />

              ))}

            </div>

          </section>

        </main>

        {selectedPassenger && (

            <ETicketModal
                passenger={selectedPassenger}
                onClose={closeTicket}
            />

        )}
      </div>
  );
}