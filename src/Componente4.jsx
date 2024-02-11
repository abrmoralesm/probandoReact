import React, { useState } from "react";

const Componente4 = ({ titulo }) => {
  const [numero, setNumero] = useState(0);
  const [condicion, setCondicion] = useState(true);

  const handleClick = () => {
    setNumero(numero + 1);
    setCondicion(!condicion); // Cambiar el valor de la condición a su opuesto
  };

  return (
    <div>
      <h1>{titulo}</h1>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "red";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "blue";
        }}
        onMouseDown={(e) => {
          e.target.style.backgroundColor = "green";
        }}
        onMouseUp={(e) => {
          e.target.style.backgroundColor = "red";
        }}
      >
        Has pulsado {numero} veces
      </button>
      {condicion ? <p>Hola</p> : <p>Adios</p>}
    </div>
  );
};

export default Componente4;
