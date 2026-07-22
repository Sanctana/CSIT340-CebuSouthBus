import "../../styles/passengerbookingcard.css";
import ETicketButton from "./ETicketButton";

export default function PassengerBookingCard({
  passenger,
  number,
  onViewTicket,
}) {
  return (
    <div className="passenger-card">
      <div className="passenger-left">
        <div className="passenger-number">{number}</div>

        <div className="passenger-info">
          <h3>{passenger.name}</h3>

          <div className="passenger-meta">
            <span className="fare">₱{passenger.fare}</span>
          </div>
        </div>
      </div>

      <div className="passenger-action">
        <ETicketButton onClick={() => onViewTicket(passenger)} />
      </div>
    </div>
  );
}
