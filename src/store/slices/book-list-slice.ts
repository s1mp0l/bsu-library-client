import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface BookListState {
    horizontal: boolean;
}

const initialState: BookListState = {
    horizontal: true
}

export const bookListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        setHorizontal(state, action: PayloadAction<boolean>) {
            state.horizontal = action.payload
        }
    }
})

// eslint-disable-next-line import/no-default-export
export default bookListSlice.reducer;
