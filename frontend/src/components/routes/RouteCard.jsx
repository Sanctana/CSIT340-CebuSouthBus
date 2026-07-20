import busLogo from "../../assets/bus_logo.png";
import clockLogo from "../../assets/clock_logo.png";
import pinLogo from "../../assets/pin_logo.png";
import snowflakeLogo from "../../assets/snowflake_logo.png";
import { formatMinutes } from "../../utils/utilities";

function RouteCard({ route }) {
  return (
    <div className="route-card">
      <div className="left">
        <div className="title">
          <h2>{route.destination}</h2>

          <div className="route-tags">
            {route.hasAircon && (
                <span className="route-tag">
                <img src={snowflakeLogo} alt="Aircon" />
                Aircon
                </span>
            )}

            {route.hasNonAircon && (
                <span className="route-tag">
                  <img src={snowflakeLogo} alt="Non-Aircon" />
                Non-Aircon
                </span>
            )}
          </div>
        </div>

        <div className="info">
          <span>
            <img src={pinLogo} alt="pin" />
            South Bus Terminal
          </span>

          <span>
            <img src={clockLogo} alt="clock" />
            {formatMinutes(route.minDuration)} -{" "}
            {formatMinutes(route.maxDuration)}
          </span>

          <span>
            <img src={busLogo} alt="bus" />
            Every {formatMinutes(route.schedule)}
          </span>
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

        <h3 className="fare">
          ₱ {route.minFare} - {route.maxFare}
        </h3>
      </div>
    </div>
  );
}

export default RouteCard;
