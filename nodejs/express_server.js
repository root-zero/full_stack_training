const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory task storage
let tasks = [];

// Route to create a new task
app.post('/tasks', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Task name is required' });
    }
    const task = { id: tasks.length + 1, name };
    tasks.push(task);
    res.status(201).json(task);
});

// Route to delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
});

// Route to get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
