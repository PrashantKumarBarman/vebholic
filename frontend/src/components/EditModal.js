import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

function EditModal(props) {
    let [todo, setTodo] = useState({});

    useEffect(() => {
        setTodo(props.todo);
    }, [props.todo]);

    function handleChange(e) {
        setTodo({ ...todo, text: e.target.value });
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await axios.put(`/todo/${todo._id}`, {
                text: todo.text
            });
            props.updateTodo(todo);
        }
        catch(err) {
            console.log(err);
        }
    }

    if(!todo) {
        return null;
    }
    
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <textarea name="todo" onChange={handleChange} placeholder='Enter text here' className='form-control' value={todo.text} required></textarea>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary"  type="button" onClick={props.handleClose}>Close</Button>
                <Button variant="primary" type="submit">Save changes</Button>
            </Modal.Footer>
            </form>
        </Modal>
    );
}

export default EditModal;