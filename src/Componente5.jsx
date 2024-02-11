import React, { useState } from "react";

const Componente5 = ({ titulo }) => {

  const [formulario, setFormulario] = useState({
    nombre: "nombre",
    apellidos: "apellidos",
    email: "email",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return (
    <>
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
        Apellidos:
        <input
          name='apellidos'
          value={formulario.apellidos}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          name='email'
          value={formulario.email}
          onChange={handleInputChange}
        />
      </label>
      <p>
        {formulario.nombre} - {formulario.apellidos} - {formulario.email}
      </p>
    </>
  );
};

export default Componente5;
