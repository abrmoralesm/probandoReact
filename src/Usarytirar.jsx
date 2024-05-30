 import React, { useState } from "react";

 const Usarytirar =({titulo})=>{
  const initialState={
    nombre:"",
    apellidos:"",
    email:"",
  }
  const [formulario,setFormulario] = useState(initialState)
  const [mostrar,setMostrar]= useState(initialState)

  const handleInput=(e)=>{
    const {name,value}=e.target
    setFormulario((prevState)=>({
      ...prevState,
      [name]:value
    }))
   }
  const mostrarClick=()=>{
    setMostrar(formulario)
  }
  const {nombre,apellidos,email}= mostrar
  return(
    <>
    <h1>{titulo}</h1>
    <form>
      <label>Nombre:
        <input
        name="nombre"
        value={formulario.nombre}
        onChange={handleInput} />
      </label>
      <label>Apellidos:
        <input
        name="apellidos" 
        value={formulario.apellidos}
        onChange={handleInput}/>
      </label>
      <label>Email:
      <input
      name="email"
      value={formulario.email}
      onChange={handleInput} />
      </label>
    </form>
    <button onClick={mostrarClick} >Mostrar</button>
    Nombre: {nombre} Apellidos: {apellidos} Email: {email}
    </>
  )
 }
 export default Usarytirar
 /*
 import React, { useState } from "react";
const Usarytirar = ({ titulo }) => {
   const initialState = {
     nombre: "",
     apellidos: "",
     email: "",
   };

  const [formulario, setFormulario]  = useState(initialState);
  const [mostrar,setMostrar] = useState(initialState);


  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const mostrarClick = () => {
    setMostrar(formulario);
  };
  const limpiarClick=()=>{
    setFormulario(initialState)
    setMostrar(initialState)
  }
  const { nombre, apellidos, email } = mostrar;
  return (
    <>
      <h1>{titulo}</h1>
      <form>
        <label>
          Nombre:
          <input
            name='nombre'
            value={formulario.nombre}
            onChange={handleInput}
          />
        </label>
        <label>
          Apellidos:
          <input
            name='apellidos'
            value={formulario.apellidos}
            onChange={handleInput}
          />
        </label>
        <label>
          Email:
          <input name='email' value={formulario.email} onChange={handleInput} />
        </label>
      </form>
      
      <button onClick={mostrarClick}>Mostrar</button>
      <button onClick={limpiarClick}>Limpiar</button>
      <br/>
      Nombre: {nombre} -  Apellidos:{apellidos}  - Email:{email}
    </>
  );
};
export default Usarytirar;

*/