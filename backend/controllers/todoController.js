let TodoModel = require('../models/todoModel');

module.exports = {
    /**
     * Adds a new todo
     * @param {Object} req Request object
     * @param {Object} res Response object
     * @returns {void}
     */
    addTodo: async function(req, res) {
        try {
            if(!req.body.text) {
                res.status(400).json({ error: "No todo provided" });
                return;
            }

            let todo = {
                text: req.body.text
            }
            let document = await TodoModel.addTodo(todo);
            res.status(200).json(document);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    /**
     * Updates a todo by id
     * @param {Object} req Request object
     * @param {Object} res Response object
     * @returns {void}
     */
    updateTodo: async function(req, res) {
        try {
            if(!req.body.text) {
                res.status(400).json({ error: "No todo provided" });
                return;
            }
            let todo = {
                text: req.body.text
            }
            await TodoModel.updateTodoById(todo, req.params.id);
            res.sendStatus(200);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    /**
     * Fetches all todos in an array
     * @param {Object} req Request object
     * @param {Object} res Response object
     * @returns {void}
     */
    fetchAllTodos: async function(req, res) {
        try {
            let todos = await TodoModel.getAllTodos();
            res.status(200).json(todos);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    /**
     * Fetches all todos in an array
     * @param {Object} req Request object
     * @param {Object} res Response object
     * @returns {void}
     */
     fetchTodosByStatus: async function(req, res) {
        try {
            let todos = await TodoModel.getTodosByStatus(req.params.status);
            res.status(200).json(todos);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    /**
     * Deletes a todo by id
     * @param {Object} req Request object
     * @param {Object} res Response object
     * @returns {void}
     */
    deleteTodo: async function(req, res) {
        try {
            await TodoModel.deleteTodoById(req.params.id);
            res.sendStatus(200);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    /**
     * Updates a todo status by todo id
     * @param {Object} req Request object
     * @param {Object} res Response object
     * @returns {void}
     */
    updateTodoStatus: async function(req, res) {
        try {
            await TodoModel.updateTodoStatusById(req.params.status, req.params.id);
            res.sendStatus(200);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
};