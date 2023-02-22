import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import bookJson from '../../data/books.json';
import categoriesJson from '../../data/categories.json';
import imgSrc1 from '../../assets/img/book-img-1.png';

const booksInitialArray = bookJson.books.map((b) => ({
  ...b,
  about: bookJson.about,
  details: bookJson.details,
  reviews: bookJson.reviews.filter((r) => r.id > Math.floor(Math.random() * 3)),
  category: categoriesJson.categories[Math.floor(Math.random() * categoriesJson.categories.length)],
  imgSrc: Math.random() > 0.5 ? imgSrc1 : undefined,
  imgAmount: 3,
}));

interface BookState {
  booksArray: IBook[];
  categoriesArray: ICategory[];
  isLoading: boolean;
  error: string;
}

const initialState: BookState = {
  booksArray: booksInitialArray,
  categoriesArray: categoriesJson.categories,
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
        count: state.booksArray.filter((b) => b.category.route === c.route).length,
      }));
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default bookSlice.reducer;
