import { useEffect, useMemo, useState } from "react";
import BusCard from "../components/schedule/BusCard";
import "../styles/busschedule.css";
import { useNavigate, useSearchParams } from "react-router";
import { getSchedules } from "../api/schedule";
import rightArrow from "../assets/ic_arrow_right_white.png";
import BusSelectionConfirmation from "../components/schedule/BusSelectionConfirmation";
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
        <BusSelectionConfirmation
          destination={destination}
          passengerCount={passengerCount}
          pendingBus={pendingBus}
          date={date}
          setPendingBus={setPendingBus}
        />
      )}
    </div>
  );
}
