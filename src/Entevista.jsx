import React, { useState } from "react";
import "./Entrevista.css";

const Entrevista = ({ titulo }) => {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Estado para almacenar el filtro actual (todas, activas, completadas)
  const [filter, setFilter] = useState("all");

  // Estado para almacenar el texto de la nueva tarea introducido en el campo de entrada
  const [newTaskText, setNewTaskText] = useState("");

  // Función para añadir una nueva tarea a la lista
  const addTask = () => {
    // Verificar si el campo de entrada no está vacío
    if (newTaskText.trim()) {
      // Crear una nueva tarea con un ID único
      const newTask = {
        id: Date.now(),
        title: newTaskText.trim(),
        completed: false,
      };
      // Añadir la nueva tarea a la lista de tareas
      setTasks([...tasks, newTask]);
      // Limpiar el campo de entrada después de añadir la tarea
      setNewTaskText("");
    }
  };

  // Función para cambiar el estado de completado de una tarea
  const toggleTask = (id) => {
    // Actualizar el estado de las tareas cambiando el estado de completado de la tarea correspondiente
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea de la lista
  const deleteTask = (id) => {
    // Filtrar las tareas para excluir la tarea que se va a eliminar
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filtrar las tareas según el filtro seleccionado
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // Función para renderizar la lista de tareas
  const renderTasks = () => {
    return filteredTasks.map((task) => (
      <div key={task.id} onClick={() => toggleTask(task.id)}>
        {/* Mostrar el título de la tarea y aplicar estilo de tachado si está completada */}
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.title}
        </span>
        {/* Botón para eliminar la tarea */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          X
        </button>
      </div>
    ));
  };

  return (
    <div className='Entrevista'>
      <h1>{titulo}</h1>
      <h1>Lista de Tareas</h1>
      {/* Campo de entrada para la nueva tarea y botón para agregar */}
      <div>
        <input
          type='text'
          placeholder='Nueva tarea'
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      {/* Lista de tareas */}
      <div>{renderTasks()}</div>
      {/* Botones de filtro */}
      <div>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("active")}>Activas</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>
      </div>
    </div>
  );
};

export default Entrevista;
