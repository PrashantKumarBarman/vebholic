import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

function AddModal(props) {
    let [todo, setTodo] = useState('');

    function handleChange(e) {
        setTodo(e.target.value);
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            let result = await axios.post('/todo', {
                text: todo
            });
            props.addTodo(result.body);
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <textarea name="todo" onChange={handleChange} placeholder='Enter text here' className='form-control' value={todo} required></textarea>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary"  type="button" onClick={props.handleClose}>Close</Button>
                <Button variant="primary" type="submit">Save changes</Button>
            </Modal.Footer>
            </form>
        </Modal>
    );
}

export default AddModal;