import React, { useRef} from 'react';
import { useDispatch } from 'react-redux';
import { editBooks } from '../store/bookSlice';
import { current } from '@reduxjs/toolkit';
import Addform from './AddForm';


const EditBooks = () => {
    const dispatch = useDispatch();
    const title = useRef(current.title);
    const name = useRef(current.name);
    const price = useRef(current.price);
    const description = useRef(current.description);

    const editHandler = (e) => {
        e.preventDefault();
        const data = {
            title: title.current.value,
            name: name.current.value,
            price: price.current.value,
            description: description.current.value
        }
        dispatch(editBooks(data));
        console.log(data);
    };

    return (
        <Addform editHandler={editHandler} />
    );
};

export default EditBooks;
