import React, { useState, useEffect } from "react";

const PruebaTecnica = ({ titulo }) => {
  const [pokemon, setPokemon] = useState(null);
  const pokerandom = Math.floor(Math.random() * 1000) + 1;
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokerandom}`;

  const pokeFetch = () => {
    fetch(pokeApi)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          id: data.id,
          image: data.sprites.front_shiny,
        });
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
        setPokemon(null); // Manejar el error seteando pokemon a null
      });
  };

  useEffect(() => {
    pokeFetch();
  }, [pokeFetch]); // Agregar pokeFetch como dependencia del efecto

  if (!pokemon) {
    return <div>...Cargando</div>;
  }

  const { name, id, image } = pokemon; // Mover la desestructuración aquí

  const handleClick = () => {
    pokeFetch();
  };

  return (
    <>
      <h1>{titulo}</h1>
      <p>Nombre: {name}</p>
      <p>ID: {id}</p>
      <img src={image} alt='' />
      <button onClick={handleClick}>Otro Pokemon</button>
    </>
  );
};

export default PruebaTecnica;

/* import React, {useState, useEffect} from "react";

const PruebaTecnica =({titulo})=>{
    const [pokemon, setPokemon] = useState("")

const fetchPokemon =()=>{
    const randomPokemonId = Math.floor(Math.random()*898)+1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
    .then((response)=>response.json())
    .then((data)=>{
        setPokemon({
          nombre: data.name,
          id: data.id,
          imagen: data.sprites.front_default,
        });
    })
    
}
const {nombre,id, imagen} = pokemon
useEffect(()=>{
    fetchPokemon()
},[])
if(!pokemon){
    return <div>...Cargando</div>
}
const handleClick =()=>{
    fetchPokemon()
}
    return (
      <>
        <h1>{titulo}</h1>

        <h2>NOMBRE: {nombre}</h2>
        <h2>ID: {id}</h2>
        <img src={imagen} alt='' />
        <button onClick={handleClick}>Pulsa</button>
      </>
    );
}

export default PruebaTecnica;

*/
