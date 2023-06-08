import React, { useState } from "react";

const Componente9 = ({ titulo, datos }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "nombre") {
      setNombre(e.target.value);
    } else if (e.target.name === "edad") {
      setEdad(e.target.value);
    }
  };

  const agregarNombre = () => {
    const nuevoDato = {
      id: datos.length + 1,
      nombre: nombre,
      edad: parseInt(edad),
    };

    setNombre("");
    setEdad("");

    datos.push(nuevoDato);
  };

  return (
    <div>
      <h1>{titulo}</h1>
      <label>
        Nombre:
        <input 
         name='nombre'
         value={nombre} 
         onChange={handleInputChange} />
      </label>
      <label>
        Edad:
        <input 
        name='edad' 
        value={edad} 
        onChange={handleInputChange} />
      </label>
      <button onClick={agregarNombre}>Agregar</button>
      <p>
        Nombre: {nombre} - Edad: {edad}
      </p>
      <ul>
        {datos.map(({ id, nombre, edad }) => (
          <li key={id}>
            {nombre} - {edad}
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Componente9;
