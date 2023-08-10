import React, { useState, useEffect } from "react";

const Componente20 = ({titulo}) => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const apiKey = "613CmhLwaHswb51O0SbA2u2HcOiu6BCfn4hePPf6";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setApodData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!apodData) {
    return <div>Loading...</div>;
  }

  const { date, url, title, explanation } = apodData;
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>{title}</h2>
      <img src={url} alt='NASA APOD' style={{ width: "500px" }} />
      <p>Date: {date}</p>
      <p>{explanation}</p>
    </div>
  );
};

export default Componente20;



