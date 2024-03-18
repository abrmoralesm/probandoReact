import React, { useState } from "react";

const Entrevista =({titulo})=>{
    const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="App">
        <h1>{titulo}</h1>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <div>
        {filteredTasks.map(task => (
          <div key={task.id} onClick={() => toggleTask(task.id)}>
            {task.completed ? <strike>{task.title}</strike> : task.title}
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('active')}>Activas</button>
        <button onClick={() => setFilter('completed')}>Completadas</button>
      </div>
    </div>
  );

}


export default Entrevista