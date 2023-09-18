import React, { Fragment, useEffect, useState, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, deleteBooks } from "../store/bookSlice";
import BooksList from "./Book/BooksList"


const BookInfo = lazy(() => import('./Book/BookInfo'));
const BookContainer = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { isLoading, books } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBookId = (id) => {
    const selectedBook = books.find((book) => book.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...selectedBook };
    });
  };
  
  return (
    <Fragment>
      <div className='row mt-5'>
        <div className='col'>
          <Suspense fallback={<div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>}>
            <BooksList isLoading={isLoading} books={books} isLoggedIn={isLoggedIn} dispatch={dispatch} deleteBooks={deleteBooks} getBookId={getBookId} />
          </Suspense>
        </div>
        <div className='col side-line'>
          <Suspense fallback={<div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>}>
            <BookInfo info={selectedBook} />
          </Suspense>
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;
