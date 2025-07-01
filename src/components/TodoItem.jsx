import React from "react";

function TodoItem({ todo, handleToggle, handleDelete }) {
    return (
        <li className={todo.done ? "done" : ""}>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggle(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
        </li>
    );
}

export default TodoItem;
