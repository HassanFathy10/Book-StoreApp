import React, { useRef } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { insertBooks } from '../store/bookSlice';
import Swal from 'sweetalert2';

const Addform = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const title = useRef(null);
  const userName = useRef(null);
  const price = useRef(null);
  const description = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      userName: userName.current.value,
      price: price.current.value,
      description: description.current.value
    }
    Swal.fire({
      icon: "success",
      title: `Good job!`
    })
    dispatch(insertBooks(data));
  }

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2 className='mb-'>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title' className='fw-bold'>Title</label>
            <input type='text' className='form-control' id='title' required ref={title}/>
          </div>
          <div className='form-group'>
            <label htmlFor='userName' className='fw-bold'>User Name</label>
            <input type='text' className='form-control' id='userName' required ref={userName}/>
          </div>
          <div className='form-group'>
            <label htmlFor='price' className='fw-bold'>Price</label>
            <input type='number' className='form-control' id='price' required ref={price}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description' className='fw-bold'>Description</label>
            <textarea
              ref={description}
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='mt-4 btn btn-primary' disabled={!isLoggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
