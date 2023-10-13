import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {booksAPI} from '../api/books-api';

import bookListReducer from './slices/book-list-slice'
import bookReducer from './slices/book-slice'
import userReducer from './slices/user-slice'

const rootReducer = combineReducers({
    userReducer,
    bookListReducer,
    bookReducer,
    [booksAPI.reducerPath]: booksAPI.reducer
})

export const setupStore = () => configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksAPI.middleware)
    })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
