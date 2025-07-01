import React from "react";

function TodoInput({ task, setTask, handleAdd }) {
    return (
        <div className="input-group">
            <input type="text"
                placeholder="Add a task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TodoInput;