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

  const validarEmail = (email) => {
    // Expresión regular para validar una dirección de correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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
          style={{
            borderColor: validarEmail(formulario.email) ? "green" : "red",
          }}
        />
      </label>
      {validarEmail(formulario.email) ? null : (
        <p style={{ color: "red" }}>
          Introduce una dirección de correo electrónico válida
        </p>
      )}
      <p>
        {formulario.nombre} - {formulario.apellidos} - {formulario.email}
      </p>
    </>
  );
};

export default Componente5;

/*

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


*/
