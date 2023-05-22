import React from "react";
import { useState } from "react";


const Componente5 = ({ titulo }) => {
  const [formulario, setFormulario] = useState({
    nombre: "Nombre",
    apellido: "Apellido",
    email: "email",
  });
  return (
    <div>
      <h1>{titulo}</h1>

      <label>
        Nombre:
        <input
          value={formulario.nombre}
          onChange={(e) => {
            setFormulario({
              ...formulario,
              nombre: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Apellido:
        <input
          value={formulario.apellido}
          onChange={(e) => {
            setFormulario({
              ...formulario,
              apellido: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={formulario.email}
          onChange={(e) => {
            setFormulario({
              ...formulario,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {formulario.nombre} - {formulario.apellido} - {formulario.email}
      </p>
    </div>
  );
};

export default Componente5;
