import React, {useState} from "react";
const Componente4 = ({titulo})=>{
  const [numero, setNumero] = useState(0);
  const [condicion, setCondicion] = useState(false);
  const handleClick =()=>{
    setNumero (numero+1);
    setCondicion(!condicion);
  }
  return(
    <>
    <h1>{titulo}</h1>
    <button onClick={handleClick}>Has pulsado {numero} veces</button>
    {condicion ? <p>Encendido</p> : <p>Apagado</p>}
    </>
  )
}
export default Componente4
/*
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
        onClick={handleClick}>
        Has pulsado {numero} veces
      </button>
      {condicion ? <p>Hola</p> : <p>Adios</p>}
    </div>
  );
};

export default Componente4;
*/
