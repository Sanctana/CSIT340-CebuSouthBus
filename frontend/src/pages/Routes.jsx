import { useState } from "react";
import "../styles/routes.css";

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
    const matchesSearch = route.destination
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType = filterType === "All" || route.type === filterType;
    return matchesSearch && matchesType;
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
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="routes-page">
      <h1>Bus Routes</h1>
      <p>Find your South Bus route across Cebu.</p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={handleSearchChange}
        />
        <div className="filter-container">
          <button
            className={filterType === "All" ? "active" : ""}
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>
          <button
            className={filterType === "Aircon" ? "active" : ""}
            onClick={() => handleFilterChange("Aircon")}
          >
            Aircon
          </button>
          <button
            className={filterType === "Non-Aircon" ? "active" : ""}
            onClick={() => handleFilterChange("Non-Aircon")}
          >
            Non-Aircon
          </button>
        </div>
      </div>

      <p className="count">Showing {filteredRoutes.length} route(s)</p>

      {currentRoutes.map((route) => (
        <div className="route-card" key={route.id}>
          <div className="left">
            <div className="title">
              <h2>{route.destination}</h2>
            </div>
            <div className="info">
              <span>📍 {route.terminal}</span>
              <span>🕒 {route.duration}</span>
              <span>🚌 {route.schedule}</span>
              <span>❄️ {route.type}</span>
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
            <h3 className="fare">{route.fare}</h3>
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="pagination">
          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  className={currentPage === page ? "active" : ""}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ),
            )}
          </div>

          <div className="page-nav">
            <button onClick={goToPrevious} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={goToNext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Routes;