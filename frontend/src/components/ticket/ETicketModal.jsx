import { useEffect } from "react";
import "../../styles/eticketmodal.css";
import QrCode from "../../assets/ic_qr.png";

export default function ETicketModal({ passenger, onClose }) {

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
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="ticket-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="ticket-header">

                    <div className="ticket-brand">
                        Cebu South Bus
                    </div>

                    <span className="ticket-title">
                        E-TICKET
                    </span>

                </div>


                <div className="route-section">

                    <div className="route-item">
                        <span className="label">
                            FROM
                        </span>

                        <h3>
                            Cebu South Bus Terminal
                        </h3>
                    </div>


                    <div className="route-line">

                        <div className="line"></div>

                        <div className="line"></div>

                        <div className="circle destination"></div>

                    </div>


                    <div className="route-item">

                        <span className="label">
                            TO
                        </span>

                        <h3>
                            {passenger.destination}
                        </h3>

                    </div>

                </div>


                <div className="ticket-body">

                    <div className="ticket-row">

                        <div>

                            <span className="label">
                                Passenger
                            </span>

                            <h4>
                                {passenger.name}
                            </h4>

                        </div>

                    </div>


                    <div className="ticket-row">

                        <div>

                            <span className="label">
                                Date
                            </span>

                            <h4>
                                {passenger.date}
                            </h4>

                        </div>


                        <div>

                            <span className="label">
                                Departure
                            </span>

                            <h4>
                                {passenger.departure}
                            </h4>

                        </div>

                    </div>


                    <div className="ticket-row">

                        <div>

                            <span className="label">
                                Bus
                            </span>

                            <h4>
                                {passenger.bus}
                            </h4>

                        </div>


                        <div>

                            <span className="label">
                                Fare
                            </span>

                            <h4 className="fare">
                                ₱{passenger.fare}
                            </h4>

                        </div>

                    </div>

                </div>


                <div className="qr-section">

                    <img
                        src={QrCode}
                        alt="QR Code"
                    />

                    <p>
                        Present this QR code upon boarding.
                    </p>

                    <span className="booking-id">
                        {passenger.bookingId}
                    </span>

                </div>

            </div>

        </div>
    );
}