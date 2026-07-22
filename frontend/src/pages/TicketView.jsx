import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "../styles/ticketview.css";
import { getTicket } from "../api/ticket";
import leftArrow from "../assets/ic_arrow_left.png";
import ETicketModal from "../components/ticket/ETicketModal";
import PassengerBookingCard from "../components/ticket/PassengerBookingCard";
import { formatTime } from "../utils/utilities";

export default function TicketView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [ticket, setTicket] = useState();

  const confirmationCode = location.state?.confirmation;

  useEffect(() => {
    if (!confirmationCode) return;

    getTicket(confirmationCode)
      .then(setTicket)
      .catch((error) => {
        console.error("Error fetching ticket:", error);
        navigate("/"); // Redirect to home if there's an error
      });
  }, [confirmationCode, navigate]);

  if (!confirmationCode) {
    return (
      <div className="ticket-page">
        <h2>No confirmation code provided.</h2>
        <button className="back-button-ticket" onClick={() => navigate("/")}>
          <img src={leftArrow} alt="Back" />
          Back to Manage Booking
        </button>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="ticket-page">
        <h2>Loading ticket details...</h2>
      </div>
    );
  }

  const totalFare = ticket.passengers.reduce((sum, p) => {
    const fare = ticket.busSchedule.isAircon
      ? ticket.busSchedule.route.maxFare
      : ticket.busSchedule.route.minFare;

    return sum + fare;
  }, 0);

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
            <button
              className="back-button-ticket"
              onClick={() => navigate("/")}
            >
              <img src={leftArrow} alt="Back" />
              Back to Manage Booking
            </button>

            <h1>{confirmationCode}</h1>

            <p>Booking Reference</p>
          </div>

          <div className="ticket-hero-right">
            <span>Total Fare</span>
            <h2>₱{totalFare}</h2>
            <p>
              {ticket.passengers.length} Passenger
              {ticket.passengers.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </section>

      <main className="ticket-content">
        <section className="summary-card">
          <div>
            <span>FROM</span>
            <h3>Cebu South Bus Terminal</h3>
          </div>

          <div className="summary-arrow">→</div>

          <div>
            <span>TO</span>
            <h3>{ticket.busSchedule.route.destination}</h3>
          </div>

          <div>
            <span>DATE</span>
            <h3>{ticket.date}</h3>
          </div>

          <div>
            <span>DEPARTURE</span>
            <h3>{formatTime(ticket.busSchedule.departureTime)}</h3>
          </div>

          <div>
            <span>BUS</span>
            <h3>
              Bus {ticket.busSchedule.id} - {ticket.busSchedule.busOperator}
            </h3>
          </div>
        </section>

        <section className="passenger-section">
          <div className="passenger-header">
            <div>
              <h2>Passengers</h2>
              <p>Every passenger has their own E-Ticket.</p>
            </div>

            <span className="passenger-count">
              {ticket.passengers.length} Passenger
              {ticket.passengers.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="passenger-list">
            {ticket.passengers.map((passenger, index) => (
              <PassengerBookingCard
                key={passenger.id}
                passenger={passenger}
                number={index + 1}
                onViewTicket={handleViewTicket}
                ticket={ticket}
              />
            ))}
          </div>
        </section>
      </main>

      {selectedPassenger && (
        <ETicketModal
          passenger={selectedPassenger}
          onClose={closeTicket}
          ticket={ticket}
        />
      )}
    </div>
  );
}
