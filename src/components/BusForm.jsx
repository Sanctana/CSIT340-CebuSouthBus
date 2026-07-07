import "../styles/busform.css";
import "../styles/hero.css";
import "/src/assets/ic_buslogo.png";

export default function BusForm() {
  return (
    <div className="booking-form">
      <h3>Plan Your Trip</h3>
      <p>Find the next available bus to your destination.</p>

      <div className="trip-type">
        <p>One-Way</p>
      </div>

      <div className="form-fields">
        <div className="inline-input">
          <div className="field">
            <img
              src="/src/assets/ic_buslogo.png"
              alt="logo"
              className="form-logo"
            />
            <div className="child-field">
              <label>FROM</label>
              <br />
              <input type="text" placeholder="Departure stop" />
            </div>
          </div>

          <div>
            <img
              src="/src/assets/ic_buslogo.png"
              alt="logo"
              className="form-logo"
            />
          </div>

          <div className="field">
            <img
              src="/src/assets/ic_buslogo.png"
              alt="logo"
              className="form-logo"
            />
            <div className="child-field">
              <label>TO</label>
              <br />
              <input type="text" placeholder="Destination stop" />
            </div>
          </div>
        </div>

        <div className="inline-input">
          <div className="field">
            <img
              src="/src/assets/ic_buslogo.png"
              alt="logo"
              className="form-logo"
            />
            <div className="child-field">
              <label>DATE</label>
              <br />
              <input type="date" value="2025-07-10" />
            </div>
          </div>

          <div className="field">
            <img
              src="/src/assets/ic_buslogo.png"
              alt="logo"
              className="form-logo"
            />
            <div className="child-field">
              <label>PASSENGER</label>
              <br />
              <input type="number" min="1" value="1" />
            </div>
          </div>
        </div>
      </div>

      <div className="search-button">
        <button>Search Available Busses </button>
      </div>
    </div>
  );
}
