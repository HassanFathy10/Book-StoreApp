import React, { useRef} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { insertBooks } from '../store/bookSlice';
import Swal from 'sweetalert2';
import "./Book/book.css"


const Addform = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const title = useRef(null);
  const name = useRef(null);
  const price = useRef(null);
  const description = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      name: name.current.value,
      price: price.current.value,
      description: description.current.value
    }
    Swal.fire({
      icon: "success",
      title: `Good job!`
    })
    dispatch(insertBooks(data));
    console.log(data);
  }

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2 className='text-light'>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group mb-1'>
            <label htmlFor='title' className='fw-bold mb-1'>Title</label>
            <input type='text' className='form-control text-light fw-medium' id='title' placeholder='Insert title book' required ref={title}/>
          </div>
          <div className='form-group mb-1'>
            <label htmlFor='userName' className='fw-bold mb-1'>User Name</label>
            <input type='text' className='form-control text-light fw-medium' id='userName' placeholder='Insert username' required ref={name}/>
          </div>
          <div className='form-group mb-1'>
            <label htmlFor='price' className='fw-bold mb-1'>Price</label>
            <input type='number' className='form-control text-light fw-medium' id='price' placeholder='Insert price' required ref={price}/>
          </div>
          <div className='form-group mb-1'>
            <label htmlFor='Description' className='fw-bold bg mb-1'>Description</label>
            <textarea
              ref={description}
              className='form-control text-light fw-medium'
              id='Description'
              rows='5'
              placeholder='Write description here...'
              required
            ></textarea>
          </div>
          <button type='submit' className='mt-3 btn btn-success fw-medium' disabled={!isLoggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
