import { useEffect, useState } from "react";
import "../../styles/updatemodal.css";
import { updateTicket } from "../../api/ticket";
import ModalCloseButton from "../../components/commons/ModalCloseButton";

export default function UpdateModal({ ticket, onClose }) {
  const [firstName, setFirstName] = useState(ticket.firstName || "");
  const [middleName, setMiddleName] = useState(ticket.middleName || "");
  const [lastName, setLastName] = useState(ticket.lastName || "");
  const [email, setEmail] = useState(ticket.emailAddress || "");
  const [phoneNumber, setPhoneNumber] = useState(ticket.mobileNumber || "");

  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!/^09\d{9}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 11-digit mobile number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    try {
      await updateTicket(ticket.uid, {
        firstName,
        middleName,
        lastName,
        email,
        mobile: phoneNumber,
      });

      setSaved(true);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="update-overlay" onClick={onClose}>
      <div className="update-modal" onClick={(e) => e.stopPropagation()}>
        <div className="update-header">
          <div>
            <h2>Passenger Information</h2>

            <p>Manage the passenger's information and contact details.</p>
          </div>

          <ModalCloseButton onClick={onClose} />
        </div>

        <div className="update-body">
          <div className="input-group">
            <label>First Name</label>

            <input
              type="text"
              disabled={!isEditing}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);

                if (errors.firstName) {
                  setErrors((prev) => ({
                    ...prev,
                    firstName: "",
                  }));
                }
              }}
            />

            {errors.firstName && (
              <span className="error-text">{errors.firstName}</span>
            )}
          </div>

          <div className="input-group">
            <label>Middle Name (Optional)</label>

            <input
              type="text"
              disabled={!isEditing}
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>

            <input
              type="text"
              disabled={!isEditing}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            {errors.lastName && (
              <span className="error-text">{errors.lastName}</span>
            )}
          </div>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              disabled={!isEditing}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label>Mobile Number</label>

            <input
              type="text"
              disabled={!isEditing}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {errors.phoneNumber && (
              <span className="error-text">{errors.phoneNumber}</span>
            )}
          </div>
        </div>

        {saved && <div className="save-success">Updated Successfully!</div>}

        <div className="update-footer">
          {!saved &&
            (!isEditing ? (
              <button
                className="edit-update-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Information
              </button>
            ) : (
              <>
                <button
                  className="cancel-update-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>

                <button className="save-update-btn" onClick={handleSave}>
                  Save Changes
                </button>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
