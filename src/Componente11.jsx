import React from "react";

const Componente11 = ({onClick}) => {
  // Función que se pasará como prop a App.jsx
 
  return (
    <div>
      <h1>Componente11</h1>
      <button onClick={onClick}>Click Aquí</button>
    </div>
  );
};

export default Componente11;
