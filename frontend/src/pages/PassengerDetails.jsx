import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "../styles/passengerdetails.css";

const emptyPassenger = () => ({ fullName: "", age: "", gender: "Male" });

const fallbackBus = {
  operator: "CSBT Express",
  busNumber: "#12",
  acType: "Aircon",
  origin: "Cebu City",
  destination: "Oslob",
  departureTime: "05:00 AM",
  arrivalTime: "08:30 AM",
  durationLabel: "3h 30m",
  terminal: "South Bus Terminal",
  price: 220,
};

export default function PassengerDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const bus = location.state?.bus ?? fallbackBus;
  const travelDate = location.state?.date ?? "";
  const passengerCount = location.state?.passengerCount ?? 1;

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });
  const [passengers, setPassengers] = useState(
    Array.from({ length: passengerCount }, emptyPassenger),
  );
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setPassengers((prev) => {
      if (prev.length === passengerCount) return prev;
      return Array.from(
        { length: passengerCount },
        (_, i) => prev[i] ?? emptyPassenger(),
      );
    });
  }, [passengerCount]);

  const updatePassenger = (index, field, value) => {
    setPassengers((prev) =>
      prev.map((p, i) => (i === index ? { ...p, [field]: value } : p)),
    );
  };

  const totalFare = bus.price * passengerCount;

  const validate = () => {
    const newErrors = {};

    if (!contact.fullName.trim()) {
      newErrors.contactName = "Full name is required.";
    }
    if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!/^09\d{9}$/.test(contact.mobile)) {
      newErrors.mobile =
        "Enter a valid 11-digit mobile number (e.g. 09171234567).";
    }

    passengers.forEach((p, i) => {
      if (!p.fullName.trim()) {
        newErrors[`p${i}Name`] = "Name is required.";
      }
      const ageNum = Number(p.age);
      if (!p.age || ageNum <= 0 || ageNum > 120) {
        newErrors[`p${i}Age`] = "Enter a valid age.";
      }
    });

    if (!agree) {
      newErrors.agree = "Please confirm the passenger details are accurate.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validate()) return;

    navigate("/review", {
      state: {
        bus,
        date: travelDate,
        passengerCount,
        contact,
        passengers,
        totalFare,
      },
    });
  };

  return (
    <div className="passenger-page">
      <div className="passenger-steps">
        <span className="step done">1. Select Bus</span>
        <span className="step active">2. Passenger Details</span>
        <span className="step">3. Review</span>
        <span className="step">4. Confirmation</span>
      </div>

      <div className="passenger-main">
        <h1>Passenger Details</h1>
        <p className="subtitle">
          Tell us who's travelling so we can prepare your tickets.
        </p>

        <section className="form-card">
          <h2>Contact Information</h2>
          <p className="hint">
            We'll send your e-ticket and trip updates here.
          </p>

          <div className="form-grid">
            <div className="form-field wide">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Juan Dela Cruz"
                value={contact.fullName}
                onChange={(e) =>
                  setContact({ ...contact, fullName: e.target.value })
                }
              />
              {errors.contactName && (
                <span className="error-text">{errors.contactName}</span>
              )}
            </div>

            <div className="form-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="juan@email.com"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div className="form-field">
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="09171234567"
                maxLength={11}
                value={contact.mobile}
                onChange={(e) =>
                  setContact({
                    ...contact,
                    mobile: e.target.value.replace(/\D/g, ""),
                  })
                }
              />
              {errors.mobile && (
                <span className="error-text">{errors.mobile}</span>
              )}
            </div>
          </div>
        </section>

        <section className="form-card">
          <h2>
            Passenger{passengerCount > 1 ? "s" : ""} ({passengerCount})
          </h2>
          <p className="hint">
            Enter each passenger's details exactly as shown on a valid ID.
          </p>

          {passengers.map((p, i) => (
            <div className="passenger-block" key={i}>
              <h3>Passenger {i + 1}</h3>

              <div className="form-grid">
                <div className="form-field wide">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={p.fullName}
                    onChange={(e) =>
                      updatePassenger(i, "fullName", e.target.value)
                    }
                  />
                  {errors[`p${i}Name`] && (
                    <span className="error-text">{errors[`p${i}Name`]}</span>
                  )}
                </div>

                <div className="form-field">
                  <label>Age</label>
                  <input
                    type="number"
                    placeholder="Age"
                    min="0"
                    value={p.age}
                    onChange={(e) => updatePassenger(i, "age", e.target.value)}
                  />
                  {errors[`p${i}Age`] && (
                    <span className="error-text">{errors[`p${i}Age`]}</span>
                  )}
                </div>

                <div className="form-field">
                  <label>Gender</label>
                  <select
                    value={p.gender}
                    onChange={(e) =>
                      updatePassenger(i, "gender", e.target.value)
                    }
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </section>

        <label className="agree-row">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I confirm the passenger details above are accurate and match a valid
          ID.
        </label>
        {errors.agree && <span className="error-text">{errors.agree}</span>}

        <div className="passenger-actions">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <button className="continue-btn" onClick={handleContinue}>
            Continue to Review →
          </button>
        </div>
      </div>
    </div>
  );
}