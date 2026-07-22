import { useEffect, useState } from "react";
import "../styles/routes.css";
import { getRoutes } from "../api/route";
import Pagination from "../components/routes/Pagination";
import RouteCard from "../components/routes/RouteCard";

/**
 * WARNING: Since all destinations has aircon and non-aircon buses in the database,
 * there is no need to filter the routes by type. Doing so will not work since all
 * destinations will always have both types of buses.
 *
 * If you want to filter the routes by type, you will need to modify the database
 * such that some destinations only have aircon buses and some only have non-aircon buses.
 */
function Routes() {
  const [routesData, setRoutesData] = useState([]);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRoutes = async () => {
      getRoutes()
        .then(setRoutesData)
        .catch((error) => {
          console.error("Error fetching routes:", error);
        });
    };

    fetchRoutes();
  }, []);

  const routesPerPage = 3;

  const filteredRoutes = routesData.filter((route) => {
    return (
      route.destination.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "All" ||
        (filterType === "Aircon" && route.hasAircon) ||
        (filterType === "Non-Aircon" && route.hasNonAircon))
    );
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