import {booksAPI} from "../../api/books-api";
import {Card} from "../card/card";

import styles from './books-for-mainpage.module.css'

export const BestBooks = () => {
    const {data: books} = booksAPI.useFetchBooksByRatingQuery('')

    const bookCards = books?.length ? books?.slice(0,5).map(b => <Card key={b.id} book={b} horizontal={false} />) : <p>Данные не загружены</p>
    return (
        <div className={styles.blockContainer}>
            <div className={styles.blockTitle}>
                <p className='blockTitle'>Лучшие книги: </p>
            </div>
            <div className={styles.mainPageBlock}>
                {bookCards}
            </div>
        </div>
    );
};
