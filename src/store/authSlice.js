import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const authSlice = createSlice({
    name: "auth",
    initialState: {isLoggedIn: false},
    reducers: {
        logInOut: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
            if (state.isLoggedIn) {
                Swal.fire({
                    icon: "success",
                    title: `You logged in Successfully`
                }) 
            } else {
                Swal.fire(
                    'The Internet?',
                    'That thing is still around?',
                    'question'
                )
            }
        }
    }
})
export const { logInOut } = authSlice.actions;
export default authSlice.reducer;