import { useEffect, useState } from "react";
import "../../styles/advertise.css";
import { getAdvertises } from "../../api/advertise";
import leftArrow from "../../assets/ic_arrow_left.png";
import rightArrow from "../../assets/ic_arrow_right.png";
import kawasan from "../../assets/kawasan.jpg";
import moalboal from "../../assets/moalboal.jpg";
import whaleShark from "../../assets/oslob-whale.jpg";
import simala from "../../assets/simala.jpg";
import TouristCard from "./TouristCard";

export default function Advertise() {
  const images = [whaleShark, kawasan, simala, moalboal];
  const [destinations, setDestinations] = useState([]);

  const [page, setPage] = useState(0);

  const cardsPerPage = 2;

  const visibleCards = destinations.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage,
  );

  const next = () => {
    if ((page + 1) * cardsPerPage < destinations.length) {
      setPage(page + 1);
    }
  };

  const previous = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getAdvertises()
      .then(setDestinations)
      .catch((error) => {
        console.error("Error fetching advertisements:", error);
      });
  }, []);

  return (
    <section className="advertisement-section">
      <div className="advertisement-header">
        <div className="header-text">
          <h2>Explore South Cebu</h2>

          <p>
            Discover breathtaking destinations you can visit with Cebu South
            Bus.
          </p>
        </div>

        <div className="advertisement-buttons">
          <button onClick={previous}>
            <img src={leftArrow} alt="Previous" />
          </button>

          <button onClick={next}>
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>

      <div className="tourist-grid">
        {visibleCards.map((place, index) => (
          <TouristCard
            key={index}
            category={place.category}
            title={place.title}
            description={place.description}
            location={place.location}
            image={images.at(page * cardsPerPage + index) || ""}
          />
        ))}
      </div>
    </section>
  );
}
