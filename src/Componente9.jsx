import React, { useState } from "react";

const Componente9 = ({ titulo, datos }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    edad: "",
  });

  const handleInputChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const agregarNombre = () => {
    const nuevoDato = {
      id: datos.length + 1,
      nombre: formulario.nombre,
      edad: parseInt(formulario.edad),
    };

    setFormulario({
      nombre: "",
      edad: "",
    });

    datos.push(nuevoDato);
  };

  return (
    <div>
      <h1>{titulo}</h1>
      <label>
        Nombre:
        <input
          name='nombre'
          value={formulario.nombre}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Edad:
        <input
          name='edad'
          value={formulario.edad}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={agregarNombre}>Agregar</button>
      <p>
        Nombre: {formulario.nombre} - Edad: {formulario.edad}
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
