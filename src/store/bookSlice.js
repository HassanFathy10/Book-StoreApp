import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInsert } from "./reportSlice";

export const getBooks = createAsyncThunk("books/getBooks",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch("https://book-store-server-f6ku.onrender.com/books");
            const data = await res.json();
            return data;
        } catch {
            return rejectWithValue(Error.massage);
        }
    });

export const getBook = createAsyncThunk(
    "book/getBook",
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`https://book-store-server-f6ku.onrender.com/books/${id}`);
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const insertBooks = createAsyncThunk("books/insertBooks",
    async (bookData, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } = thunkAPI;
        try {
            bookData.userName = getState().auth.name;
            const res = await fetch("https://book-store-server-f6ku.onrender.com/books", {
                method: "POST",
                body: JSON.stringify(bookData),
                headers : {
                "content-type": "application/json; charset=UTF-8"
            }
            });
            dispatch(logInsert({name: "InsertBook", status: "success"}))
            const data = await res.json();
            return data;
        } catch {
            dispatch(logInsert({name: "InsertBook", status: "failed"}))
            return rejectWithValue(Error.massage);
        }
    });

export const deleteBooks = createAsyncThunk("books/deleteBook", async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        await fetch(`https://book-store-server-f6ku.onrender.com/books/${book.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        });
        return book;
    } catch {
        return rejectWithValue(Error.massage);
    }
});

export const readBooks = createAsyncThunk("books/readBooks", async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        await fetch(`https://book-store-server-f6ku.onrender.com/books/${book.id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        });
        return book;
    } catch {
        return rejectWithValue(Error.massage);
    }
});

export const editBooks = createAsyncThunk("books/editBooks", async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`https://book-store-server-f6ku.onrender.com/books/${book.id}`, {
            method: "PATCH",
            body: JSON.stringify(book),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await res.json();
        return data;
    } catch {
        return rejectWithValue(Error.massage);
    }
});

const bookSlice = createSlice({
    name: "book",
    initialState: { books: [], isLoading: false, error: null, bookInfo: null },
    extraReducers: {
        // get books
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.book = null;
            state.error = null;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        // get book
        [getBook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [getBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        //insert books
        [insertBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books.push(action.payload);
        },
        [insertBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        //delete books
        [deleteBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = state.books.filter(el => el.id !== action.payload.id);
        },
        [deleteBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        //read books 
        [readBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.bookInfo = action.payload;
        },
        // edit books
        [editBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [editBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
            console.log(action.payload)
        },
        [editBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    }
});

export default bookSlice.reducer;