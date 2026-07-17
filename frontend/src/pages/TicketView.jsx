import { useSearchParams, useNavigate } from "react-router";
import "../styles/confirmation.css";

export default function TicketView() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const code = searchParams.get("code") ?? "";

    return (
        <div className="confirmation-page">
            <div className="confirmation-empty">
                <h1>Ticket Lookup</h1>
                <p>
                    Looking up confirmation code <strong>{code || "—"}</strong>
                </p>
                <p>
                    {/* TODO(backend): fetch the booking for this confirmation code
              and render it the same way Confirmation.jsx does. */}
                    Ticket lookup isn't connected to a booking source yet. Once bookings
                    are stored somewhere (API, database, etc.), fetch by{" "}
                    <code>code</code> here and show the ticket details.
                </p>
                <button className="primary-btn" onClick={() => navigate("/")}>
                    Back to Home
                </button>
            </div>
        </div>
    );
}