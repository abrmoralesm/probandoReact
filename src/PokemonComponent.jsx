import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonComponent = ({titulo}) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonIndex, setPokemonIndex] = useState(1);
  const [totalPokemon, setTotalPokemon] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [pokemonIndex]);

  useEffect(() => {
    const fetchTotalPokemon = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setTotalPokemon(response.data.count);
      } catch (error) {
        console.error("Error fetching total Pokemon:", error);
      }
    };

    fetchTotalPokemon();
  }, []);

  const handleNextPokemon = () => {
    setPokemonIndex((pokemonIndex % totalPokemon) + 1);
  };

  const handlePreviousPokemon = () => {
    if (pokemonIndex === 1) {
      setPokemonIndex(totalPokemon);
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <div>
      <h1>{titulo}</h1>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Habilidad: {pokemonData.abilities[0].ability.name}</p>
        </div>
      )}
      <div>
        <button onClick={handlePreviousPokemon}>Retroceder</button>
        <button onClick={handleNextPokemon}>Avanzar</button>
      </div>
    </div>
  );
};

export default PokemonComponent;
