import "../../styles/touristcard.css";
import pinIcon from "../../assets/pin_logo.png";
export default function TouristCard({image, category, title, description, location,}) {
    return (
        <div className="tourist-card">
            <div className="tourist-image">
                <img src={image} alt={title} />
                <span className="category">{category}</span>
            </div>

            <div className="tourist-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                        <div className="tourist-location">
                            <img src={pinIcon} alt="Location" className="location-icon" />
                            <span>{location}</span>
                        </div>
            </div>
        </div>
    );
}