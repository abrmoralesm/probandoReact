import React, {useState, useEffect} from "react";

const Componente22 = ({ titulo }) => {
  const [characters, setCharacters] = useState([]);

 useEffect(() => {
   fetch("https://rickandmortyapi.com/api/character")
     .then((res) => res.json())
     .then((data) => {
       setCharacters(data.results); 
     })
     .catch((error) => {
       console.error("Error fetching characters:", error);
     });
 }, []); 
/*
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);
*/
  return (
    <div>
        <h1>{titulo}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {characters.map((character) => (
          <div key={character.id} style={{ margin: "10px" }}>
            <img
              src={character.image}
              alt={character.name}
              style={{ width: "200px", height: "200px" }}
            />
            <p>{character.name}</p>
            <p>{character.species}</p>
       
          </div>
        ))}
      </div>
    </div>
  );
};
export default Componente22