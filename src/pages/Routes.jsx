import { useState } from "react";
import "../styles/Routes.css";

function Routes() {
  const routesData = [
    {
      id: 1,
      destination: "Oslob",
      terminal: "South Bus Terminal",
      region: "South",
      distance: "117 km",
      duration: "3-4 hrs",
      schedule: "Every 30 mins",
      fare: "₱180-220",
    },
    {
      id: 2,
      destination: "Moalboal",
      terminal: "South Bus Terminal",
      region: "South",
      distance: "89 km",
      duration: "2.5-3 hrs",
      schedule: "Every 20 mins",
      fare: "₱150-180",
    },
    {
      id: 3,
      destination: "Carcar",
      terminal: "South Bus Terminal",
      region: "South",
      distance: "40 km",
      duration: "1 hr",
      schedule: "Every 15 mins",
      fare: "₱60-80",
    },
    {
      id: 4,
      destination: "Dalaguete",
      terminal: "South Bus Terminal",
      region: "South",
      distance: "84 km",
      duration: "2 hrs",
      schedule: "Every 30 mins",
      fare: "₱120-150",
    },
    {
      id: 5,
      destination: "Bato",
      terminal: "South Bus Terminal",
      region: "South",
      distance: "140 km",
      duration: "4 hrs",
      schedule: "Every 1 hr",
      fare: "₱180-210",
    },
    {
      id: 6,
      destination: "Santander",
      terminal: "South Bus Terminal",
      region: "South",
      distance: "145 km",
      duration: "4 hrs",
      schedule: "Every 1 hr",
      fare: "₱200-250",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredRoutes = routesData.filter((route) =>
    route.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="routes-page">
      <h1>Bus Routes</h1>
      <p>Find your South Bus route across Cebu.</p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="count">
        Showing {filteredRoutes.length} route(s)
      </p>

      {filteredRoutes.map((route) => (
        <div className="route-card" key={route.id}>
          <div className="left">
            <div className="title">
              <h2>{route.destination}</h2>
            </div>

            <div className="info">
              <span>📍 {route.terminal}</span>
              <span>🕒 {route.duration}</span>
              <span>🚌 {route.schedule}</span>
            </div>
          </div>

          <div className="right">
            <p><strong>Distance</strong></p>
            <h3>{route.distance}</h3>

            <p><strong>Fare</strong></p>
            <h3 className="fare">{route.fare}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Routes;