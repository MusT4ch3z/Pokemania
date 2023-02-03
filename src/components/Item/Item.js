import { useEffect, useState } from "react";
import image_placeholder from "../../image/Pokeball-Placeholder.png";
import ItemDetails from "./ItemDetails/ItemDetails";
import "./Item.css";

const Item = ({ name, url }) => {
  const [info, setInfo] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  name = name
    .replace(/-/g, " ")
    .replace(/\b[\w]/g, (letter) => letter.toUpperCase());

  const getInfo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setInfo(json);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  console.log(info);
  if (isLoaded) {
    return (
      <div className="item card">
        <div className="card__title">{name}</div>
        <div className="card__body">
          {!showDetails ? (
            <div className="card__image">
              <img
                style={{ imageRendering: "pixelated", height: "15rem" }}
                src={info.sprites.default || image_placeholder}
                alt={name}
              ></img>
            </div>
          ) : info.effect_entries.length > 0 ? (
            <ItemDetails info={info} />
          ) : (
            <div className="error">Ooops...No information about it :(</div>
          )}
          <div className="card__body__buttons">
            <button
              className="item__button"
              onClick={() => handleShowDetails()}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Item;
