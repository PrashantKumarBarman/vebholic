import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Todo(props) {
    let [todo, setTodo] = useState({});

    useEffect(() => {
        setTodo(props.todo);
    }, [props.todo]);

    function openEditModal() {
        props.openEditModal(props.todo);
    }

    async function deleteTodo() {
        try {
            await axios.delete(`/todo/${todo._id}`);
            props.deleteTodo(todo._id);
        }
        catch(err) {
            console.log(err);
        }
    }

    async function updateTodoStatus(e) {
        try {
            setTodo({ ...todo, status: e.target.value });
            props.updateTodoStatus(todo._id, e.target.value);
            await axios.put(`/todo/${todo._id}/status/${e.target.value}`);
        }
        catch(err) {
            console.log(err);
        }
    }

    if(!todo) return null;

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{todo.text}</td>
            <td>
                <select value={todo.status} onChange={updateTodoStatus} className='form-control'>
                    <option value='Active'>Active</option>
                    <option value='Completed'>Completed</option>
                </select>
            </td>
            <td>{todo.createdOn}</td>
            <td>
                <button className='btn btn-success' onClick={openEditModal}>
                <FontAwesomeIcon icon={faEdit} className='iconbtn'/>Edit
                </button>
            </td>
            <td>
                <button className='btn btn-danger' onClick={deleteTodo}>
                <FontAwesomeIcon icon={faTrashAlt} className='iconbtn'/>Delete
                </button>
            </td>
        </tr>
    );
}

export default Todo;