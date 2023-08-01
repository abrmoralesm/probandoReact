import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Componente17.css";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Componente17 = ({ titulo }) => {
  const getPokemonImageUrl = (index) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
  };

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState({});
  const [pokemonData, setPokemonData] = useState([]);
  const [startPokemonIndex, setStartPokemonIndex] = useState(1);
  const [endPokemonIndex, setEndPokemonIndex] = useState(12);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=900").then((res) => {
      setPokemonList(res.data.results);
    });
  }, []);

  useEffect(() => {
    const selectedPokemons = pokemonList.slice(
      startPokemonIndex - 1,
      endPokemonIndex
    );
    Promise.all(
      selectedPokemons.map((pokemon) =>
        axios.get(pokemon.url).then((res) => {
          setPokemonData((prevData) => ({
            ...prevData,
            [pokemon.name]: res.data.base_experience,
          }));
          setPokemonAbilities((prevAbilities) => ({
            ...prevAbilities,
            [pokemon.name]: res.data.abilities.map(
              (ability) => ability.ability.name
            ),
          }));
        })
      )
    );
  }, [pokemonList, startPokemonIndex, endPokemonIndex]);

  const handleShowMore = () => {
    setStartPokemonIndex(endPokemonIndex + 1);
    setEndPokemonIndex(endPokemonIndex + 12);
  };

  return (
    <>
      <h1>{titulo}</h1>
      <h2>
        Lista de los Pokémon del {startPokemonIndex} al {endPokemonIndex}:
      </h2>
      <ul className='pokemon-list'>
        {pokemonList
          .slice(startPokemonIndex - 1, endPokemonIndex)
          .map((pokemon, index) => (
            <li className='pokemon-card' key={index}>
              <div className='info-container'>
                <img
                  src={getPokemonImageUrl(startPokemonIndex + index)}
                  alt={pokemon.name}
                />
                <div>
                  <strong>{capitalizeFirstLetter(pokemon.name)}</strong>
                  <p>Base Experience: {pokemonData[pokemon.name]}</p>
                  <div className='abilities-container'>
                    {/* Contenedor para alinear "Habilidades" y la lista */}
                    <strong>Habilidades:</strong>
                    <ul>
                      {pokemonAbilities[pokemon.name] &&
                        pokemonAbilities[pokemon.name].map(
                          (ability, abilityIndex) => (
                            <li key={abilityIndex}>{ability}</li>
                          )
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <button onClick={handleShowMore}>Mostrar más</button>
    </>
  );
};

export default Componente17;
