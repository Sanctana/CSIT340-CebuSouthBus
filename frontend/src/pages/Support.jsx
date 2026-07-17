import { useState } from "react";
import "../styles/support.css";

import pinLogo from "../assets/pin_logo.png";
import clockLogo from "../assets/clock_logo.png";
import emailLogo from "../assets/email_logo.png";
import messageLogo from "../assets/message_logo.png";
import phoneLogo from "../assets/phone_logo.png";

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
    label: "Hotline",
    value: "(054) 645-6557",
    icon: phoneLogo,
  },
  {
    id: "email",
    label: "Email",
    value: "southbus@csbt.gov.ph",
    icon: emailLogo,
  },
  {
    id: "address",
    label: "Terminal Address",
    value: "N. Bacalso Ave., Cebu City, Philippines",
    icon: pinLogo,
  },
  {
    id: "hours",
    label: "Operating Hours",
    value: "Open daily, 4:00 AM – 10:00 PM",
    icon: clockLogo,
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
        <div className="support-hero-badge">
          <span>We're here to help</span>
        </div>

        <h1>Customer Service</h1>

        <p>
          Need help with a booking, a route, or something else?
          Find answers below or reach our team directly.
        </p>
      </div>


      {/* Contact Cards */}
      <div className="contact-grid">
        {contactInfo.map((item) => (
          <div className="contact-card" key={item.id}>

            <div className="contact-icon-box">
              <img
                src={item.icon}
                alt={item.label}
                className="contact-image"
              />
            </div>

            <div>
              <p className="contact-label">
                {item.label}
              </p>

              <p className="contact-value">
                {item.value}
              </p>
            </div>

          </div>
        ))}
      </div>



      <div className="support-content">

        <div className="support-two-col">

          {/* MAP */}
          <div>

            <h2 className="section-title">
              Terminal Location
            </h2>

            <div className="map-wrapper">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.6702160121667!2d123.86465899999997!3d10.2881334"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Cebu South Bus Location"
              />

            </div>

          </div>



          {/* CONTACT LINKS */}
          <div>

            <h2 className="section-title">
              Still have questions?
            </h2>


            <p className="section-desc">
              Our support team is available daily from 4:00 AM to 10:00 PM.
              Reach us through any of the channels below.
            </p>


            <div className="contact-link-list">


              <a
                href="tel:+6354645655"
                className="contact-link-item"
              >

                <div className="contact-icon-box contact-icon-box--lg">

                  <img
                    src={phoneLogo}
                    alt="Phone"
                    className="contact-image"
                  />

                </div>


                <div>

                  <p className="contact-link-label">
                    Call our hotline
                  </p>

                  <p className="contact-link-value">
                    (054) 645-6557
                  </p>

                </div>

              </a>



              <a
                href="mailto:southbus@csbt.gov.ph"
                className="contact-link-item"
              >

                <div className="contact-icon-box contact-icon-box--lg">

                  <img
                    src={emailLogo}
                    alt="Email"
                    className="contact-image"
                  />

                </div>


                <div>

                  <p className="contact-link-label">
                    Email us
                  </p>

                  <p className="contact-link-value">
                    southbus@csbt.gov.ph
                  </p>

                </div>

              </a>




              <div className="contact-link-item">

                <div className="contact-icon-box contact-icon-box--lg">

                  <img
                    src={messageLogo}
                    alt="Message"
                    className="contact-image"
                  />

                </div>


                <div>

                  <p className="contact-link-label">
                    Information Desk
                  </p>

                  <p className="contact-link-value">
                    Get assistance at the terminal during operating hours.
                  </p>

                </div>

              </div>


            </div>

          </div>

        </div>




        {/* FAQ */}
        <div className="faq-section">

          <h2 className="section-title">
            Frequently Asked Questions
          </h2>


          <div className="faq-list">

            {faqs.map((faq)=>{

              const isOpen = openId === faq.id;

              return (

                <div
                  className={
                    isOpen
                    ? "faq-item open"
                    : "faq-item"
                  }
                  key={faq.id}
                >


                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >

                    <div className="faq-question-inner">

                      <span className="faq-dot"></span>

                      <span>
                        {faq.question}
                      </span>

                    </div>


                    <div className="faq-chevron">

                      <span className="faq-chevron-icon">
                        {isOpen ? "▲" : "▼"}
                      </span>

                    </div>


                  </button>



                  {isOpen && (

                    <div className="faq-answer">

                      <div className="faq-answer-inner">

                        <p>
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  )}


                </div>

              );

            })}

          </div>

        </div>


      </div>

    </div>
  );
}