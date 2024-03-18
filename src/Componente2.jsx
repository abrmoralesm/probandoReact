import React from "react";
const Componente2 =({datos, titulo})=>{
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
export default Componente2;



/*

import React, {useState, useEffect} from "react";
const Componente2=({titulo})=>{
  const [posts, setPosts] = useState(null) 
  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>res.json())
.then((data)=>{
   const firstTenPosts = data.slice(0, 10);
   setPosts(firstTenPosts);
})
  },[])
  return (
    <>
      <h1>{titulo}</h1>
      {posts && posts.map((post) => (<div key={post.id}>
        <h1>{post.id}</h1>
        <h2>{post.title}</h2>
      </div>))}
    </>
  );
}
export default Componente2

import React, { useState, useEffect } from "react";
const Componente2 = ({ titulo }) => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <>
      <h1>{titulo}</h1>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
          </div>
        ))}
    </>
  );
};
export default Componente2;
*/

