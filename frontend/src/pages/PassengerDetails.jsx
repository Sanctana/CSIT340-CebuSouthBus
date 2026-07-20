import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { calculateAge } from "../utils/utilities";
import "../styles/passengerdetails.css";

const suffixOptions = ["", "Jr.", "Sr.", "II", "III", "IV", "V"];

const emptyPassenger = () => ({
  firstName: "",
  middleName: "",
  lastName: "",
  suffix: "",
  dateOfBirth: "",
  gender: "Male",
});

const emptyContact = () => ({
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  mobile: "",
});

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

  const [contact, setContact] = useState(emptyContact());
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

  const updateContact = (field, value) => {
    setContact((prev) => ({ ...prev, [field]: value }));
  };

  const totalFare = bus.price * passengerCount;

  const validate = () => {
    const newErrors = {};

    if (!contact.firstName.trim()) {
      newErrors.contactFirstName = "First name is required.";
    }
    if (!contact.lastName.trim()) {
      newErrors.contactLastName = "Last name is required.";
    }
    // Contact middle name is optional — intentionally not validated.
    if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!/^09\d{9}$/.test(contact.mobile)) {
      newErrors.mobile =
        "Enter a valid 11-digit mobile number (e.g. 09171234567).";
    }

    passengers.forEach((p, i) => {
      if (!p.firstName.trim()) {
        newErrors[`p${i}FirstName`] = "First name is required.";
      }
      if (!p.lastName.trim()) {
        newErrors[`p${i}LastName`] = "Last name is required.";
      }
      // Passenger middle name and suffix are optional — not validated.

      if (!p.dateOfBirth) {
        newErrors[`p${i}Dob`] = "Date of birth is required.";
      } else {
        const dob = new Date(p.dateOfBirth);
        const age = calculateAge(p.dateOfBirth);
        if (Number.isNaN(dob.getTime()) || dob > new Date()) {
          newErrors[`p${i}Dob`] = "Date of birth can't be in the future.";
        } else if (age > 120) {
          newErrors[`p${i}Dob`] = "Enter a valid date of birth.";
        }
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
                <div className="form-field">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Juan"
                    value={p.firstName}
                    onChange={(e) =>
                      updatePassenger(i, "firstName", e.target.value)
                    }
                  />
                  {errors[`p${i}FirstName`] && (
                    <span className="error-text">
                      {errors[`p${i}FirstName`]}
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label>Middle Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Santos"
                    value={p.middleName}
                    onChange={(e) =>
                      updatePassenger(i, "middleName", e.target.value)
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Dela Cruz"
                    value={p.lastName}
                    onChange={(e) =>
                      updatePassenger(i, "lastName", e.target.value)
                    }
                  />
                  {errors[`p${i}LastName`] && (
                    <span className="error-text">
                      {errors[`p${i}LastName`]}
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label>Suffix (Optional)</label>
                  <select
                    value={p.suffix}
                    onChange={(e) =>
                      updatePassenger(i, "suffix", e.target.value)
                    }
                  >
                    {suffixOptions.map((option) => (
                      <option key={option || "none"} value={option}>
                        {option === "" ? "None" : option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    value={p.dateOfBirth}
                    max={new Date().toISOString().split("T")[0]}
                    onChange={(e) =>
                      updatePassenger(i, "dateOfBirth", e.target.value)
                    }
                  />
                  {errors[`p${i}Dob`] && (
                    <span className="error-text">{errors[`p${i}Dob`]}</span>
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

        <section className="form-card">
          <h2>Contact Information</h2>
          <p className="hint">
            We'll send your e-ticket and trip updates here.
          </p>

          <div className="form-grid">
            <div className="form-field">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Juan"
                value={contact.firstName}
                onChange={(e) => updateContact("firstName", e.target.value)}
              />
              {errors.contactFirstName && (
                <span className="error-text">{errors.contactFirstName}</span>
              )}
            </div>

            <div className="form-field">
              <label>Middle Name (Optional)</label>
              <input
                type="text"
                placeholder="Santos"
                value={contact.middleName}
                onChange={(e) => updateContact("middleName", e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Dela Cruz"
                value={contact.lastName}
                onChange={(e) => updateContact("lastName", e.target.value)}
              />
              {errors.contactLastName && (
                <span className="error-text">{errors.contactLastName}</span>
              )}
            </div>

            <div className="form-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="juan@email.com"
                value={contact.email}
                onChange={(e) => updateContact("email", e.target.value)}
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
                  updateContact("mobile", e.target.value.replace(/\D/g, ""))
                }
              />
              {errors.mobile && (
                <span className="error-text">{errors.mobile}</span>
              )}
            </div>
          </div>
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