import {Link} from 'react-router-dom';

import cardImgPlaceholder from '../../assets/img/book-img-placeholder.svg';
import {Rating} from '../../ui/rating/rating';

import {CardButton} from './card-button/card-button';

import styles from './card.module.css';
import {booksAPI} from "../../api/books-api";
import {baseServer} from "../../const";

interface ICardProps {
    book: IBook;
    horizontal: boolean;
}

export const Card = ({book, horizontal}: ICardProps) => {
    const {data: images} = booksAPI.useFetchBookImagesQuery(book.id.toString());
    const mainImg = images?.length ? baseServer + images[0].path : null;
    console.log(mainImg)
    return (
        <Link to={`/book/category/${book.id}`}>
            <div className={[styles.container, horizontal ? styles.horContainer : ''].join(' ')}>
                <div className={styles.imgWrapper}>
                    <img src={mainImg ? mainImg : cardImgPlaceholder} alt=''/>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.textBlock}>
                        <div className={horizontal ? styles.horRating : ''}>
                            <Rating rate={book.rating}/>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p className={styles.title}>{book.title}</p>
                        </div>
                        <p className={styles.author}>{book.authors}</p>
                    </div>
                    <div className={horizontal ? styles.buttonWrapper : ''}>
                        <CardButton bookStatus='available'/>
                    </div>
                </div>
            </div>
        </Link>
    );
}
