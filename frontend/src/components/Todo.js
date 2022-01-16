import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function Todo(props) {
    let [todo, setTodo] = useState(null);

    useEffect(() => {
        setTodo(props.todo);
    }, [props.todo]);

    function openEditModal() {
        props.openEditModal(todo._id);
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

    if(!todo) return null;

    return (
        <tr>
            <td>{todo.text}</td>
            <td>{todo.status}</td>
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