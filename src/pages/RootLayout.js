import React, { Fragment } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import BookContainer from '../components/Book/BookContainer';
import { Outlet, NavLink } from 'react-router-dom';


export default function RootLayout() {
    return (
        <Fragment>
            <Header />
            <Container>
                <Outlet />
                <NavLink className='btn btn-outline-light mt-5 fw-bolder d-flex justify-content-center align-items-center' to="book/add">AddPost</NavLink>
                <BookContainer />
            </Container>
        </Fragment>
    );
}
