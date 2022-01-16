const mongoose = require('../db');

const TodoSchema = mongoose.Schema({
    text: { type: String, required: true },
    status: { type: String, default: 'active' },
    createdOn: { type: Date, default: Date.now, index: true }
});

const TodoModel = mongoose.model('todos', TodoSchema);

module.exports = {
    /**
     * Add a new todo
     * @param {Object} todo Todo object 
     * @returns {Promise<Object|null>} Promise object which resolves to new document if insertion is successful else resolves to null
     */
    addTodo: async function(todo) {
        try {
            let document = new TodoModel(todo);
            await document.save();
            return document;
        }
        catch(err) {
            console.log(err);
            return null;
        }
    },
    /**
     * Update a todo by id
     * @param {Object} todo Updated todo document 
     * @param {String} id Id of the todo document
     * @returns {Promise<true|false>} Promise object which resolves to true on successful updation else will resolve to false
     */
    updateTodoById: async function(todo, id) {
        try {
            await TodoModel.updateOne({ _id: mongoose.Types.ObjectId(id) }, { "$set": todo }).exec();
            return true;
        }
        catch(err) {
            console.log(err);
            return false;
        }
    },
    /** 
     * Returns array of all the todos
     * @returns {Promise<Array<Object>>} Promise object which resolves to array of todos
     */
    getAllTodos: async function() {
        try {
            let todos = await TodoModel.find({}).sort({ createdOn: -1 }).exec();
            return todos;
        }
        catch(err) {
            console.log(err);
            return [];
        }
    },
    /**
     * Deletes a todo by id
     * @param {String} id Deletes a todo by id
     * @returns {Promise} Promise object which resolves to true if deletion is successful else resolves to false 
     */
    deleteTodoById: async function(id) {
        try {
            await TodoModel.deleteOne({ _id: mongoose.Types.ObjectId(id) }).exec();
            return true;
        }
        catch(err) {
            console.log(err);
            return false;
        }
    },
    /**
     * Update a todo status by todo id
     * @param {String} status Updated todo status
     * @param {String} id Id of the todo document
     * @returns {Promise<true|false>} Promise object which resolves to true on successful updation else will resolve to false
     */
     updateTodoStatusById: async function(status, id) {
        try {
            await TodoModel.updateOne({ _id: mongoose.Types.ObjectId(id) }, { "$set": { status: status } }).exec();
            return true;
        }
        catch(err) {
            console.log(err);
            return false;
        }
    }
};