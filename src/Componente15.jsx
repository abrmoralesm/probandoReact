import React, { useState, useEffect } from "react";

const Componente15 = ({ titulo }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const pokemonName = "smoliv"; // Nombre del Pokémon que deseas mostrar

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setPokemonData({
          name: res.name,
          images: {
            frontDefault: res.sprites.front_default,
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  const { name, images } = pokemonData;

  return (
    <>
      <h1>{titulo}</h1>
      <p>NAME: {name}</p>
      {images.frontDefault && <img src={images.frontDefault} alt={name} />}
    </>
  );
};

export default Componente15;
