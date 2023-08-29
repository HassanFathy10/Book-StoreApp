import React, { Fragment } from 'react';

const BookInfo = ({ info }) => {
  return (
    <Fragment>
      <h2 className='mb-4'>Book Details</h2>
      {info ? (
        <div>
        <p className='fw-bold text-primary'>Title: <span className='fs-6 fw-medium text-black'>{info.title}</span></p>
        <p className='fw-bold text-primary'>User name: <span className='fs-6 fw-medium text-black'>{info.userName}</span></p>
        <p className='fw-bold text-primary'>Description: <span className='fs-6 fw-medium text-black'>{info.description}</span></p>
        <p className='fw-bold text-primary'>Price: <span className='fs-6 fw-medium text-black'>{info.price}</span></p>
      </div>
      ) : (
        <div className='alert alert-secondary' role='alert'>
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
