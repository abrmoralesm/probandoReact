import React, { useEffect, useState } from "react";

const Componente12 = () => {
  const [paintings, setPaintings] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState(null);

  useEffect(() => {
    fetchPaintings();
  }, []);

  const fetchPaintings = async () => {
    try {
      let fetchedPaintings = [];

      while (fetchedPaintings.length < 3) {
        const response = await fetch(
          "https://collectionapi.metmuseum.org/public/collection/v1/search?showOnly=withImage&medium=Paintings&q=painting"
        );
        const data = await response.json();
        const objectIDs = data.objectIDs;
        const randomObjectID = getRandomObjectID(objectIDs);
        const painting = await fetchPaintingDetails(randomObjectID);
        fetchedPaintings.push(painting);
      }

      setPaintings(fetchedPaintings);
    } catch (error) {
      console.log("Error al obtener los datos de las pinturas:", error);
    }
  };

  const getRandomObjectID = (objectIDs) => {
    const randomIndex = Math.floor(Math.random() * objectIDs.length);
    return objectIDs[randomIndex];
  };

  const fetchPaintingDetails = async (objectID) => {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(
        `Error al obtener los detalles del objeto ${objectID}:`,
        error
      );
      return null;
    }
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
          <h3>Título: {selectedPainting.title}</h3>
          <p>Autor: {selectedPainting.artistDisplayName}</p>
          <p>Año: {selectedPainting.objectDate}</p>
          <p>Descripción: {selectedPainting.creditLine}</p>
        </div>
      )}
    </div>
  );
};

export default Componente12;
