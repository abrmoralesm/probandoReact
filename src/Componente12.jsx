import React, { useState } from "react";
import Componente1 from "./Componente1";

const Componente12 = ({titulo}) => {
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear un nuevo objeto con el nombre y la edad ingresados
    const nuevoDato = {
      id: datos.length + 1,
      nombre,
      edad,
    };

    // Agregar el nuevo objeto al estado de datos
    setDatos([...datos, nuevoDato]);

    // Limpiar los campos de nombre y edad
    setNombre("");
    setEdad("");
  };

  return (
    <div>
      <h1>{titulo}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type='text' value={nombre} onChange={handleNombreChange} />
        </label>
        <label>
          Edad:
          <input type='number' value={edad} onChange={handleEdadChange} />
        </label>
        <button type='submit'>Agregar</button>
      </form>
      <Componente1 titulo='Datos' datos={datos} />
    </div>
  );
};

export default Componente12;
