import React, { Fragment, useEffect, useState, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, deleteBooks, editBooks} from "../../store/bookSlice";
import BooksList from "./BooksList"


const BookInfo = lazy(() => import('./BookInfo'));
const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { isLoading, books } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
    dispatch(editBooks());
  }, [dispatch]);

  const getBookId = (id) => {
    const selectedBook = books.find((book) => book.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...selectedBook };
    });
  };
  
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
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

export default PostContainer;
