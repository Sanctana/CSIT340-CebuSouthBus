import "../styles/busform.css";
import "/src/assets/ic_buslogo.png";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function BusForm() {
  const navigate = useNavigate();

  const destinations = [
    "San Fernando",
    "Carcar",
    "Dumanjug",
    "Ronda",
    "Alcantara",
    "Moalboal",
    "Badian",
    "Malabuyoc",
    "Ginatilan",
    "Samboan",
    "Oslob",
    "Boljoon",
    "Dalaguete",
    "Argao",
  ];

  const [activeTab, setActiveTab] = useState("book");
  const [destination, setDestination] = useState("");
  const [showList, setShowList] = useState(false);
  const [date, setDate] = useState("");
  const [passenger, setPassenger] = useState(1);
  const [confirmation, setConfirmation] = useState("");

  const filteredDestinations = destinations.filter((place) =>
    place.toLowerCase().includes(destination.toLowerCase()),
  );

  return (
    <div className="booking-form">
      <div className="tabs">
        <button
          className={activeTab === "book" ? "active" : "inactive"}
          onClick={() => setActiveTab("book")}
        >
          Book a Ticket
        </button>

        <button
          className={activeTab === "manage" ? "active" : "inactive"}
          onClick={() => setActiveTab("manage")}
        >
          Manage Booking
        </button>
      </div>

      {activeTab === "book" ? (
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
                      onClick={() =>
                        passenger > 1 && setPassenger(passenger - 1)
                      }
                    >
                      -
                    </button>

                    <span>{passenger}</span>

                    <button
                      onClick={() =>
                        passenger < 5 && setPassenger(passenger + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="search-button"
            onClick={() => navigate("/schedule")}
          >
            Search Available Buses
          </button>
        </>
      ) : (
        <>
          <h3>Manage Booking</h3>

          <p>Enter your confirmation code to view your ticket.</p>

          <div className="field">
            <div className="child-field">
              <label>CONFIRMATION CODE</label>

              <input
                type="text"
                maxLength="6"
                placeholder="ABC123"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value.toUpperCase())}
              />
            </div>
          </div>

          <button
            className={
              confirmation.length === 6
                ? "ticket-button active"
                : "ticket-button"
            }
            disabled={confirmation.length !== 6}
          >
            View My Ticket
          </button>
        </>
      )}

      <footer className="booking-footer">
        {activeTab === "manage" && (
          <button onClick={() => setActiveTab("book")}>
            ← Back to Book a Ticket
          </button>
        )}

        <span>Need help? 0917-123-4567</span>
      </footer>
    </div>
  );
}
