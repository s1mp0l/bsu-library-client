import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';


export const booksAPI = createApi({
    reducerPath: 'booksAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://strapi.cleverland.by/api'}),
    endpoints: (build) => ({
        fetchAllBooks: build.query<IBook1[], string>({
            query: () => ({
                url: '/books'
            })
        }),
        fetchAllCategories: build.query<ICategory1[], string>({
            query: () => ({
                url: '/categories'
            })
        })
    })
})
