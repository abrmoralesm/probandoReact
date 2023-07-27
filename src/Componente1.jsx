import React, { useState, useRef } from "react";
import { Estilando } from "./StyledComponente11";

const Componente1 = ({ titulo, datos, boton }) => {
  const [formu, setFormu] = useState({
    Apodo: "Apodo",
  });

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormu({
      ...formu,
      [name]: value,
    });
  };

  const handleFormReset = () => {
    setFormu({
      Apodo: "",
    });
    inputRef.current.focus();
  };

  return (
    <Estilando>
      <h1>{titulo}</h1>
    
      <label>
        Apodo:
        <input
          ref={inputRef}
          name='Apodo'
          value={formu.Apodo}
          onChange={handleInputChange}
        />
      </label>
      <p>{formu.Apodo}</p>
  <ul>
    {datos.map(({id,nombre,edad})=>(
      <li key={id}>
        {nombre} - {edad}
        <button onClick={boton}>Pulsa</button>
      </li>
    ))}
  </ul>
      <button onClick={handleFormReset}>Limpiar formulario</button>
    </Estilando>
  );
};

export default Componente1;
