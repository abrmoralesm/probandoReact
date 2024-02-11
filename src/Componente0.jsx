import React, { useState } from "react";

const Componente0 = ({ titulo }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");


  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Construye la URL de la API utilizando el nombre del Pokémon
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;

    // Realiza una solicitud a la API de Pokémon
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Pokemon not found");
        }
        return res.json();
      })
      .then((data) => {
        // Extrae los datos relevantes del Pokémon
        const name = data.name;
        const abilities = data.abilities.map((ability) => ability.ability.name);
        const height = data.height;
        const imageUrl = data.sprites.front_default;

        // Actualiza el estado con los datos del Pokémon
        setPokemonData({ name, abilities, height, imageUrl });
        setErrorMessage(""); // Limpia el mensaje de error si se encuentra el Pokémon
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setPokemonData(null); // Limpia los datos en caso de error
        setErrorMessage("ESE POKEMON NO EXISTE O NO HA SIDO CAZADO AUN");
      });
  };

  


  return (
    <div>
      <h1>{titulo}</h1>
      <h1>Buscar Pokémon</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Nombre del Pokémon:
          <input
            type='text'
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </label>
        <button type='submit'>MOSTRAR</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {pokemonData && !errorMessage && (
        <div>
          <h2>{pokemonData.name}</h2>
          <p>Altura: {pokemonData.height} dm</p>
          <p>Habilidades: {pokemonData.abilities.join(", ")}</p>
          <img
            src={pokemonData.imageUrl}
            alt={pokemonData.name}
            style={{ maxWidth: "200px" }}
          />
        </div>
      )}    
    </div>
  );
};

export default Componente0;
