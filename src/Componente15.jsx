
import React, { useState, useEffect } from "react";

const Componente15 =({titulo}) =>{
const [pokemonData, setPokemonData] =useState(null);
const pokemonName = "arceus";

useEffect(() => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      setPokemonData({
        name: res.name,
        ability: res.abilities[0].ability.name,
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
const { name, ability, images } = pokemonData;

  return (
    <>
      <h1>{titulo}</h1>
      <p>Name: {name}</p>
      <p>Ability: {ability}</p>
      {images.frontDefault && <img src={images.frontDefault} alt={name} />}
    </>
  );
}

export default Componente15;

/*import React, { useState, useEffect } from "react";

const Componente15 = ({ titulo }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const pokemonName = "ditto"; // Nombre del Pokémon que deseas mostrar

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setPokemonData({
          name: res.name,
          ability: res.abilities[0].ability.name,
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
  const { name, ability, images } = pokemonData;

  return (
    <>
      <h1>{titulo}</h1>
      <p>NAME: {name}</p>
      <p>ABILITY: {ability}</p>
      {images.frontDefault && <img src={images.frontDefault} alt={name} />}
    </>
  );
};

export default Componente15;
*/

/*
import React, {useState, useEffect} from "react";
const publicKey = "8c7c98f017cc4866c90ec49e13736947";
const characterId = 1010370; 
const APIUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?apikey=${publicKey}`;
const Componente15=({titulo}) =>{

  const [comic, setComic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APIUrl);
        const data = await response.json();

        if (data && data.data && data.data.results && data.data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.data.results.length);
          const randomComic = data.data.results[randomIndex];
          setComic(randomComic);
        }
      } catch (error) {
        console.error('Error fetching comic data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {comic && (
        <div>
          <h1>{comic.title}</h1>
          <img
            src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
            alt={comic.title}
            style={{ width: '300px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Componente15; */
/*
import React, { useState, useEffect } from "react";
import axios from "axios";

const publicKey = "8c7c98f017cc4866c90ec49e13736947";
const characterId = 1010370; 
const APIUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?apikey=${publicKey}`;


const Componente15 = ({ titulo }) => {
  const [comic, setComic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APIUrl);

        const data = response.data;
        if (
          data &&
          data.data &&
          data.data.results &&
          data.data.results.length > 0
        ) {
          const randomIndex = Math.floor(
            Math.random() * data.data.results.length
          );
          const randomComic = data.data.results[randomIndex];
          setComic(randomComic);
        }
      } catch (error) {
        console.error("Error fetching comic data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{titulo}</h1>
      {comic && (
        <div>
          <h1>{comic.title}</h1>
          <img
            src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
            alt={comic.title}
            style={{ width: "300px" }} // Ajusta el ancho de la imagen según tus necesidades
          />
        </div>
      )}
    </div>
  );
};

export default Componente15;

*/