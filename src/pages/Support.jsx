import { useState } from "react";
import "../styles/support.css";

const faqs = [
  {
    id: 1,
    question: "How do I book a bus ticket?",
    answer:
      "Search your route on the homepage, pick a bus from the schedule, and follow the passenger details and review steps to confirm your booking.",
  },
  {
    id: 2,
    question: "What is the difference between Aircon and Non-Aircon buses?",
    answer:
      "Aircon buses have air conditioning, reclining seats, and typically fewer stops. Non-Aircon buses are more affordable, make more stops, and rely on open windows for ventilation.",
  },
  {
    id: 3,
    question: "Can I cancel or rebook my ticket?",
    answer:
      "Tickets can be rebooked to another date up to 24 hours before departure at the terminal counter. Cancellations made less than 24 hours before departure are non-refundable.",
  },
  {
    id: 4,
    question: "What time should I arrive before departure?",
    answer:
      "We recommend arriving at least 30 minutes before your scheduled departure time to allow time for boarding and luggage check-in.",
  },
  {
    id: 5,
    question: "How much luggage can I bring?",
    answer:
      "Each passenger may bring one large piece of luggage (up to 20kg) stored below the bus and one carry-on item. Oversized items may incur an additional fee.",
  },
  {
    id: 6,
    question: "What payment methods are accepted?",
    answer:
      "We accept cash at the terminal counter, as well as GCash, Maya, and major debit or credit cards for online bookings.",
  },
];

const contactInfo = [
  {
    id: "phone",
    icon: "📞",
    label: "Hotline",
    value: "(054) 645-6557",
  },
  {
    id: "email",
    icon: "✉️",
    label: "Email",
    value: "southbus@csbt.gov.ph",
  },
  {
    id: "address",
    icon: "📍",
    label: "Terminal Address",
    value: "N. Bacalso Ave., Cebu City, Philippines",
  },
  {
    id: "hours",
    icon: "🕒",
    label: "Operating Hours",
    value: "Open daily, 4:00 AM - 10:00 PM",
  },
];

export default function Support() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="support-page">
      <div className="support-hero">
        <h1>Customer Service</h1>
        <p>
          Need help with a booking, a route, or something else? Find answers
          below or reach our team directly.
        </p>
      </div>

      <div className="support-content">
        <div className="contact-grid">
          {contactInfo.map((item) => (
            <div className="contact-card" key={item.id}>
              <span className="contact-icon" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="contact-label">{item.label}</p>
                <p className="contact-value">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-list">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  className={isOpen ? "faq-item open" : "faq-item"}
                  key={faq.id}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && <p className="faq-answer">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}