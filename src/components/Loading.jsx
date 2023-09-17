import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInOut } from '../store/authSlice';
import Swal from 'sweetalert2';


export default function Loading() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
    return (
        <div>
            {isLoggedIn ?
                <button className='btn btn-outline-light m-2 fw-bolder'
                    type='submit'
                    onClick={() => Swal.fire({
                        icon: "question",
                        title: 'Are you sure?',
                        text: "Are you sure you want to logout?"
                    }
                    ).then((result) => {
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
        </div>
    );
};
