import datos from "./datos";
import React from "react";
const Componente3 = ({ titulo }) => {
  return (
    <>
      <h1>{titulo}</h1>
      {datos.map(({ id, nombre, edad }) => (
        <ul>
          <li key={id}>
            {nombre.slice(0, 2)}
            {nombre.charAt(2).toUpperCase()}
            {nombre.slice(3)}-{edad}
          </li>
        </ul>
      ))}
    </>
  );
};
export default Componente3;
/*import datos from "./datos"

const Componente3 =({titulo})=>{

  return (
<>
<h1>{titulo}</h1>
{datos.map(({id, nombre, edad})=>(
  <ul>
    <li key={id}>
      {nombre}-{edad}
    </li>
  </ul>
))}

</>
  )
}

export default Componente3

*/
