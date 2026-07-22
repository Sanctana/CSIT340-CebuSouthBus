import { useEffect, useMemo, useState } from "react";
import BusCard from "../components/schedule/BusCard";
import "../styles/busschedule.css";
import { useNavigate, useSearchParams } from "react-router";
import { getSchedules } from "../api/schedule";
import rightArrow from "../assets/ic_arrow_right_white.png";
import { formatTime } from "../utils/utilities";

const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "duration", label: "Duration: Shortest First" },
  { value: "departure", label: "Departure: Earliest First" },
];

export default function BusSchedule() {
  const [searchParams] = useSearchParams();
  const [busesData, setBusesData] = useState([]);
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("relevance");
  const [filterType, setFilterType] = useState("all");
  const [pendingBus, setPendingBus] = useState(null);

  const destination = searchParams.get("destination");
  const date = searchParams.get("date");
  const passengerCount = Number(searchParams.get("passenger")) || 1;

  useEffect(() => {
    if (!destination || !passengerCount) {
      return;
    }
    const fetchSchedules = async () => {
      getSchedules(destination, date, passengerCount)
        .then((data) => {
          const now = new Date();
          const filtered = data.filter((bus) => {
            const departure = new Date(`${date}T${bus.departureTime}`);
            return departure > now;
          });
          setBusesData(filtered);
        })
        .catch((error) => {
          console.error("Error fetching schedules:", error);
        });
    };

    fetchSchedules();
  }, [destination, date, passengerCount]);
  const handleSelectBus = (bus) => {
    setPendingBus(bus);
  };

  const closeConfirm = () => {
    setPendingBus(null);
  };

  const confirmSelectBus = () => {
    if (!pendingBus) return;
    navigate("/passenger-details", {
      state: { bus: pendingBus, date, passengerCount },
    });
  };

  const filteredBuses = useMemo(() => {
    return busesData.filter((bus) => {
      return bus.isAircon === (filterType === "Aircon") || filterType === "all";
    });
  }, [filterType, busesData]);

  const sortedBuses = useMemo(() => {
    const buses = [...filteredBuses];

    switch (sortBy) {
      case "price-asc":
        return buses.sort((a, b) => {
          const priceA = a.isAircon ? a.route.maxFare : a.route.minFare;
          const priceB = b.isAircon ? b.route.maxFare : b.route.minFare;
          return priceA - priceB;
        });
      case "price-desc":
        return buses.sort((a, b) => {
          const priceA = a.isAircon ? a.route.maxFare : a.route.minFare;
          const priceB = b.isAircon ? b.route.maxFare : b.route.minFare;
          return priceB - priceA;
        });
      case "duration":
        return buses.sort((a, b) => a.route.maxDuration - b.route.maxDuration);
      case "departure":
        return buses.sort((a, b) => a.departureTime - b.departureTime);
      case "relevance":
      default:
        return buses.sort((a, b) => a.id - b.id);
    }
  }, [filteredBuses, sortBy]);

  const airconCount = busesData.filter((b) => b.isAircon).length;
  const nonAirconCount = busesData.filter((b) => !b.isAircon).length;

  return (
    <div className="schedule-page">
      <div className="schedule-header">
        <div className="schedule-heading">
          <h1>Available Buses</h1>
          <p>
            Cebu City → {destination || "Southern Cebu"} • Today,{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="sort-container">
          <label htmlFor="sort-select">Sort by</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="filter-bar">
        <button
          className={
            filterType === "all" ? "filter-pill active" : "filter-pill"
          }
          onClick={() => setFilterType("all")}
        >
          All Buses ({busesData.length})
        </button>
        <button
          className={
            filterType === "Aircon" ? "filter-pill active" : "filter-pill"
          }
          onClick={() => setFilterType("Aircon")}
        >
          Aircon ({airconCount})
        </button>
        <button
          className={
            filterType === "Non-Aircon" ? "filter-pill active" : "filter-pill"
          }
          onClick={() => setFilterType("Non-Aircon")}
        >
          Non-Aircon ({nonAirconCount})
        </button>
      </div>

      <p className="results-count">
        Showing {sortedBuses.length} of {busesData.length} bus
        {busesData.length === 1 ? "" : "es"}
      </p>

      <div className="bus-list">
        {sortedBuses.length > 0 ? (
          sortedBuses.map((bus) => (
            <BusCard key={bus.id} bus={bus} onSelect={handleSelectBus} />
          ))
        ) : (
          <div className="empty-state">
            <p>No buses match this filter right now.</p>
            <button onClick={() => setFilterType("all")}>Clear filters</button>
          </div>
        )}
      </div>

      {pendingBus && (
        <div
          className="confirm-modal-overlay"
          onClick={closeConfirm}
          role="presentation"
        >
          <div
            className="confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="confirm-modal-title">Confirm Your Selection</h2>

            <div className="confirm-modal-details">
              <div>
                <span className="review-label">Route</span>
                <p>Cebu City → {destination || pendingBus.route?.destination}</p>
              </div>
              <div>
                <span className="review-label">Departure</span>
                <p>{formatTime(pendingBus.departureTime)}</p>
              </div>
              <div>
                <span className="review-label">Operator</span>
                <p>{pendingBus.busOperator}</p>
              </div>
              <div>
                <span className="review-label">Bus Type</span>
                <p>{pendingBus.isAircon ? "Aircon" : "Non-Aircon"}</p>
              </div>
              <div>
                <span className="review-label">Fare</span>
                <p>
                  ₱
                  {pendingBus.isAircon
                    ? pendingBus.route.maxFare
                    : pendingBus.route.minFare}{" "}
                  per passenger
                </p>
              </div>
            </div>

            <p className="confirm-modal-note">
              You're about to book this bus for {passengerCount} passenger
              {passengerCount === 1 ? "" : "s"}. Continue to passenger details?
            </p>

            <div className="confirm-modal-actions">
              <button className="confirm-btn-cancel" onClick={closeConfirm}>
                Cancel
              </button>
              <button className="confirm-btn-confirm" onClick={confirmSelectBus}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}