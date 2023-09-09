import React, { useEffect, useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { editBooks } from '../store/bookSlice';
import "../components/Book/book.css"


const EditForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (!title && !name && !price && !description) {
            setTitle();
            setName();
            setPrice();
            setDescription();
        }
    }, [title, name , price, description])


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editBooks({title, name , price, description}));
    };

    return (
        <div className='row'>
            <div className='col-6 offset-3 mt-3'>
                <h2 className='text-light'>Edit Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group mb-1'>
                        <label htmlFor='title' className='fw-bold mb-1'>Title</label>
                        <input type='text' className='form-control text-light fw-medium' id='title' placeholder='Insert title book'
                            value={title} onChange={(e)=> setTitle(e.target.value)} />
                    </div>
                    <div className='form-group mb-1'>
                        <label htmlFor='userName' className='fw-bold mb-1'>User Name</label>
                        <input type='text' className='form-control text-light fw-medium' id='userName' placeholder='Insert username'
                            value={name} onChange={(e)=> setTitle(e.target.value)} />
                    </div>
                    <div className='form-group mb-1'>
                        <label htmlFor='price' className='fw-bold mb-1'>Price</label>
                        <input type='number' className='form-control text-light fw-medium' id='price' placeholder='Insert price'
                            value={price} onChange={(e)=> setTitle(e.target.value)}/>
                    </div>
                    <div className='form-group mb-1'>
                        <label htmlFor='Description' className='fw-bold bg mb-1'>Description</label>
                        <textarea
                            className='form-control text-light fw-medium'
                            id='Description'
                            rows='5'
                            placeholder='Write description here...'
                            value={description} 
                            onChange={(e)=> setTitle(e.target.value)}
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

export default EditForm;
