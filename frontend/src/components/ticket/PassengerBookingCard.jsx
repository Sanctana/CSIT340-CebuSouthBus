import "../../styles/passengerbookingcard.css";
import ETicketButton from "./ETicketButton";

export default function PassengerBookingCard({
  passenger,
  number,
  onViewTicket,
  ticket,
}) {
  return (
    <div className="passenger-card">
      <div className="passenger-left">
        <div className="passenger-number">{number}</div>

        <div className="passenger-info">
          <h3>
            {passenger.firstName}{" "}
            {passenger.middleName ? `${passenger.middleName} ` : ""}
            {passenger.lastName}
          </h3>

          <div className="passenger-meta">
            <span className="fare">
              ₱
              {ticket.busSchedule.isAircon
                ? ticket.busSchedule.route.maxFare
                : ticket.busSchedule.route.minFare}
            </span>
          </div>
        </div>
      </div>

      <div className="passenger-action">
        <ETicketButton onClick={() => onViewTicket(passenger)} />
      </div>
    </div>
  );
}
