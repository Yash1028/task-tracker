// App.js
import React, { useState, useEffect } from 'react';
import TaskList from './tasklist';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [newTask, setNewTask] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    const addTask = () => {
        if (newTask.trim() === '') return;

        // Move the definition of newTaskObject inside addTask
        const newTaskObject = {
            id: uuidv4(),
            name: newTask,
            dateAdded: new Date().toLocaleDateString(),
            completed: false,
        };
        setTasks([...tasks, newTaskObject]);
        setNewTask('');
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));

        //update tasks state
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const completeTask = (taskId) => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)); };

    return (
        <div className="app">
            <h1>Task Manager</h1>
            <div>
                <label>Filter: </label>
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
            <input
                type="text"
                placeholder="New Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} filterStatus={filterStatus} />
        </div>
    );
};

export default App;
