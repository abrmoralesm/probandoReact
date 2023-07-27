import { useState, useEffect } from "react";
import axios from "axios";

const Componente16 = ({ titulo }) => {
  const [name, setName] = useState([]);
  const [officialArtworkUrl, setOfficialArtworkUrl] = useState(null);
  const [homeUrl, setHomeUrl] = useState(null);
  const [officialFemale, setOfficialFemale] = useState(null);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/eevee").then((res) => {
      setName(res.data.name);
      setOfficialArtworkUrl(
        res.data.sprites.other["official-artwork"].front_default
      );
      setHomeUrl(res.data.sprites.other["home"].front_default);
      setOfficialFemale(res.data.sprites.other["home"].front_female);
    });
  }, []);

  return (
    <>
      <h1>{titulo}</h1>
      <div>Name: {name}</div>

      <div>
        <h2>Images</h2>
        <div style={{ display: "inline-block" }}>
          {officialArtworkUrl && (
            <img
              src={officialArtworkUrl}
              alt='Eevee Official Artwork'
              width='200px'
            />
          )}
        </div>
        <div style={{ display: "inline-block" }}>
          {homeUrl && <img src={homeUrl} alt='Eevee Home' width='200px' />}
        </div>
        <div style={{ display: "inline-block" }}>
          {officialFemale && (
            <img src={officialFemale} alt='Eevee Home' width='200px' />
          )}
        </div>
      </div>
    </>
  );
};

export default Componente16;
