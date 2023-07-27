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

  const getPokemonAbilities = (url) => {
    return axios.get(url).then((res) => res.data.abilities);
  };

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState({});

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=12").then((res) => {
      setPokemonList(res.data.results);
    });
  }, []);

  useEffect(() => {
    Promise.all(
      pokemonList.map((pokemon, index) =>
        getPokemonAbilities(pokemon.url).then((abilities) => ({
          [pokemon.name]: abilities.map((ability) => ability.ability.name),
        }))
      )
    ).then((abilitiesArray) => {
      const abilitiesObject = Object.assign({}, ...abilitiesArray);
      setPokemonAbilities(abilitiesObject);
    });
  }, [pokemonList]);

  return (
    <>
      <h1>{titulo}</h1>
      <h2>Lista de los 10 primeros Pokémon:</h2>
      <ul className='pokemon-list'>
        {pokemonList.map((pokemon, index) => (
          <li className='pokemon-card' key={index}>
            <div className='info-container'>
              <img
                src={getPokemonImageUrl(index + 1)}
                alt={pokemon.name}
                
              />
              <div>
                <strong>{capitalizeFirstLetter(pokemon.name)}</strong>
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
          </li>
        ))}
      </ul>
    </>
  );
};

export default Componente17;
