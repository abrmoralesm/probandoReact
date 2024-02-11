import React from "react";
import datos from "./datos"
import Componente1 from "./Componente1";
import Componente2 from "./Componente2";
import Componente3 from "./Componente3";
import Componente4 from "./Componente4";
import Componente5 from "./Componente5";
import Componente6 from "./Componente6";
import Componente7 from "./Componente7";
import Componente8 from "./Componente8";
import Componente9 from "./Componente9";
import Componente10 from "./Componente10";
import Componente11 from "./Componente11";
import Componente12 from "./Componente12";
import Componente13 from "./Componente13"
import Componente14 from "./Componente14"
import Componente15 from "./Componente15"
import Componente16 from "./Componente16"
import Componente17 from "./Componente17"
import Componente18 from "./Componente18";
import Componente19 from "./Componente19"
import Componente20 from "./Componente20"
import Componente21 from "./Componente21"
import Componente0 from "./Componente0"
import ComponentePrueba from "./ComponentePrueba";
import ComponentePrueba2 from "./ComponentePrueba2";
import PokemonComponent from "./PokemonComponent";











const App = ()=>{

 const handleButtonClick = () => {
   // Lógica de la función
   console.log("Se hizo clic en el botón desde App.jsx");
 
 };
 const jander = ()=>{
  alert("JAR")
 }
 
    return (
      <div style={{ padding: "50px" }}>
        <ComponentePrueba
        titulo='Prueba Técnica' />
        <ComponentePrueba2
        titulo="PROBANDO ANDO" />
        <PokemonComponent />
      <Componente0 
      datos={datos}
      titulo="Componente 0. Pruebas a Tutiplen" />
        <Componente1
          datos={datos}
          titulo='Componente1 Lista Map'
          boton={jander}
        />
        <Componente2 datos={datos} titulo='Componente2 Lista Filtrada' />

        <Componente3
          datos={datos}
          titulo='Componente 3 Lista MAP con archivo dentro'
        />
        <Componente4 titulo='Componente 4 Botón USESTATE' />
        <Componente5 titulo='Componente 5 Formulario' />
        <Componente6 titulo='Componente 6 Imagenes' />
        <Componente7 datos={datos} titulo='Componente7 Lista Map con Botones' />
        <Componente8
          datos={datos}
          titulo='Componente 8.Lista filtrando datos desde componente1'
        />
        <Componente9 datos={datos} titulo='Componente9. Form' />
        <Componente10 titulo='Componente 10. useState False' />
        <Componente11 onClick={handleButtonClick} />
        <Componente12 titulo='Componente 12. Añadiendo datos desde componente1' />
        <Componente13 titulo='Componente 13. Condicional, useState y useEffect' />
        <Componente14 titulo='Componente 14. Formulario con botón' />
        <Componente15 titulo='Componente 15. Pokeapi' />
        <Componente16 titulo='Componente 16. Axios' />
        <Componente17 titulo='Componente 17. 10 primeros pokemons' />
        <Componente18 titulo='Componente 18. PRUEBAS' />
        <Componente19 titulo='Componente 19. Imagen Random NASA' />
        <Componente20 titulo='Componente 20. Imagen NASA Del Día' />
        <Componente21 datos= {datos} titulo='Componente 21' />
       
      </div>
    );
};

export default App;


