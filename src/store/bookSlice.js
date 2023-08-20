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

const bookSlice = createSlice({
    name: "book",
    initialState: { books: [], isLoading: false, error : null },
    extraReducers: {
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
        }
    }
})

export default bookSlice.reducer;