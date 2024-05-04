
 import React, { useState, useEffect } from "react";

const Componente14 = ({ titulo }) => {
  const [catFact, setCatFact] = useState("");
  const GIPHY_KEY = "F5dHjDTmXgGP2lSlnATT6XQmH5hwYou1";

  const [catGif, setCatGif] = useState("");
  const callGiphy = (string) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCatGif(data.data[0].images.original.url);
      });
  };

  const callApi = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact || "JARNDER");
        callGiphy(data?.fact?.split(" ").slice(0, 3).join(" "));
      });
  };
  useEffect(callApi, []);


  const initialState = {
    nombre:"",
    apellidos:"",
email:"",}

  const [formulario, setFormulario] = useState(initialState
  );
  const [mostrar, setMostrar] = useState(initialState);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  const hacerClick = () => {
    setMostrar(formulario);
  };

  
  return (
    <>
      <h1>{titulo}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <p>{catFact}</p>
        <img
          src={catGif}
          alt='J'
          style={{ objectFit: "contain", width: "200px", height: "200px" }}
        /><button onClick={callApi}>Otro gif</button>
      </div>
      <label>
        Nombre:
        <input name='nombre' value={formulario.nombre} onChange={handleInput} />
      </label>
      <label>
        Apellidos:
        <input
          name='apellidos'
          value={formulario.apellidos}
          onChange={handleInput}
        />
      </label>
      <label>
        Email:
        <input name='email' value={formulario.email} onChange={handleInput} />
      </label>

      <button onClick={hacerClick}>Mostrar</button>
      <p>
        {mostrar.nombre} - {mostrar.apellidos} - {mostrar.email}
      </p>
    </>
  );
};
export default Componente14;


