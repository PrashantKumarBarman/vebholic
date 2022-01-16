import { useState, useEffect } from 'react';
import Todo from './Todo';

function TodoList(props) {
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(props.todos);
    }, [props.todos]);

    return (
        <table className='table table-bordered m-1'>
            <thead>
                <tr>
                    <th>Todo</th>
                    <th>Status</th>
                    <th>Created on</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => {
                    return <Todo todo={todo} openEditModal={props.openEditModal} deleteTodo={props.deleteTodo} />;
                })}
            </tbody>
        </table>
    );
}

export default TodoList;