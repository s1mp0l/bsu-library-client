interface ICategory {
  name: string;
  route: string;
  count: number;
}

declare interface IReview {
  name: string;
  date: string;
  rating: number;
  comment: string | null;
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

interface IBook {
  id: number;
  imgSrc?: string;
  imgAmount: number;
  title: string;
  author: string;
  rating: number | null;
  about: string;
  details: IBookDetails;
  reviews: IReview[];
  category: ICategory;
  status: string;
  inUseUntil?: string;
}

interface IBook1 {
    id: number;
    image?: IImage1 | null;
    imgAmount: number;
    title: string;
    authors: string[];
    issueYear: string
    rating: number | null;
    booking: IBooking1 | null;
    histories: IHistoryItem1[] | null;
    delivery: IDelivery1 | null;
}

interface IBooking1 {
    customerFirstName: string;
    customerID: number;
    customerLastName: string;
    dateOrder: string;
    id: number;
    order: boolean;
}

interface IHistoryItem1 {
    id: number;
    userId: number;
}

interface IDelivery1 {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
}

interface IImage1 {
    url: string;
}

interface ICategory1 {
    name: string;
    path: string;
    id: number;
}
