import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBook } from "../store/bookSlice";
import { useParams } from "react-router-dom";

const useBookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  
  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  return { books };
};

export default useBookDetails;