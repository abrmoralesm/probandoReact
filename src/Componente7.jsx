import React from "react";
import { useState } from "react";

const Componente7 = ({ titulo, datos }) => {
  const [indice, setIndice] = useState(0);
  const avanzar = () => {
    if (indice < datos.length - 1) {
      setIndice(indice + 1);
    } else {
      setIndice(0);
    }
  };

  const retroceder = () =>{
    if (indice>0){
      setIndice(indice-1);
    }else {
      setIndice(datos.length-1)
    }
  }
  const {nombre,edad}= datos[indice]
  return (
    <div>
      <h1>{titulo}</h1>
      <button onClick={retroceder}>Retroceder</button>
      <button onClick={avanzar}>Avanzar</button>
      <div>
        <p>{nombre} - {edad}</p>
      </div>
    </div>
  );
};

export default Componente7;
