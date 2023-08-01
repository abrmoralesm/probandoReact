import { useState, useEffect } from "react";

const Componente18 = ({ titulo }) => {
  const [value, setValue] = useState(null);
  const [name, setName] = useState(null);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      });
  }, []);

  const obtenerNuevoChiste = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setValue(data.value);
      });
  };

  useEffect(() => {
    obtenerNuevoChiste();
  }, []);

  return (
    <>
      <h1>{titulo}</h1>
      {value}
      <button onClick={obtenerNuevoChiste}>Nuevo chiste</button>
      <br/>
      {name}
      {post.slice(0, 5).map((post) => (
        <div key={post.id}>
            <h2>{post.id}</h2>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Componente18;
