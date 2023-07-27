import { useState, useEffect } from "react";

const Componente15 = ({ titulo }) => {
  const [name, setName] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrl1, setImageUrl1] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/eevee")
      .then((res) => res.json())
      .then((res) => {
        setName(res.name);
        setImageUrl(res.sprites.front_default);
        setImageUrl1(res.sprites.back_default);
      });
  }, []);

  return (
    <>
      <h1>{titulo}</h1>
      <p>Name: {name}</p>
      {imageUrl && <img src={imageUrl} alt='Eevee' />}
      {imageUrl1 && <img src={imageUrl1} alt='Eevee' />}
    </>
  );
};

export default Componente15;
