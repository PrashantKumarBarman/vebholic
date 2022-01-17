import Todo from './Todo';

function TodoList(props) {

    return (
        <table className='table table-bordered m-1'>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Todo</th>
                    <th>Status</th>
                    <th>Created on</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map((todo, index) => {
                    return <Todo key={todo._id ? todo._id : null} todo={todo} openEditModal={props.openEditModal} deleteTodo={props.deleteTodo} updateTodoStatus={props.updateTodoStatus} index={index} />;
                })}
            </tbody>
        </table>
    );
}

export default TodoList;