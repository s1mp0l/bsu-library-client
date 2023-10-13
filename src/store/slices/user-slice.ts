import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface UserState {
    isAuth: boolean,
    user: UserTokenData | null
}

const initialState: UserState = {
    isAuth: false,
    user: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUser(state, action: PayloadAction<UserTokenData>) {
            state.user = action.payload
            state.isAuth = true
        },
        quitUser(state, action: PayloadAction<string>) {
            state.user = null
            state.isAuth = false
        }
    },
});

// eslint-disable-next-line import/no-default-export
export default userSlice.reducer;
