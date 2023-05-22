import React from "react";
import Pikachu from "./images/pikachu.png"
import imagenes from "./imagenes"
import imagenes2 from "./imagenes2"

const Componente6 =({titulo})=>{
    return (
      <div>
        <h1>{titulo}</h1>

        {/*/Forma más simpre */}
        <img src={Pikachu}></img>
        <br></br>
        <img src={imagenes.img1} />
        <img src={imagenes.img2} />
        <img src={imagenes.img3} />
        <br></br>
        { /* Imagenes con imagenes2 */}
        <h2>{imagenes2[1].title}</h2>
        <img src={imagenes2[1].img} />
      </div>
    );
}

export default Componente6