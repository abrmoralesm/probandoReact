import React, { useEffect, useState } from "react";
import { getRandomPaintings, getImageDetails } from "./MetropolitanApi";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const DefaultImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Componente10 = () => {
  const [paintings, setPaintings] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      const data = await getRandomPaintings(5);
      setPaintings(data);
      setIsLoading(false);
    };

    fetchPaintings();
  }, []);

  const handleImageClick = async (objectId) => {
    const paintingDetails = await getImageDetails(objectId);
    setSelectedPainting(paintingDetails);
  };

  const getValidImageUrl = (url) => {
    return url
      ? url
      : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png";
  };

  return (
    <div>
      <h1>Mostrar 5 pinturas aleatorias</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ImageContainer>
          {paintings.length > 0 ? (
            paintings.map((painting) => (
              <Image
                key={painting.objectID}
                src={getValidImageUrl(painting.primaryImageSmall)}
                alt={painting.title}
                onClick={() => handleImageClick(painting.objectID)}
              />
            ))
          ) : (
            <DefaultImage
              src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png'
              alt='Imagen predeterminada'
            />
          )}
        </ImageContainer>
      )}

      {selectedPainting && (
        <div>
          <h2>{selectedPainting.title}</h2>
          <p>Artist: {selectedPainting.artistDisplayName}</p>
          <p>Artist Bio: {selectedPainting.artistDisplayBio}</p>
          <p>Department: {selectedPainting.department}</p>
          <p>Objecta Date: {selectedPainting.objectDate}</p>
        </div>
      )}
    </div>
  );
};

export default Componente10;
