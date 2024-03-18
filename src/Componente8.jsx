import React from "react";
import Componente1 from "./Componente1";

const Componente8 = ({ titulo, datos }) => {
  const datosFiltrados = datos.filter((dato) => dato.edad > 35);

  return (
    <div>
      <h1>{titulo}</h1>
      <Componente1  datos={datosFiltrados} />
    </div>
  );
};

export default Componente8;
