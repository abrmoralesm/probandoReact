import React, {useState, useEffect} from "react";


const APIUrl = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
const APIChiste = "https://api.chucknorris.io/jokes/random";

const ComponentePrueba2 = ({titulo}) =>{

    const [fact, setFact] =useState('Eevee')
    const [imgURL, setImgURL] = useState()
    const [chiste, setChiste] = useState()
    
    useEffect(()=>{
        fetch(APIUrl)
          .then((res) => res.json())
          .then((data) => {
            const { fact } = data;
            setFact(fact);

            const threeFirstWords = fact.split(" ", 3).join(" ");
            console.log(threeFirstWords);
            const CAT_END_POINT = `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red&json=true`;

            fetch(CAT_END_POINT)
              .then((res) => res.json())
              .then((response) => {
                const { url } = response;
                setImgURL(url);
              });

              fetch(APIChiste)
              .then((res)=>res.json())
              .then((jar) =>{
                const {value}= jar
                setChiste(value)
              }
              )
          })
       

    },[])
        return(
        <>
        <h1>{titulo}</h1>
        <p>{fact}</p>
        {imgURL &&(<img src={`${CAT_PREFIX_IMAGE_URL}${imgURL}`} alt={`${CAT_PREFIX_IMAGE_URL}${imgURL}`}/>)}
        <p>{chiste}</p>
       
        </>
    )
    
}
export default ComponentePrueba2