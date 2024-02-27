import React,{useState, useEffect} from "react";
const PokeName ="eevee";
const PokeUrl = `https://pokeapi.co/api/v2/pokemon/${PokeName}`;

const ProbandoApi=({titulo}) =>{

    const [pokeDatos, setPokeDatos] = useState(null);

const PokeConst= ()=>{
        fetch(PokeUrl)
        .then(res=>res.json())
        .then(datos=>{
            setPokeDatos({
              name: datos.name,
              habilidades: datos.abilities,
              imagenes: {
                macho: datos.sprites.front_default,
                hembra: datos.sprites.other.home.front_shiny,
              },
            });
        })
    }

    useEffect( PokeConst,[])

if(!pokeDatos){
    return<div>...CARGANDO...</div>
}

const {name, habilidades, imagenes}=pokeDatos;

//const habilidadesString =habilidades.map(ability=>ability.ability.name).join(", ")
  const habilidadesString =habilidades.map(jar=>jar.ability.name).join(", ")



    return (
        <>
        <h1>{titulo}</h1>
        <p>Nombre: {name}</p>
        <p>Habilidades: {habilidadesString}</p>
        <img src={imagenes.macho} alt="Pokemon"/>
        <img src={imagenes.hembra} alt="Pokemon"/>
        </>
    )
}

export default ProbandoApi
