import React, { useState, useEffect } from "react";

const pokename = "pikachu";
const PokeURL = `https://pokeapi.co/api/v2/pokemon/${pokename}`;

const ProbandoApi = ({ titulo }) => {
  const [pokeDatos, setPokeDatos] = useState(null);

  useEffect(() => {
    fetch(PokeURL)
      .then((res) => res.json())
      .then((datos) => {
        setPokeDatos({
          name: datos.name,
          order: datos.order,
          abilities: datos.abilities,
          image: datos.sprites.back_shiny,
        });
      });
  }, []);

  if (!pokeDatos) {
    return <div>...CARGANDO...</div>;
  }

  const { name, order, abilities, image } = pokeDatos;

  return (
    <>
      
        <h1>{titulo}</h1>
   
          <p>Nombre: {name}</p>
          <p>Orden: {order}</p>
          <p>Habilidades:</p>
          <ul>
            {abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>

        <img src={image} alt='Pikachu' />
    
    </>
  );
};

export default ProbandoApi;
