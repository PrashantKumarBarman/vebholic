import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Header(props) {

    function filterTodosByStatus(e) {
        props.filterTodosByStatus(e.target.value);
    }

    return (
        <div className='row p-2 border-bottom'>
            <div className='col-md-2'>
                <div className='form-inline'>
                    <label>Filter by status</label>
                    <select onChange={filterTodosByStatus} className='form-control'>
                        <option value='Active'>Active</option>
                        <option value='Completed'>Completed</option>
                    </select>
                </div>
            </div>
            <div className='col-md-8'>
            </div>
            <div className='col-md-2 d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary' onClick={props.openAddModal}>
                <FontAwesomeIcon icon={faPlusCircle} className='iconbtn'/>Add
                </button>
            </div>
        </div>
    );
} 

export default Header;