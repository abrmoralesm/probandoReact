import React, { useState, useEffect } from "react";

const Componente15 = ({ titulo }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const pokemonName = "eevee"; // Nombre del Pokémon que deseas mostrar

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setPokemonData({
          name: res.name,
          images: {
            frontDefault: res.sprites.front_default,
            backDefault: res.sprites.back_default,
            shinyFemale: res.sprites.other.home.front_shiny_female,
          },
          ability: res.abilities[1].ability.name,
          game: res.game_indices[0].version.name,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, images, ability, game } = pokemonData;

  return (
    <>
      <h1>{titulo}</h1>
      <p>Name: {name}</p>
      {images.frontDefault && <img src={images.frontDefault} alt={name} />}
      {images.backDefault && <img src={images.backDefault} alt={name} />}
      {images.shinyFemale && <img src={images.shinyFemale} alt={name} />}
      {ability && <p>Ability: {ability}</p>}
      {game && <p>Game: {game}</p>}
    </>
  );
};

export default Componente15;
