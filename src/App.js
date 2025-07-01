import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: task, done: false }]);
      setTask("");
    }
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoInput task={task} setTask={setTask} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete} />
    </div>
  )
}

export default App;