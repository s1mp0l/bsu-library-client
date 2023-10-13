import {useSelector} from 'react-redux';
import {useLocation, useParams, useSearchParams} from 'react-router-dom';

import {Card} from '../card/card';

import styles from './cards-list.module.css'
import {useAppSelector} from "../../hooks/redux";
import {booksAPI} from "../../api/books-api";

interface ICardsListProps {
    horizontal: boolean
}

export const CardsList = ({horizontal}: ICardsListProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {category} = useParams()

    const searchQuery = searchParams.get('search') || '';
    const sortByRating = searchParams.get('sort')==='true';


    const books = booksAPI.useFetchAllBooksQuery('')?.data?.rows

    // const sortedBooks = sortByRating ? books?.sort((a, b) => Number(a.rating) - Number(b?.rating)) : books;
    const bookComponents = books ? books.filter(b => b.title.includes(searchQuery))
        .map( b => <Card horizontal={horizontal} book={b} key={b.id}/>) : <div>Нет данных</div>

    return (
        <div className={[styles.container, horizontal ? styles.horizontal : ''].join(' ')}>
            {bookComponents}
        </div>
    )
}
