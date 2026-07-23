import { useEffect } from "react";
import "../../styles/eticketmodal.css";
import QrCode from "../../assets/ic_qr.png";
import { formatTime } from "../../utils/utilities";
import ModalCloseButton from "../../components/commons/ModalCloseButton";

export default function ETicketModal({ passenger, onClose, ticket }) {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="ticket-modal" onClick={(e) => e.stopPropagation()}>

        <div className="ticket-header">
          <div className="ticket-header-left">
            <div className="ticket-brand">Cebu South Bus</div>
            <span className="ticket-title">E-TICKET</span>
          </div>

          <ModalCloseButton onClick={onClose} />

        </div>

        <div className="route-section">
          <div className="route-item">
            <span className="label">FROM</span>

            <h3>Cebu South Bus Terminal</h3>
          </div>

          <div className="route-line">
            <div className="line"></div>

            <div className="line"></div>

            <div className="circle destination"></div>
          </div>

          <div className="route-item">
            <span className="label">TO</span>

            <h3>{ticket.busSchedule.route.destination}</h3>
          </div>
        </div>

        <div className="ticket-body">
          <div className="ticket-row">
            <div>
              <span className="label">Passenger</span>

              <h4>
                {passenger.firstName}{" "}
                {passenger.middleName ? `${passenger.middleName} ` : ""}{" "}
                {passenger.lastName}
              </h4>
            </div>
          </div>

          <div className="ticket-row">
            <div>
              <span className="label">Date</span>

              <h4>{ticket.date}</h4>
            </div>

            <div>
              <span className="label">Departure</span>

              <h4>{formatTime(ticket.busSchedule.departureTime)}</h4>
            </div>
          </div>

          <div className="ticket-row">
            <div>
              <span className="label">Bus</span>

              <h4>
                Bus {ticket.busSchedule.id} - {ticket.busSchedule.busOperator}
              </h4>
            </div>

            <div>
              <span className="label">Fare</span>

              <h4 className="fare">
                ₱
                {ticket.busSchedule.isAircon
                  ? ticket.busSchedule.route.maxFare
                  : ticket.busSchedule.route.minFare}
              </h4>
            </div>
          </div>
        </div>

        <div className="qr-section">
          <img src={QrCode} alt="QR Code" />

          <p>Present this QR code upon boarding.</p>

          <span className="booking-id">{ticket.uid}</span>
        </div>
      </div>
    </div>
  );
}
