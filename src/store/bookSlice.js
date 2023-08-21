import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk("books/getBooks",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch("http://localhost:3009/books");
            const data = await res.json();
            return data;
        } catch {
            return rejectWithValue(Error.massage);
        }
    });

export const insertBooks = createAsyncThunk("book/insertBooks",
    async (bookData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch("http://localhost:3009/books", {
                method: "POST",
                body: JSON.stringify(bookData),
                headers : {
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
    initialState: { books: [], isLoading: false, error : null },
    extraReducers: {
        // get books
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
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
    }
})

export default bookSlice.reducer;