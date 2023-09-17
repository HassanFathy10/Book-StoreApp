import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Loading from './Loading';


const Header = () => {
  const { error } = useSelector((state) => state.books);

  return (
    <Fragment>
      <nav className='navbar  border-bottom border-body'>
        <NavLink className='navbar-brand m-2 text-light fs-3 fw-bolder' to="/">Book Store <FontAwesomeIcon icon={faBook} /></NavLink>
        <NavLink className='btn btn-outline-light m-2 fw-bolder ms-auto' to="book/add">AddBook</NavLink>
        <Loading />
      </nav>
      {error && (Swal.fire({
        icon: "error",
        title: `Server Error: ${error}`
      }),
        <div></div>
      )}
      <div className='container d-flex justify-content-center p-5'>
        <p className='fw-bold fs-2 text'>Welcome To Book App Store <span><FontAwesomeIcon icon={faHand} shake style={{ color: "#ffff", }} /></span></p>
      </div>
    </Fragment>
  );
};

export default Header;
