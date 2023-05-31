import React from "react";

const Componente2 =({titulo,datos})=>{

  const datosFiltraditos = datos.filter(dato=>dato.edad>30);
  return(
    <div>
      <h1>{titulo}</h1>
      {datosFiltraditos.map(({id,nombre,edad})=>(
        <li key={id}>
          {nombre} - {edad}
        </li>
      ))}
    </div>
  )
}
export default Componente2;