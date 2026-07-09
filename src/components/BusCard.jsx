import "../styles/schedule.css";

export default function BusCard({ bus }) {
  const {
    operator,
    busNumber,
    acType,
    origin,
    destination,
    departureTime,
    arrivalTime,
    durationLabel,
    seatsAvailable,
    terminal,
    price,
  } = bus;

  const isLowSeats = seatsAvailable <= 10;

  return (
    <div className="bus-card">
      <div className="bus-card-top">
        <div className="operator">
          <h3>{operator}</h3>
          <span className="bus-number">Bus {busNumber}</span>
        </div>
        <span
          className={`type-badge ${
            acType === "Aircon" ? "aircon" : "non-aircon"
          }`}
        >
          {acType === "Aircon" ? "❄️ Aircon" : "🌬️ Non-Aircon"}
        </span>
      </div>

      <div className="bus-card-route">
        <div className="stop">
          <p className="time">{departureTime}</p>
          <p className="place">{origin}</p>
        </div>

        <div className="route-line">
          <span className="duration">{durationLabel}</span>
          <div className="line">
            <span className="dot start"></span>
            <span className="dot end"></span>
          </div>
        </div>

        <div className="stop align-end">
          <p className="time">{arrivalTime}</p>
          <p className="place">{destination}</p>
        </div>
      </div>

      <div className="bus-card-bottom">
        <div className="details">
          <span className={isLowSeats ? "seats low" : "seats"}>
            🪑 {seatsAvailable} seat{seatsAvailable === 1 ? "" : "s"} left
          </span>
          <span className="terminal">📍 {terminal}</span>
        </div>

        <div className="price-book">
          <div className="price-wrap">
            <span className="price-label">Fare</span>
            <p className="price">₱{price}</p>
          </div>
          <button className="select-btn">Select Bus</button>
        </div>
      </div>
    </div>
  );
}
