import { useState } from "react";
import "../../styles/advertise.css";
import TouristCard from "./TouristCard";

import whaleShark from "../../assets/oslob-whale.jpg";
import kawasan from "../../assets/kawasan.jpg";
import simala from "../../assets/simala.jpg";
import moalboal from "../../assets/moalboal.jpg";

import leftArrow from "../../assets/ic_arrow_left.png";
import rightArrow from "../../assets/ic_arrow_right.png";

export default function advertise() {


    const destinations = [
        {
            category: "MARINE LIFE",
            title: "Oslob Whale Sharks",
            description:
                "Swim alongside the world's largest fish in their natural habitat.",
            location: "Oslob, Cebu",
            image: whaleShark,
        },
        {
            category: "WATERFALL",
            title: "Kawasan Falls",
            description:
                "Experience turquoise waterfalls surrounded by lush tropical forests.",
            location: "Alegria, Cebu",
            image: kawasan,
        },
        {
            category: "PILGRIMAGE",
            title: "Simala Shrine",
            description:
                "One of Cebu's most visited churches known for miraculous stories.",
            location: "Sibonga, Cebu",
            image: simala,
        },
        {
            category: "BEACH",
            title: "Moalboal Sardine Run",
            description:
                "Witness millions of sardines swimming just meters from the shore.",
            location: "Moalboal, Cebu",
            image: moalboal,
        },
    ];

    const [page, setPage] = useState(0);

    const cardsPerPage = 2;

    const visibleCards = destinations.slice(
        page * cardsPerPage,
        page * cardsPerPage + cardsPerPage
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

    return (
        <section className="advertisement-section">
            <div className="advertisement-header">

                <div className="header-text">
                    <h2>Explore South Cebu</h2>

                    <p>
                        Discover breathtaking destinations you can visit with Cebu South Bus.
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
                        image={place.image}
                    />
                ))}
            </div>
        </section>
    );
}