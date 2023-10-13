import {Card} from "../card/card";
import {booksAPI} from "../../api/books-api";

import styles from './books-for-mainpage.module.css'

export const RecommendedBooks = () => {
    const {data: books} = booksAPI.useFetchBooksByCategoryPathQuery('algorithms')

    const bookCards = books?.length ? books?.slice(0,5).map(b => <Card key={b.id} book={b} horizontal={false} />) : <p>Данные не загружены</p>
    return (
        <div className={styles.blockContainer}>
            <div className={styles.blockTitle}>
                <p className='blockTitle'>Рекомендованные вам: </p>
            </div>
            <div className={styles.mainPageBlock}>
                {bookCards}
            </div>
        </div>
    );
};
