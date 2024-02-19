import React, {useState} from "react";



const Componente9 = ({ titulo, datos }) => {
  const [nuevoDato, setNuevoDato] = useState({ nombre: "", edad: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoDato((prevDato) => ({ ...prevDato, [name]: value }));
  };

  const agregarNombre = () => {
    if (!nuevoDato.nombre || isNaN(nuevoDato.edad)) {
      alert("Por favor, ingrese un número válido en el campo de edad.");
      return;
    }
    setNuevoDato({ nombre: "", edad: "" });
    datos.push({
      id: datos.length + 1,
      nombre: nuevoDato.nombre,
      edad: parseInt(nuevoDato.edad),
    });
  };

  return (
    <>
      <h1>{titulo}</h1>
      <label>
        Nombre:
        <input
          name='nombre'
          value={nuevoDato.nombre}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Edad:
        <input
          name='edad'
          value={nuevoDato.edad}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={agregarNombre}>Agregar</button>
      <ul>
        {datos.map(({ id, nombre, edad }) => (
          <li key={id}>
            {nombre} - {edad}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Componente9;

