function formatFullName(p) {
  return [p.firstName, p.middleName, p.lastName]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(" ");
}

export default function PassengerList({ passengers }) {
  return (
    <div className="passenger-list">
      {passengers.map((p, i) => (
        <div className="passenger-row" key={i}>
          <span className="passenger-index">{i + 1}</span>
          <div className="passenger-info">
            <p className="passenger-name">{formatFullName(p)}</p>
            <p className="passenger-meta">
              {p.age} yrs old • {p.gender}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}