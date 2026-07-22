import "../../styles/eticketbutton.css";

export default function ETicketButton({ onClick }) {
    return (
        <button
            className="eticket-button"
            onClick={onClick}
        >
            View E-Ticket
        </button>
    );
}