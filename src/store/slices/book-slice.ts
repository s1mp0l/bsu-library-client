import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface BookState {
  booksArray: IBook[];
  categoriesArray: ICategory[];
  isLoading: boolean;
  error: string;
}

const initialState: BookState = {
  booksArray: [],
  categoriesArray: [],
  isLoading: false,
  error: '',
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    countBooksInCategories(state, action: PayloadAction<string>) {
      state.categoriesArray = state.categoriesArray.map((c) => ({
        ...c,
        count: state.booksArray.filter((b) => b?.category?.path === c.path).length,
      }));
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default bookSlice.reducer;
