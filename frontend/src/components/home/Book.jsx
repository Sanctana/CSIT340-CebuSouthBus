import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { getRoutes } from "../../api/route";

export default function Book() {
  const navigate = useNavigate();

  const [destinations, setDestinations] = useState([]);
  const [destination, setDestination] = useState("");
  const [showList, setShowList] = useState(false);
  const [date, setDate] = useState("");
  const [passenger, setPassenger] = useState(1);

  const searchAvailableBuses = () => {
    const searchParams = new URLSearchParams({
      destination,
      date,
      passenger,
    });

    navigate(`/schedule?${searchParams.toString()}`);
  };

  useEffect(() => {
    getRoutes().then((data) =>
      setDestinations(data.map((route) => route.destination)),
    );
  }, []);

  const filteredDestinations = useMemo(() => {
    return destinations.filter((place) =>
      place.toLowerCase().includes(destination.toLowerCase()),
    );
  });

  return (
    <>
      <h3>Plan Your Trip</h3>
      <p>Find the next available bus to your destination.</p>

      <div className="trip-type">One-Way</div>

      <div className="form-fields">
        <div className="inline-input">
          <div className="field">
            <div className="child-field">
              <label> FROM</label>
              <input type="text" value="Cebu South Terminal" disabled />
            </div>
          </div>

          <div className="swap-icon">→</div>

          <div className="field destination-field">
            <div className="child-field">
              <label>TO</label>

              <input
                type="text"
                placeholder="Destination stop"
                value={destination}
                onFocus={() => setShowList(true)}
                onChange={(e) => setDestination(e.target.value)}
              />

              {showList && (
                <div className="destination-list">
                  {filteredDestinations.map((place, index) => (
                    <p
                      key={index}
                      onClick={() => {
                        setDestination(place);
                        setShowList(false);
                      }}
                    >
                      {place}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="inline-input">
          <div className="field">
            <img src="/src/assets/ic_calendar.png" className="form-logo" />

            <div className="child-field">
              <label>DATE</label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <img src="/src/assets/ic_buslogo.png" className="form-logo" />

            <div className="child-field">
              <label>PASSENGER</label>

              <div className="counter">
                <button
                  onClick={() => passenger > 1 && setPassenger(passenger - 1)}
                >
                  -
                </button>

                <span>{passenger}</span>

                <button
                  onClick={() => passenger < 5 && setPassenger(passenger + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="search-button" onClick={searchAvailableBuses}>
        Search Available Buses
      </button>
    </>
  );
}
