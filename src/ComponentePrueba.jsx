import React, { useState, useEffect } from "react";

const APIUrl = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
const ComponentePrueba = ({ titulo }) => {
  const [fact, setFact] = useState("lore ipsum");
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(APIUrl)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        
        const threeFirstWords = fact.split(" ", 3).join(" ");
        console.log(threeFirstWords);
        const CAT_ENDPOINT_IMAGE_URL = `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red&json=true`;

        fetch(CAT_ENDPOINT_IMAGE_URL)
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setImageUrl(url);
          });
      });
  }, []);

  return (
    <>
      <h1>{titulo}</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image for ${fact}`}
        />
      )}
    </>
  );
};

export default ComponentePrueba;
