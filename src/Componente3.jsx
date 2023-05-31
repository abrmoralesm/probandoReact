import React from "react";
import datos from "./datos"

const Componente3 = ({titulo}) =>{
  return (
    <div>
      <h1>{titulo}</h1>
    <ul>
      {datos.map(({id, nombre, edad})=>(
        <li key={id}>
          {nombre} - {edad}
        </li>
      ))}
    </ul>
    </div>
  );
}
export default Componente3;