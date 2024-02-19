import React, {useState, useEffect} from "react";

const PruebaTecnica =({titulo}) =>{

    const [nom, setNom] = useState("");
    const [nomData, setNomData] = useState(null);
    const [errorMessage, setErrorMesage] = useState("");

    const handleSubmite= (e)=>{
        
    }

    return(
        <>
        <h1>{titulo}</h1>
        </>
    )
}
export default PruebaTecnica;
/*

import React, { useState } from "react";

const PruebaTecnica = ({ titulo }) => {
  const [nom, setNom] = useState("");
  const [nomData, setNomData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = `https://www.amiiboapi.com/api/amiibo/?name=${nom}`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Pokemon not found");
        }
        return res.json();
      })
      .then((data) => {
        setNomData({
          nombre: data.amiibo[0].name,
          character: data.amiibo[0].character,
          image: data.amiibo[0].image,
        });
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setNomData(null);
        setErrorMessage("ESE POKEMON NO EXISTE O NO HA SIDO CAZADO AUN");
      });
  };

  return (
    <>
      <h1>{titulo}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del Pokémon:
          <input
            type='text'
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </label>
        <button type='submit'>MOSTRAR</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {nomData && (
        <div>
          <p>Nombre: {nomData.nombre}</p>
          <p>Personaje: {nomData.character}</p>
          <img src={nomData.image} alt="" ></img>
        </div>
      )}
    </>
  );
};

export default PruebaTecnica;

*/
