import React, {useState} from "react";

const ComponentePrueba2 =({titulo})=>{
     const APIUrl = "https://api.chucknorris.io/jokes/random";

     const [fact, setFact] = useState('');
     const [buttonMostrar, setButtonMostrar] = useState('Ver chiste')

     const chisteRandom=()=>{
      fetch(APIUrl)
      .then(res=>res.json())
      .then(data=>{
        setFact(data.value)
        setButtonMostrar('Otro')
      })
     }
  return(
    <>
    <h1>{titulo} </h1>
    {fact}
    <button onClick={chisteRandom}>{buttonMostrar}</button>
    </>
  )
}
export default ComponentePrueba2

/*import React, {useState} from "react";
const ComponentePrueba2 =({titulo})=>{
   const APIUrl = "https://api.chucknorris.io/jokes/random";
   const [fact, setFact] = useState(null);
   const [buttonText, setButtonText] = useState("MOSTRAR");

   const chisteRandom =()=>{
    fetch(APIUrl)
    .then(res=>res.json())
    .then(data=>{
      setFact(data.value);
      setButtonText("OTRO");
    })
   }

  return (
    <>
      <h1>{titulo}</h1>
      <p>{fact}</p>
      <button onClick={chisteRandom}>{buttonText}</button>
    </>
  );
}
export default ComponentePrueba2;

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
a

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

*/
