import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddModal from './components/AddModal';
import EditModal from './components/EditModal';
import axios from 'axios';

function App() {
  let [todos, setTodos] = useState([]);
  let [showAddModal, setShowAddModal] = useState(false);
  let [showEditModal, setShowEditModal] = useState(false);
  let [editId, setEditId] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  function toggleAddModal() {
    setShowAddModal(!showAddModal);
  }

  function addTodo(todo) {
    let temp = [todo, ...todos];
    setTodos(temp);
  }

  function updateTodo(todo) {
    let temp = [...todos];
    for(let i = 0; i < todos.length; i++) {
      if(todos[i]._id === todo._id) {
        todos[i].text = todo.text;
      }
    }
    setTodos(temp);
  }

  function deleteTodo(todoId) {
    let temp = todos.filter((element) => {
      return element._id !== todoId;
    })
    setTodos(temp);
  }

  function toggleEditModal() {
    setShowEditModal(!showEditModal);
  }

  function openEditModal(id) {
    setEditId(id);
    setShowEditModal(!showEditModal);
  }

  async function fetchTodos() {
    try {
      let response = await axios.get('/todo');
      setTodos(response.data);
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="container-fluid">
      <Header openAddModal={toggleAddModal} />
      <AddModal show={showAddModal} handleClose={toggleAddModal} addTodo={addTodo} />
      <EditModal show={showEditModal} handleClose={toggleEditModal} todos={todos} todoId={editId} updateTodo={updateTodo} />
      <TodoList todos={todos} openEditModal={openEditModal} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
