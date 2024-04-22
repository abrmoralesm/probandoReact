import React, { useState } from "react";

const Componente7 = ({ titulo, datos }) => {
  const [indice, setIndice] = useState(0);
  const [chiste, setChiste] = useState(null);
const [counter, setCounter] = useState(0);
  const avanzar = () => {
    if (indice < datos.length - 1) {
      setIndice(indice + 1);
    } else {
      setIndice(0);
    }
  };


  const retroceder = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    } else {
      setIndice(datos.length - 1);
    }
  };
  const { nombre, edad } = datos[indice];

  const otroChiste = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setChiste(data.value);
      });
  };
  const sumar =()=> {
    setCounter(counter+1)
  }

  return (
    <>
      <h1>{titulo}</h1>
      <p>Contador :{counter}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={()=>setCounter(counter-1)}>Restar</button>
      <button onClick={otroChiste}>Otro</button>
      <p>{chiste}</p>
      <button onClick={avanzar}>Avanzar</button>
      <button onClick={retroceder}>Retroceder</button>
      <p>
        {nombre}- {edad}
      </p>
    </>
  );
};
export default Componente7;
/* import React, { useState } from "react";
const Componente7 = ({ titulo, datos }) => {
  const [indice, setIndice] = useState(0);
  const avanzar = () => {
    if (indice < datos.length - 1) {
      setIndice(indice + 1);
    } else {
      setIndice(0);
    }

  };
      const retroceder = () => {
        if (indice > 0) {
          setIndice(indice - 1);
        } else {
          setIndice(datos.length - 1);
        }
      };
    const { nombre, edad } = datos[indice];

  return (
    <>
      <h1>{titulo}</h1>
      <button onClick={avanzar}>Avanzar</button>
      <button onClick={retroceder}>Retroceder</button>
      <h5>
        {nombre} - {edad}
      </h5>
    </>
  );
};

export default Componente7;
*/

