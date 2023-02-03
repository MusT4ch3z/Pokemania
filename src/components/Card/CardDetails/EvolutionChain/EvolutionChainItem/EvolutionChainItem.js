import { useState, useEffect } from "react";

const EvolutionChainItem = ({ pokemonName }) => {
  const [info, setInfo] = useState();
  const [isLoaded, setIsLoaded] = useState();

  const fetchImage = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setInfo(json.sprites.front_default);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  if (isLoaded) {
    return (
      <div className="evo_chain__item">
        <img
          style={{ imageRendering: "pixelated", height: "5rem" }}
          src={info}
          alt={pokemonName}
        ></img>
      </div>
    );
  }
};

export default EvolutionChainItem;
