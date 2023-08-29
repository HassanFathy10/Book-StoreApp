import React, {Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInOut } from '../store/authSlice';
const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.books);
  return (
    <Fragment>
          <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand m-2 h1'>Book Store</span>
      <button className='btn btn-outline-primary m-2' type='submit' onClick={()=> dispatch(logInOut())}>
        {isLoggedIn ? "logout" : "login"}
      </button>
      </nav>
      {error && (<div className="alert alert-danger m-0 justify-content-center d-flex" role="alert">
        {error}
      </div>)}
    </Fragment>
  );
};

export default Header;
