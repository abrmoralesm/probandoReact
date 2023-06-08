import React from "react";


const Componente1 = ({titulo, datos})=>{
    return(
        <div>
            <h1>{titulo}</h1>
            <ul>
                {datos.map(({id,nombre,edad})=>(
                    <li key={id}>
                        {nombre} - {edad}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Componente1