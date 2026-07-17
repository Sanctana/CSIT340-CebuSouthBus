import busLogo from "../assets/bus_logo.png";
import clockLogo from "../assets/clock_logo.png";
import pinLogo from "../assets/pin_logo.png";
import snowflakeLogo from "../assets/snowflake_logo.png";

function RouteCard({ route }) {
  return (
    <div className="route-card">
      <div className="left">
        <div className="title">
          <h2>{route.destination}</h2>
        </div>

        <div className="info">
          <span>
            <img src={pinLogo} alt="pin" />
            {route.terminal}
          </span>

          <span>
            <img src={clockLogo} alt="clock" />
            {route.duration}
          </span>

          <span>
            <img src={busLogo} alt="bus" />
            {route.schedule}
          </span>

          <span>
            <img src={snowflakeLogo} alt="type" />
            {route.type}
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

        <h3 className="fare">{route.fare}</h3>
      </div>
    </div>
  );
}

export default RouteCard;
