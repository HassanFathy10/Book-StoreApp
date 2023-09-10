import React, {Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInOut } from '../store/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';


const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.books);

  return (
    <Fragment>
          <nav className='navbar  border-bottom border-body'>
        <NavLink className='navbar-brand m-2 text-light fs-3 fw-bolder' to="/">Book Store <FontAwesomeIcon icon={faBook} /></NavLink>
        <NavLink className='btn btn-outline-light m-2 fw-bolder ms-auto' to="book/add">AddBook</NavLink>
        {isLoggedIn ?
          <button className='btn btn-outline-light m-2 fw-bolder'
            type='submit'
            onClick={() => Swal.fire({
              icon: "question",
              title: 'Are you sure?',
              text: "Are you sure you want to logout?"
            }
            ).then((result)=>{
              if (result.isConfirmed) {
                Swal.fire({
                  icon: "success",
                  title: "Good Luck!",
                  text: "See you soon!"
                })
                dispatch(logInOut())
              }
            })
            }>
            logout
          </button>
          :
          <button className='btn btn-outline-light m-2 fw-bolder'
            type='submit'
            onClick={() => dispatch(logInOut())}>
            login
          </button>}
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
