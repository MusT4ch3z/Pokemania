import { useEffect, useState } from "react";
import "./Card.css";
import pokeball_placeholder from "../../image/Pokeball-Placeholder.png";
import CardDetails from "./CardDetails/CardDetails";
import AbilityList from "./AbilityList/AbilityList";

const Card = ({ name, url }) => {
  const [info, setInfo] = useState([[], { isLoaded: false }]);
  const [showDetails, setShowDetails] = useState(false);
  const [showAbilities, setShowAbilities] = useState(false);
  const getInfo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => setInfo(info, (info.isLoaded = true)));
  };

  useEffect(() => {
    getInfo();
  }, []);

  let title = undefined;
  if (info.isLoaded) {
    const [upCase] = name.toUpperCase();
    title = name.replace(name[0], upCase);
  }

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
    setShowAbilities(false);
  };

  const handleShowAbilities = () => {
    setShowAbilities(!showAbilities);
    setShowDetails(false);
  };

  if (info.isLoaded) {
    return (
      <div className="card">
        <div className="card__title">
          {info.isLoaded
            ? title
                .replace(/-/g, " ")
                .replace(/\b[\w]/g, (letter) => letter.toUpperCase())
            : "Title is Loading..."}
        </div>
        <div className="card__body">
          {!showDetails && !showAbilities ? (
            <div className="card__image">
              <img
                style={{ imageRendering: "pixelated", height: "15rem" }}
                src={info.sprites.front_default || pokeball_placeholder}
                alt={name}
              ></img>
            </div>
          ) : showDetails ? (
            <CardDetails info={info} />
          ) : showAbilities ? (
            <AbilityList info={info} />
          ) : undefined}
          <div className="card__body__buttons">
            <button onClick={() => handleShowDetails()}>Details</button>
            <button onClick={() => handleShowAbilities()}>Abilities</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
