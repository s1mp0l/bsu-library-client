import {useSelector} from 'react-redux';
import {useParams, useSearchParams} from 'react-router-dom';

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

    const booksOld = useAppSelector(
        state => category === 'all' ?
            state.bookReducer.booksArray :
            state.bookReducer.booksArray.filter(b => b.category.route === category)
    )

    const {data: books} = booksAPI.useFetchAllBooksQuery('');

    const bookComponents = books?.filter(b => b.title.includes(searchQuery))
        .map( b =>
        <div data-test-id='card'>
            <Card horizontal={horizontal}
                  book={b}/>
        </div>
    )

    return (
        <div className={[styles.container, horizontal ? styles.horizontal : ''].join(' ')}>
            {bookComponents}
        </div>
    )
}
