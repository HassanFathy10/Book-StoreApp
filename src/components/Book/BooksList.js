import React from 'react';
import Swal from 'sweetalert2';

const BooksList = ({ isLoading, books, isLoggedIn, dispatch, deleteBooks, getBookId }) => {
  const bookList = books.length > 0 ? books.map((book) => <li key={book.id} className='list-group-item d-flex  justify-content-between align-items-center'>
    <div className='fw-medium'>{book.title}</div>
    <div className='btn-group' role='group'>
      <button type='button' className='btn btn-primary' onClick={()=> getBookId(book.id)}>
        Read
      </button>
      <button type='button' className='btn btn-danger' disabled={!isLoggedIn}
        onClick={() => Swal.fire({
            icon: "warning",
            title: `Are you sure to delete this book ${book.title}?`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
              dispatch(deleteBooks(book))
          .unwrap()
          .then((originalPromiseResult) => {
            console.log(originalPromiseResult);
          })
          .catch((rejectedValueOrSerializedError) => {
            console.log(rejectedValueOrSerializedError);
          })
            }
        })}>
        Delete
      </button>
    </div>
  </li>) : "There's no books in the list" ;
  return (
    <div>
      <h2 className='mb-4'>Books List</h2>
      {
        isLoading ? (<div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>) : <ul className='list-group'>
            {bookList}
        </ul>
      }
    </div>
  );
};

export default BooksList;
