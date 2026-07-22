import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { getRoutes } from "../../api/route";
import oneway from "../../assets/ic_oneway.png";

export default function Book() {
  const navigate = useNavigate();

  const [destinations, setDestinations] = useState([]);
  const [destination, setDestination] = useState("");
  const [showList, setShowList] = useState(false);
  const [date, setDate] = useState("");
  const [passenger, setPassenger] = useState(1);

  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const searchAvailableBuses = () => {
    if (!destination || !date) {
      setError(true);
      setShake(true);

      setTimeout(() => {
        setShake(false);
      }, 1000);

      return;
    }

    setError(false);

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
  }, [destinations, destination]);

  return (
    <>
      <h3>Plan Your Trip</h3>
      <p>Find the next available bus to your destination.</p>

      <div className="trip-type">One-Way</div>

      <div className="form-fields">
        <div className="inline-input">
          <div className="field">
            <div className="child-field">
              <label>FROM</label>
              <input type="text" value="Cebu South Terminal" disabled />
            </div>
          </div>

          <div className="oneway-icon">
            <img src={oneway} alt="oneway" />
          </div>

          <div
            className={`field destination-field ${
              error && !destination ? "input-error" : ""
            } ${shake && !destination ? "shake" : ""}`}
          >
            <div className="child-field">
              <label>TO</label>

              <input
                type="text"
                placeholder="Destination stop"
                value={destination}
                onFocus={() => setShowList(true)}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setError(false);
                }}
              />

              {showList && (
                <div className="destination-list">
                  {filteredDestinations.map((place, index) => (
                    <p
                      key={index}
                      onClick={() => {
                        setDestination(place);
                        setShowList(false);
                        setError(false);
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
          <div
            className={`field ${
              error && !date ? "input-error" : ""
            } ${shake && !date ? "shake" : ""}`}
          >
            <img
              src="/src/assets/ic_calendar.png"
              className="form-logo"
              alt="calendar"
            />

            <div className="child-field">
              <label>DATE</label>

              <input
                type="date"
                value={date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  setDate(e.target.value);
                  setError(false);
                }}
              />
            </div>
          </div>

          <div className="field">
            <img
              src="/src/assets/passenger.png"
              className="form-logo"
              alt="passenger"
            />

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

      <button
        className={`search-button && ${error && shake ? "shake" : ""}`}
        onClick={searchAvailableBuses}
      >
        Search Available Buses
      </button>
    </>
  );
}
