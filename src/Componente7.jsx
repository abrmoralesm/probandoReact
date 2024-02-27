import React, {useState} from "react";
const Componente7 =({titulo, datos})=>{
  const [indice, setIndice] = useState(0);
  const avanzar=()=>{
    if(indice< datos.length-1){
      setIndice(indice+1)
    }else{
      setIndice(0)
    }
  }
    const retroceder =()=>{
      if(indice>0){
        setIndice(indice-1)
      }else{
        setIndice(datos.length-1)
      }
    
  }
   const { nombre, edad } = datos[indice];
  return (
    <>
      <h1>{titulo}</h1>
      <button onClick={avanzar}>Avanzar</button>
      <button onClick={retroceder}>Retroceder</button>
      <p>{nombre} - {edad}</p>
    </>
  );
}
export default Componente7;
/* import { useState, useEffect } from "react";
import { StyledH1 } from "./StyledComponente11";

const Componente7 = ({ titulo, datos }) => {
  const [indice, setIndice] = useState(0);
  const avanzar = () => {
    if (indice < datos.length - 1) {
      setIndice(indice + 1);
    } else {
      setIndice(0);
    }
  };
  /* const avanzar =()=>{
setIndice((prevIndice)=>(prevIndice < datos.length- 1 ? prevIndice+1:0))
} */

/* const retroceder =()=>{
  setIndice((prevIndice)=>(prevIndice > 0 ? prevIndice-1:datos.length-1))
}
 

  const retroceder = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    } else {
      setIndice(datos.length - 1);
    }
  };
  const { nombre, edad } = datos[indice];
  useEffect(() => {
    document.title = ` ${nombre} ${edad}`;
  }, [nombre, edad]);

  return (
    <div>
      <StyledH1>{titulo}</StyledH1>
      <button onClick={retroceder}>Retroceder</button>
      <button onClick={avanzar}>Avanzar</button>
      <p>
        {nombre} - {edad}
      </p>
    </div>
  );
};
export default Componente7;
*/
