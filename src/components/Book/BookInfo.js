import React, { Fragment } from 'react';
import styles from "./book.css";

const BookInfo = ({ info }) => {
  return (
    <Fragment>
      <h2 className='mb-4'>Book Details</h2>
      {info ? (
        <div>
          <table className={`table table-dark table-hover ${styles.table}`}>
            <tbody>
              <tr>
                <th scope="row" className='fw-bold text-primary'>Title:</th>
                <td colspan="4" className='fs-6 fw-medium text-light'>{info.title}</td>
              </tr>
              {
                info.name &&
                <tr>
                <th scope="row" className='fw-bold text-primary'>username:</th>
                <td colSpan="4" className='fs-6 fw-medium text-light'>{info.name}</td>
              </tr>
              }
              <tr>
                <th scope="row" className='fw-bold text-primary'>Price:</th>
                <td colspan="4" className='fs-6 fw-medium text-light'>{info.price}</td>
              </tr>
              <tr>
                <th scope="row" className='fw-bold text-primary'>Description:</th>
                <td colspan="4" className='fs-6 fw-medium text-light'>{info.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className='alert alert-secondary text-light fw-medium' role='alert'>
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
