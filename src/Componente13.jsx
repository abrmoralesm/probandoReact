import React, { useState, useEffect } from "react";

const Componente13 = ({ titulo }) => {
  const [estado, setEstado] = useState("Encendido");
  const [contador, setContador] = useState(-2);

  const handleClic = () => {
     setEstado((prevEstado) =>
       prevEstado === "Encendido" ? "Apagado" : "Encendido"
     );
  };

  useEffect(() => {
    setContador((prevContador) => prevContador + 1);
  }, [estado]);

  return (
    <div>
      <h1>{titulo}</h1>
      <button onClick={handleClic}>{estado}</button>
      <p>Veces pulsado: {contador}</p>
    </div>
  );
};

export default Componente13;
