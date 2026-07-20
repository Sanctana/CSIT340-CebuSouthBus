import Hero from "../components/home/Hero";
import Advertisement from "../components/home/Advertise";
import "../styles/home.css";

export default function Home() {
    const scrollToBooking = () => {
        const bookingSection = document.getElementById("book-ticket");
        if (bookingSection) {
            bookingSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div>
            <Hero />
            <Advertisement />

            <section className="cta-section">
                <div className="cta-content">

                    <div className="cta-text">
                        <h2>Ready to travel south?</h2>

                        <p>
                            Book your ticket in seconds. Skip the queues and travel with ease across Southern Cebu.
                        </p>
                    </div>

                    <button className="cta-button" onClick={scrollToBooking}>
                        Book a Ticket Now
                    </button>

                </div>
            </section>
        </div>
    );
}