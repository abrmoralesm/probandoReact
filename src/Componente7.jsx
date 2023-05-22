import React, { useState } from "react";

const Componente7 = ({ titulo, datos }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === datos.length - 1) {
        return 0; // Si es el último elemento, volvemos al principio
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === 0) {
        return datos.length - 1; // Si es el primer elemento, vamos al último
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div>
      <h1>{titulo}</h1>

      <button onClick={handlePrevious}>Retroceder</button>
      <button onClick={handleNext}>Avanzar</button>
      {currentIndex === null ? (
        <p>Pulsa el botón</p>
      ) : (
        <div>
          <p>
            {datos[currentIndex].nombre} - {datos[currentIndex].edad} años
          </p>
        </div>
      )}
    </div>
  );
};

export default Componente7;
