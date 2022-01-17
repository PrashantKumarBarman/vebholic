import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function Todo(props) {

    function openEditModal() {
        props.openEditModal(props.todo);
    }

    async function deleteTodo() {
        try {
            await axios.delete(`/todo/${props.todo._id}`);
            props.deleteTodo(props.todo._id);
        }
        catch(err) {
            console.log(err);
        }
    }

    if(!props.todo) return null;

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.todo.text}</td>
            <td>{props.todo.status}</td>
            <td>{props.todo.createdOn}</td>
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