import "../styles/globalstyles.css";
import BusForm from "./BusForm";
import "/src/assets/hero_photo.jpg";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-text">
          <p className="tag">SOUTHERN CEBU'S NO.1 BUS LINE</p>

          <h1 className="white-header">Your Gateway to </h1>
          <h1 className="yellow-header">Southern Cebu</h1>

          <p className="description">
            Connecting Cebu City to over 20 destinations across Southern Cebu
            with safe, reliable, and affordable transportation every day.
          </p>
        </div>

        <BusForm />
      </div>

      <div className="hero-right">
        <img
          src="/src/assets/hero_photo.jpg"
          className="hero-image"
          alt="Hero Photo"
        />
      </div>
    </section>
  );
}
