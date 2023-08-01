import React, { useState, useEffect } from "react";

const Componente15 = ({ titulo }) => {
  const [name, setName] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrl1, setImageUrl1] = useState(null);
  const [imageShiny, setImageShiny] = useState(null);
  const [ability, setAbility] = useState(null);
  const [game, setGame] = useState(null);
  

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/eevee")
      .then((res) => res.json())
      .then((res) => {
        setName(res.name);
        setImageUrl(res.sprites.front_default);
        setImageUrl1(res.sprites.back_default);
        setImageShiny(res.sprites.other.home.front_shiny_female);
        setAbility(res.abilities[1].ability.name)
        setGame(res.game_indices[0].version.name)
    
       
      });
  }, []);

  return (
    <>
      <h1>{titulo}</h1>
      <p>Name: {name}</p>
      {imageUrl && <img src={imageUrl} alt='Eevee' />}
      {imageUrl1 && <img src={imageUrl1} alt='Eevee' />}
      {imageShiny && <img src={imageShiny} alt='Eevee' />}
      {ability && <p>Ability: {ability}</p>}
      {game && <p>Game: {game}</p>}
      
    </>
  );
};

export default Componente15;
