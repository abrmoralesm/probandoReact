import React, { useState, useEffect } from "react";

const Prueba = ({titulo}) =>{

    const [pokeData, setPokeData] = useState (null);
    const pokeName = "cubone";

    useEffect(()=>{
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        fetch(apiUrl)
        .then((res)=>res.json())
        .then((res)=>{
            setPokeData({
               name: res.name,
               images:{
                frontDefault: res.sprites.front_default,
                frontShiny: res.sprites.front_shiny
               },
                  ability: res.abilities[1].ability.name,
          game: res.game_indices[0].version.name,
            })
        })
        .catch((error)=>{
            console.error("Error fetching data:", error);
        })
    },[])
 if (!pokeData) {
   return <div>Loading...</div>;
 }
   const { name, images, ability, game } = pokeData
    return (
      <>
        <h1>{titulo}</h1>
        <p>Name: {name}</p>
        {images.frontDefault && <img src={images.frontDefault} alt={name} />}
        {images.frontShiny && <img src={images.frontShiny} alt={name} />}
        
        {ability && <p>Ability: {ability}</p>}
        {game && <p>Game: {game}</p>}
      </>
    );
}

export default Prueba