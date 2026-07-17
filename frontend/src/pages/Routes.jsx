import { useState } from "react";
import "../styles/routes.css";
import Pagination from "../components/Pagination";
import RouteCard from "../components/RouteCard";

function Routes() {
  const routesData = [
    {
      id: 1,
      destination: "Oslob",
      terminal: "South Bus Terminal",
      region: "South",
      type: "Aircon",
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
      type: "Non-Aircon",
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
      type: "Non-Aircon",
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
      type: "Aircon",
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
      type: "Non-Aircon",
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
      type: "Aircon",
      distance: "145 km",
      duration: "4 hrs",
      schedule: "Every 1 hr",
      fare: "₱200-250",
    },
  ];

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const routesPerPage = 3;

  const filteredRoutes = routesData.filter((route) => {
    const searchMatch = route.destination
      .toLowerCase()
      .includes(search.toLowerCase());

    const typeMatch = filterType === "All" || route.type === filterType;

    return searchMatch && typeMatch;
  });

  const totalPages = Math.ceil(filteredRoutes.length / routesPerPage);

  const startIndex = (currentPage - 1) * routesPerPage;

  const currentRoutes = filteredRoutes.slice(
    startIndex,
    startIndex + routesPerPage,
  );

  const handleFilterChange = (type) => {
    setFilterType(type);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="routes-page">
      <div className="routes-hero">
        <h1>Bus Routes</h1>
        <p>Find your South Bus route across Cebu.</p>
      </div>

      <div className="routes-gap">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search destination..."
            value={search}
            onChange={handleSearchChange}
          />

          <div className="filter-container">
            <label htmlFor="busFilter" className="filter-label">
              Filter:
            </label>

            <select
              id="busFilter"
              className="filter-dropdown"
              value={filterType}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="All">All</option>

              <option value="Aircon">Aircon</option>

              <option value="Non-Aircon">Non-Aircon</option>
            </select>
          </div>
        </div>

        <p className="count">Showing {filteredRoutes.length} route(s)</p>

        <div className="route-list">
          {currentRoutes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            goToPrevious={goToPrevious}
            goToNext={goToNext}
          />
        )}
      </div>
    </div>
  );
}

export default Routes;
