declare interface UserTokenData {
    id: number | null,
    email: string | null,
    role: string | null
}

declare interface Action {
    type: string,
    payload: any
}

declare interface  IBookState {
    booksArray: IBook[],
    categoriesArray: ICategory[]
}

declare interface IBookListState {
    horizontal: boolean
}

declare interface IRootState {
    books: IBookState,
    bookList: IBookListState
}
