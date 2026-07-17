import { useMemo, useState } from "react";
import BusCard from "../components/BusCard";
import "../styles/busschedule.css";
import { useNavigate, useSearchParams } from "react-router";

//Sample data
const busesData = [
  {
    id: 1,
    operator: "CSBT Express",
    busNumber: "#12",
    acType: "Aircon",
    origin: "Cebu City",
    destination: "Oslob",
    terminal: "South Bus Terminal",
    departureTime: "05:00 AM",
    departureMinutes: 300,
    arrivalTime: "08:30 AM",
    durationLabel: "3h 30m",
    durationMinutes: 210,
    seatsAvailable: 18,
    price: 220,
  },
  {
    id: 2,
    operator: "Southline Liner",
    busNumber: "#07",
    acType: "Non-Aircon",
    origin: "Cebu City",
    destination: "Oslob",
    terminal: "South Bus Terminal",
    departureTime: "05:30 AM",
    departureMinutes: 330,
    arrivalTime: "09:15 AM",
    durationLabel: "3h 45m",
    durationMinutes: 225,
    seatsAvailable: 32,
    price: 180,
  },
  {
    id: 3,
    operator: "CSBT Express",
    busNumber: "#21",
    acType: "Aircon",
    origin: "Cebu City",
    destination: "Moalboal",
    terminal: "South Bus Terminal",
    departureTime: "06:00 AM",
    departureMinutes: 360,
    arrivalTime: "08:45 AM",
    durationLabel: "2h 45m",
    durationMinutes: 165,
    seatsAvailable: 9,
    price: 180,
  },
  {
    id: 4,
    operator: "Southline Liner",
    busNumber: "#14",
    acType: "Non-Aircon",
    origin: "Cebu City",
    destination: "Moalboal",
    terminal: "South Bus Terminal",
    departureTime: "06:30 AM",
    departureMinutes: 390,
    arrivalTime: "09:30 AM",
    durationLabel: "3h 00m",
    durationMinutes: 180,
    seatsAvailable: 40,
    price: 150,
  },
  {
    id: 5,
    operator: "CSBT Express",
    busNumber: "#05",
    acType: "Aircon",
    origin: "Cebu City",
    destination: "Carcar",
    terminal: "South Bus Terminal",
    departureTime: "05:15 AM",
    departureMinutes: 315,
    arrivalTime: "06:15 AM",
    durationLabel: "1h 00m",
    durationMinutes: 60,
    seatsAvailable: 22,
    price: 80,
  },
  {
    id: 6,
    operator: "Southline Liner",
    busNumber: "#02",
    acType: "Non-Aircon",
    origin: "Cebu City",
    destination: "Carcar",
    terminal: "South Bus Terminal",
    departureTime: "05:45 AM",
    departureMinutes: 345,
    arrivalTime: "06:50 AM",
    durationLabel: "1h 05m",
    durationMinutes: 65,
    seatsAvailable: 45,
    price: 60,
  },
  {
    id: 7,
    operator: "CSBT Express",
    busNumber: "#30",
    acType: "Aircon",
    origin: "Cebu City",
    destination: "Dalaguete",
    terminal: "South Bus Terminal",
    departureTime: "07:00 AM",
    departureMinutes: 420,
    arrivalTime: "09:00 AM",
    durationLabel: "2h 00m",
    durationMinutes: 120,
    seatsAvailable: 15,
    price: 150,
  },
  {
    id: 8,
    operator: "Southline Liner",
    busNumber: "#18",
    acType: "Non-Aircon",
    origin: "Cebu City",
    destination: "Santander",
    terminal: "South Bus Terminal",
    departureTime: "04:30 AM",
    departureMinutes: 270,
    arrivalTime: "08:30 AM",
    durationLabel: "4h 00m",
    durationMinutes: 240,
    seatsAvailable: 38,
    price: 200,
  },
];

const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "duration", label: "Duration: Shortest First" },
  { value: "departure", label: "Departure: Earliest First" },
];

export default function BusSchedule() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("relevance");
  const [filterType, setFilterType] = useState("all");

  const destination = searchParams.get("destination");
  const date = searchParams.get("date");
  const passengerCount = Number(searchParams.get("passenger")) || 1;

  const handleSelectBus = (bus) => {
    navigate("/passenger-details", {
      state: { bus, date, passengerCount },
    });
  };

  const filteredBuses = useMemo(() => {
    if (filterType === "all") return busesData;
    return busesData.filter((bus) => bus.acType === filterType);
  }, [filterType]);

  const sortedBuses = useMemo(() => {
    const buses = [...filteredBuses];

    switch (sortBy) {
      case "price-asc":
        return buses.sort((a, b) => a.price - b.price);
      case "price-desc":
        return buses.sort((a, b) => b.price - a.price);
      case "duration":
        return buses.sort((a, b) => a.durationMinutes - b.durationMinutes);
      case "departure":
        return buses.sort((a, b) => a.departureMinutes - b.departureMinutes);
      case "relevance":
      default:
        return buses.sort((a, b) => a.id - b.id);
    }
  }, [filteredBuses, sortBy]);

  const airconCount = busesData.filter((b) => b.acType === "Aircon").length;
  const nonAirconCount = busesData.filter(
      (b) => b.acType === "Non-Aircon",
  ).length;

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
            ❄️ Aircon ({airconCount})
          </button>
          <button
              className={
                filterType === "Non-Aircon" ? "filter-pill active" : "filter-pill"
              }
              onClick={() => setFilterType("Non-Aircon")}
          >
            🌬️ Non-Aircon ({nonAirconCount})
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
      </div>
  );
}