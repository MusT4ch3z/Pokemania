import { useState } from "react";
import "./ItemsDetails.css";

const ItemDetails = ({ info }) => {
  const [buttonText, setButtonText] = useState("More");
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const shortEffect = info.effect_entries[0].short_effect;
  const effect = info.effect_entries[0].effect;
  const cost = info.cost;

  const handleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
    buttonText === "More" ? setButtonText("Close") : setButtonText("More");
  };

  return (
    <div className="item_details ability__body">
      <div className="item_details__effect">
        {!showMoreInfo ? shortEffect : effect}
      </div>
      <div>Cost: {cost}</div>
      <button onClick={handleMoreInfo} className="ability__button">
        {buttonText}
      </button>
    </div>
  );
};

export default ItemDetails;
