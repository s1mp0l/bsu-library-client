import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

interface BookQueryRes {
    count: number,
    rows: IBook[];
}

const baseUrl = 'http://localhost:5000/api/';

export const booksAPI = createApi({
    reducerPath: 'booksAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (build) => ({
        fetchBookReviews: build.query<IReview[], string>({
            query: (bookId) => ({
                url: `/reviews/${bookId}`
            })
        }),
        fetchBookImages: build.query<IImage[], string>({
            query: (bookId) => ({
                url: `/image/${bookId}`
            })
        }),
        fetchAllBooks: build.query<BookQueryRes, string>({
            query: () => ({
                url: '/books'
            })
        }),
        fetchBooksByRating: build.query<IBook[], string>({
            query: () => ({
                url: `/books/best`
            })
        }),
        fetchBooksByCategoryPath: build.query<IBook[], string>({
            query: (category) => ({
                url: `/books/${category}`
            })
        }),
        fetchBookDetails: build.query<IBookDetails, number>({
            query: (id) => ({
                url: `/book/${id}`
            })
        }),
        fetchAllCategories: build.query<ICategory[], string>({
            query: () => ({
                url: '/categories'
            })
        }),
        fetchUserData: build.query<IUser, number>({
            query: (id) => ({
                url: `/user/getUser/${id}`
            })
        })
    })
})
