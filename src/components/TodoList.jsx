import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleToggle, handleDelete }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
}

export default TodoList;