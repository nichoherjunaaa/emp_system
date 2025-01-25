import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'

const initialState = {
    user : JSON.parse(localStorage.getItem('user')) || null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload.data;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logoutUser : (state, action) => {
            state.user = null;
            localStorage.removeItem('user');
            toast.success('Logout Berhasil')
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;