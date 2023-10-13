interface IBook {
    id: number;
    title: string;
    authors: string[];
    issueYear: string
    rating: number | null;
    about: string | null;
    status: string | null;
    categoryId: number | null;
    category?: ICategory | null;
    histories?: IHistoryItem1[] | null;
    imgAmount?: number;
    image?: IImage | null;
    details?: IBookDetails;
    reviews?: IReview[];
}

declare interface IReview {
    rating: number;
    comment: string | null;
    userID: number;
    bookId: number;
}

interface IBookDetails {
  publisher: string;
  year: number;
  pages: number;
  cover: string;
  format: string;
  genre: string;
  weight: string;
  isbn: string;
  manufacturer: string;
}


interface IHistoryItem1 {
    id: number;
    dateHanded: Date;
    dateReturned: Date;
    userId: number;
}

interface IImage {
    id: number;
    path: string;
    alt: string;
    bookId: number;
}

interface ICategory {
    name: string;
    path: string;
    id: number;
}

interface IUser {
    id: number,
    role: string,
    email: string,
    password: string,
    name: string,
    surname: string
}
