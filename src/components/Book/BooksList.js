import React from 'react';
import Swal from 'sweetalert2';
import styles from "./book.css";


// const editHandler = (e) => {
//   e.preventDefault();
//   dispatch(editBooks({title, name, price, description }))
// }


const BooksList = ({ isLoading, books, isLoggedIn, dispatch, deleteBooks, getBookId, editBooks }) => {
  const bookList = books.length > 0 ? books.map((book) => <div key={book.id} className='list-group-item d-flex  justify-content-between align-items-center'>
      <div className='mb-4'>{book.title}</div>
    <div className='btn-group' role='group'>
      <button type='button' className='btn btn-success' onClick={()=> getBookId(book.id)}>
        Read
        </button>
        <button type='button' className='btn btn-primary' onClick={()=> editBooks(book)}>
        Edit
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
  </div>
  ) : "There's no books in the list";
  return (
    <div style={{height : "100vh"}}>
      <h2 className='mb-4'>Books List</h2>
      {
        isLoading ? (<div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>) :
          <div>
            <table className={`table table-dark table-hover ${styles.table}`}>
              <tbody>
                <tr>
                  <td colSpan="4" className='fs-6 fw-medium text-light'>{bookList}</td>
                </tr>
              </tbody>
            </table>
          </div>
      }
    </div>
  );
};

export default BooksList;
