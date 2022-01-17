const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Router for fetching all todos by status
router.get('/todo/status/:status', todoController.fetchTodosByStatus);

// Route for fetching all todos
router.get('/todo', todoController.fetchAllTodos);

// Route for adding a todo
router.post('/todo', todoController.addTodo);

// Route for updating a todo status
router.put('/todo/:id/status/:status', todoController.updateTodoStatus);

// Route for updating a todo by id
router.put('/todo/:id', todoController.updateTodo);

// Route for deleting a todo by id
router.delete('/todo/:id', todoController.deleteTodo);

module.exports = router;