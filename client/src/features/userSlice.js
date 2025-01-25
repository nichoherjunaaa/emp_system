import { createSlice } from '@reduxjs/toolkit';

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
    }
})

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;