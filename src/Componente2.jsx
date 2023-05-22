import React from "react";

const Componente2 = ({titulo,datos})=>{
    const datosFiltraditos =datos.filter(dato=>dato.edad>30);
return (
  <div>
    <h1>{titulo}</h1>
    <ul>
      {datosFiltraditos.map(({ id, nombre, edad }) => (
        <li key={id}>
            {nombre} - {edad} años
        </li>
      ))}
    </ul>
  </div>
);
}

export default Componente2

