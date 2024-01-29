// TaskList.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Task from './task';

const TaskList = ({ tasks, onDelete, onComplete, filterStatus }) => {
    const filteredTasks = tasks.filter(task => {
        if (filterStatus === 'all') {
            return true;
        } else if (filterStatus === 'completed') {
            return task.completed;
        } else {
            return !task.completed;
        }
    });

    return (
        <div className="task-list">
            {filteredTasks.map(task => (
                <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
            ))}
        </div>
    );
};
export default TaskList;
