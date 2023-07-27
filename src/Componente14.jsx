import React, { useState } from "react";

const Componente14 = ({ titulo }) => {
  const [intermediateForm, setIntermediateForm] = useState({
    nombre: "nombre",
    apellidos: "apellidos",
    email: "email",
  });

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIntermediateForm({
      ...intermediateForm,
      [name]: value,
    });
  };

  const handlePublicarClick = () => {
    setFormulario(intermediateForm);
  };

    const handleLimpiarClick = () => {
      setIntermediateForm({
        nombre: "",
        apellidos: "",
        email: "",
      });
      setFormulario({
        nombre: "",
        apellidos: "",
        email: "",
      });
    };

  return (
    <div>
      <h1>{titulo}</h1>
      <label>
        Nombre:
        <input
          name='nombre'
          value={intermediateForm.nombre}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Apellidos:
        <input
          name='apellidos'
          value={intermediateForm.apellidos}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          name='email'
          value={intermediateForm.email}
          onChange={handleInputChange}
        />
      </label>

      <button onClick={handlePublicarClick}>Publicar</button>

      <p>
        {formulario.nombre} - {formulario.apellidos} - {formulario.email}
        <button onClick={handleLimpiarClick}>Limpiar</button>
      </p>
    </div>
  );
};

export default Componente14;
