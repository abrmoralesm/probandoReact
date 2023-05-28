import React, { useState } from "react";

const Componente7 = ({ titulo, datos }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === null || prevIndex === datos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === null || prevIndex === 0 ? datos.length - 1 : prevIndex - 1
    );
  };

  const renderCurrentData = () => {
    if (currentIndex === null) {
      return <p>Pulsa el botón</p>;
    }
    return (
      <div>
        <p>
          {datos[currentIndex].nombre} - {datos[currentIndex].edad} años
        </p>
      </div>
    );
  };

  return (
    <div>
      <h1>{titulo}</h1>

      <button onClick={handlePrevious}>Retrocede</button>
      <button onClick={handleNext}>Avanzar</button>

      {renderCurrentData()}
    </div>
  );
};

export default Componente7;
