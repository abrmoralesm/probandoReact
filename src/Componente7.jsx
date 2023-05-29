import React, { useState } from "react";

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
    <div>
      <h2>{titulo}</h2>
      <button onClick={retroceder}>Retroceder</button>
      <button onClick={avanzar}>Avanzar</button>
      <div>
        <div>
          <p>
            {nombre} - {edad}
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Componente7;
