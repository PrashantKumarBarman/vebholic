import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    return (
        <div className='row p-2 border-bottom'>
            <div className='col-md-10'></div>
            <div className='col-md-2'>
            <button className='btn btn-primary' onClick={props.openAddModal}>
            <FontAwesomeIcon icon={faPlusCircle} className='iconbtn'/>Add
            </button>
            </div>
        </div>
    );
} 

export default Header;