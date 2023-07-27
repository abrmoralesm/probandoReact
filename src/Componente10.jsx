import { useState } from "react";
import React from "react";

const Componente10 = ({ titulo }) => {
const [stateCar, setStateCar] = useState(false);
const encenderApagar = ()=>{
  setStateCar(prevValue=>!prevValue)
}


    
    return (
      <div>
        <h1>{titulo}</h1>
        <h3>El coche está: {stateCar ? "Encencido" : "Apagado"}</h3>
        <button onClick={encenderApagar}>JANDER</button>
      </div>
    );
};
export default Componente10