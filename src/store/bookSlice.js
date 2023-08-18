import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk("books/getBooks", async (_, thunkApi) => {
    try {
        const res = await fetch("http://localhost:3009/books");
        const data = await res.json();
        return data;
    } catch {
        console.log("error getting books")
    }
})

const bookSlice = createSlice({
    name: "book",
    initialState: { books: null },
    reducers: {
        [getBooks.pending]: (state, action) => {
            console.log(action);
        },
        [getBooks.fulfilled]: (state, action) => {
            console.log(action);
        },
        [getBooks.rejected]: (state, action) => {
            console.log(action);
        }
    }
})

export default bookSlice.reducer;