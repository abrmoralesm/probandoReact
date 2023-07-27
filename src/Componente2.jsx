const Componente2 = ({titulo, datos})=>{

  const datosFiltraditos= datos.filter((dato)=>dato.edad>30)
return(
  <>
  <h1>{titulo}</h1>
  <ul>
    {datosFiltraditos.map(({id, nombre, edad})=>(
      <li key={id}>
        {nombre} - {edad}
      </li>
    ))}
  </ul>
  </>
)
}

export default Componente2