import React, { Fragment } from 'react';

const BookInfo = ({ info }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      <div className='alert alert-secondary' role='alert'>
        There is no book selected yet. Please select!
      </div>
      <div>
        <p className='fw-bold'>Title: {info.title}</p>
        <p className='fw-light'>Description: {info.description}</p>
        <p className='fst-italic'>Price: {info.price}</p>
      </div>
    </Fragment>
  );
};

export default BookInfo;
