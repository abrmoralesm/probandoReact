import React from "react";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-3011",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-3011",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-3011",
    important: true,
  },
];

const Note =({id, content, date})=>{
  return (
    <ul key={id}>
      <li key={id}>
        <p>{content}</p>
        <small>
          <time>{date}</time>
        </small>
      </li>
    </ul>
  );
}
const BootCamp4 = ({titulo}) => {
   

  return (
    <>
      <h1>{titulo}</h1>
      <ol>

        {notes.map((note) =><Note note={note.id} content={note.content} date={note.date}/> 
         
        )}
      </ol>
    </>
  );
};

export default BootCamp4;
