import React, {Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInOut } from '../store/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';


const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.books);

  return (
    <Fragment>
          <nav className='navbar  border-bottom border-body'>
        <span className='navbar-brand m-2 text-light fs-3 fw-bolder'>Book Store <FontAwesomeIcon icon={faBook} /></span>
      <button className='btn btn-outline-light m-2 fw-bolder' type='submit' onClick={()=> dispatch(logInOut())}>
        {isLoggedIn ? "logout" : "login"}
      </button>
      </nav>
      {error && (Swal.fire({
      icon: "error",
      title: `Server Error: ${error}`
      }),
        <div></div>
      )}
    </Fragment>
  );
};

export default Header;
