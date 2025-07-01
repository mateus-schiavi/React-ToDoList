import React from "react";

function TodoItem({ todo, handleToggle, handleDelete }) {
    return (
        <li className={todo.done ? "done" : ""}>
            <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
        </li>
    )
}

export default TodoItem;