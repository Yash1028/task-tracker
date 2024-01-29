// Task.js
import React from 'react';

const Task = ({ task, onDelete, onComplete }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            <span>{task.name}</span>
            <span>{task.dateAdded}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onComplete(task.id)}>Complete</button>
        </div>
    );
};

export default Task;
