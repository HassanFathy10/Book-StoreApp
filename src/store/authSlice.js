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
                Swal.fire({
                    icon: "question",
                    title : "Are you sure you want to logout?",
                    confirmButtonText: "Yes"
                }
                ).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Good Luck!',
                            'See you soon!',
                            'success'
                        )
                    }
                })
            }
        }
    }
})
export const { logInOut } = authSlice.actions;
export default authSlice.reducer;