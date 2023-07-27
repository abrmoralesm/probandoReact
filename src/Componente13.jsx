import React, { useState, useEffect } from "react";
import {Button} from "./StyledComponente11"

const Componente13 = ({ titulo }) => {
  const [estado, setEstado] = useState("Apagado");
  const [contador, setContador] = useState(-2);

 const handleClic = ()=>{
    setEstado((prevEstado)=>
    prevEstado === "Apagado" ? "Encandido" : "Apagado")
 }

 
  useEffect(() => {
    setContador((contador) => contador + 1);
  }, [estado]);

  return (
    <div>
      <h1>{titulo}</h1>
      <Button onClick={handleClic}>{estado}</Button>
      <p>{estado}</p>
      <p>Veces pulsado: {contador}</p>
    </div>
  );
};

export default Componente13;
