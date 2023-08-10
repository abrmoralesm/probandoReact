import React, { useState, useEffect } from "react";

const Componente19 = () => {
  const [randomApodData, setRandomApodData] = useState(null);
  const [randomDate, setRandomDate] = useState(null);

  const startDate = "1995-06-16"; // Fecha en que comenzó APOD
  const endDate = "2023-08-06"; // Fecha actual

  useEffect(() => {
    const apiKey = "613CmhLwaHswb51O0SbA2u2HcOiu6BCfn4hePPf6";

    const dateToFetch = randomDate || generateRandomDate(startDate, endDate);

    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateToFetch}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRandomApodData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [randomDate]);

  const generateRandomDate = (startDate, endDate) => {
    const startTimestamp = new Date(startDate).getTime();
    const endTimestamp = new Date(endDate).getTime();
    const randomTimestamp =
      Math.random() * (endTimestamp - startTimestamp) + startTimestamp;
    return new Date(randomTimestamp).toISOString().split("T")[0];
  };

  const handleNewImageClick = () => {
    const newRandomDate = generateRandomDate(startDate, endDate);
    setRandomDate(newRandomDate);
  };

  if (!randomApodData) {
    return <div>Loading...</div>;
  }

  const { date, url, title, explanation } = randomApodData;
console.log(randomApodData);
  return (
    <div>
      <h2>{title}</h2>
      <img src={url} alt='Random APOD' style={{ width: "500px" }} />
      <p>{explanation}</p>
      <p>Date: {date}</p>
      <button onClick={handleNewImageClick}>Get New Image</button>
    </div>
  );
};

export default Componente19;
