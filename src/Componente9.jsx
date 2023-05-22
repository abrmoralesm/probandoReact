import React, { useEffect, useState } from "react";

const Componente12 = () => {
  const [paintings, setPaintings] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState(null);

  useEffect(() => {
    fetchPaintings();
  }, []);

  const fetchPaintings = async () => {
    try {
      const response = await fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Paintings&q=painting"
      );
      const data = await response.json();
      const objectIDs = data.objectIDs;
      const randomObjectIDs = getRandomObjectIDs(objectIDs, 3);
      fetchPaintingDetails(randomObjectIDs);
    } catch (error) {
      console.log("Error al obtener los datos de las pinturas:", error);
    }
  };

  const getRandomObjectIDs = (objectIDs, count) => {
    const randomIndexes = [];
    const randomObjectIDs = [];

    while (randomIndexes.length < count) {
      const randomIndex = Math.floor(Math.random() * objectIDs.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
        randomObjectIDs.push(objectIDs[randomIndex]);
      }
    }

    return randomObjectIDs;
  };

  const fetchPaintingDetails = async (objectIDs) => {
    const promises = objectIDs.map((objectID) =>
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      )
        .then((response) => response.json())
        .catch((error) => {
          console.log(
            `Error al obtener los detalles del objeto ${objectID}:`,
            error
          );
          return null;
        })
    );

    const paintingDetails = await Promise.all(promises);
    const filteredPaintings = paintingDetails.filter(
      (painting) => painting !== null && painting.primaryImage !== ""
    );
    setPaintings(filteredPaintings);
  };

  const handleImageClick = (painting) => {
    setSelectedPainting(painting);
  };

  return (
    <div>
      <h2>Pinturas Aleatorias</h2>
      <div className='paintings-container'>
        {paintings.map((painting) => (
          <div key={painting.objectID} className='painting-item'>
            <img
              src={painting.primaryImage}
              alt={painting.title}
              className='painting-image'
              style={{ maxWidth: "200px" }}
              onClick={() => handleImageClick(painting)}
            />
          </div>
        ))}
      </div>
      {selectedPainting && (
        <div className='painting-details'>
          <h3>{selectedPainting.title}</h3>
          <p>Autor: {selectedPainting.artistDisplayName}</p>
          <p>Año: {selectedPainting.objectDate}</p>
          <p>Descripción: {selectedPainting.creditLine}</p>
        </div>
      )}
    </div>
  );
};

export default Componente12;
