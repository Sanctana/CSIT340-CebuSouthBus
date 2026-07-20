import "../../styles/busschedule.css";
import { formatMinutes, formatTime } from "../../utils/utilities";

export default function BusCard({ bus, onSelect }) {
  const {
    busOperator,
    busNumber,
    isAircon,
    destination,
    departureTime,
    arrivalTime,
    capacity,
    route,
  } = bus;

  const isLowSeats = capacity <= 10;

  return (
    <div className="bus-card">
      <div className="bus-card-top">
        <div className="operator">
          <h3>{busOperator}</h3>
          <span className="bus-number">Bus {busNumber}</span>
        </div>
        <span className={`type-badge ${isAircon ? "aircon" : "non-aircon"}`}>
          {isAircon ? "️Aircon" : "Non-Aircon"}
        </span>
      </div>

      <div className="bus-card-route">
        <div className="stop">
          <p className="time">{formatTime(departureTime)}</p>
          <p className="place">Cebu City</p>
        </div>

        <div className="route-line">
          <span className="duration">{formatMinutes(route.maxDuration)}</span>
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
            {capacity} seat{capacity === 1 ? "" : "s"} left
          </span>
          <span className="terminal">South Bus Terminal</span>
        </div>

        <div className="price-book">
          <div className="price-wrap">
            <span className="price-label">Fare</span>
            <p className="price">₱{isAircon ? route.maxFare : route.minFare}</p>
          </div>
          <button className="select-btn" onClick={() => onSelect?.(bus)}>
            Select Bus
          </button>
        </div>
      </div>
    </div>
  );
}
