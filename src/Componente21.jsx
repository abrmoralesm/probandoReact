import React, { useState } from "react";
import "./Componente21.css"; 

const Componente21 = ({ titulo, datos }) => {

  const [multiplications, setMultiplications] = useState(
    generateMultiplications()
  );
  const [results, setResults] = useState(new Array(10).fill(""));
  const [score, setScore] = useState(0);
  const [showEevee, setShowEevee] = useState(false);
  const [showCubone, setShowCubone] = useState(false);

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function generateMultiplications() {
    const newMultiplications = [];
    for (let i = 0; i < 10; i++) {
      const num1 = generateRandomNumber(100);
      const num2 = generateRandomNumber(10);
      const result = num1 * num2;
      newMultiplications.push({ num1, num2, result });
    }
    return newMultiplications;
  }

  function handleAnswerChange(index, event) {
    const newResults = [...results];
    newResults[index] = event.target.value;
    setResults(newResults);
  }

  function checkAnswers() {
    const newResults = results.map((value, index) => {
      return value === String(multiplications[index].result) ? "OK" : "FALLO";
    });

    const newScore = newResults.filter((result) => result === "OK").length;
    setResults(newResults);
    setScore(newScore);

    if (newScore === 10) {
      setShowEevee(true);
      setShowCubone(false);
    } else if (newScore < 10) {
      setShowEevee(false);
      setShowCubone(true);
    }
  }

  function generateNewMultiplications() {
    setMultiplications(generateMultiplications());
    setResults(new Array(10).fill(""));
    setScore(0);
    setShowEevee(false);
    setShowCubone(false);
  }
      const datosFiltraditos = datos.filter((dato) => dato.edad > 30);
console.log("datos prop:", datos); // Log the datos prop
console.log("datosFiltraditos:", datosFiltraditos)
  return (
    <div className='component-container'>
      <h1>{titulo}</h1>
      <h1>Tabla de multiplicar</h1>
      {multiplications.map((multiplication, index) => (
        <div key={index}>
          <span>
            {multiplication.num1} x {multiplication.num2} ={" "}
          </span>
          <input
            type='number'
            value={results[index]}
            onChange={(event) => handleAnswerChange(index, event)}
          />
          <span>{results[index]}</span>
        </div>
      ))}
      <button onClick={checkAnswers}>Comprobar respuestas</button>
      <button onClick={generateNewMultiplications}>Otras 10</button>
      <p>ACIERTOS: {score}/10</p>
      {showEevee && (
        <div className='pokemon-container'>
          <img
            className='pokemon-image'
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
            alt='Eevee'
          />
          <div className='congratulations'>FELICIDADES HAS ACERTADO</div>
        </div>
      )}
      {showCubone && (
        <div className='pokemon-container'>
          <img
            className='pokemon-image'
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png'
            alt='Cubone'
          />
          <div className='failure'>HAS FALLADO</div>
        </div>
      )}
      <ul>
        {datosFiltraditos.map(({ id, nombre, edad }) => (
          <li key={id}>
            {nombre} - {edad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Componente21;
