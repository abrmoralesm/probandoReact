import datos from "./datos"

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