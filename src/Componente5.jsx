import React from "react";
import { useState } from "react";

const Componente5 = ({titulo}) =>{

const [formulario, setFormulario] = useState({
  nombre: "",
  apellido: "",
  email: "",
});
const handleInputChange = (e) =>{
  const{name,value}= e.target
  setFormulario({
    ...formulario,
    [name]: value,
  });
}

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
        Apellido:
        <input
          name='apellido'
          value={formulario.apellido}
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
        {formulario.nombre} - {formulario.apellido} - {formulario.email}
      </p>
    </div>
  );
}

export default Componente5