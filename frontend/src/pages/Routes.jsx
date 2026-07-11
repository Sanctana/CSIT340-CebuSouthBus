import { useState } from "react";
import "../styles/routes.css";
import { getRoutes } from "../api/route";
import {formatMinutes} from "../utils/utilities"
import { useEffect } from "react";

function Routes() {
  const [search, setSearch] = useState("");
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
      getRoutes().then(setRoutes).catch((error) => {
          console.error("Error fetching routes:", error);
      });
  }, []);

  const filteredRoutes = routes.filter((route) =>
    route.destination.toLowerCase().includes(search.toLowerCase()),
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

      <p className="count">Showing {filteredRoutes.length} route(s)</p>

      {filteredRoutes.map((route) => (
        <div className="route-card" key={route.id}>
          <div className="left">
            <div className="title">
              <h2>{route.destination}</h2>
            </div>

            <div className="info">
              <span>📍 South Bus Terminal</span>
              <span>🕒 {route.minDuration == route.maxDuration ? route.minDuration : `${route.minDuration} - ${route.maxDuration}`}</span>
              <span>🚌 Every {formatMinutes(route.schedule)}</span>
            </div>
          </div>

          <div className="right">
            <p>
              <strong>Distance</strong>
            </p>
            <h3>{route.distance}</h3>

            <p>
              <strong>Fare</strong>
            </p>
            <h3 className="fare">₱{route.minFare} - {route.maxFare}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Routes;
