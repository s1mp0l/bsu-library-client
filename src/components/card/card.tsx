import { Link } from 'react-router-dom';

import cardImgPlaceholder from '../../assets/img/book-img-placeholder.svg';
import { Rating } from '../../ui/rating/rating';

import { CardButton } from './card-button/card-button';

import styles from './card.module.css';

interface ICardProps {
  book: IBook1;
  horizontal: boolean;
}

export const Card = ({ book, horizontal }: ICardProps) => (
  <Link to={`/book/category/${book.id}`}>
    <div className={[styles.container, horizontal ? styles.horContainer : ''].join(' ')}>
      <div className={styles.imgWrapper}>
        <img src={book.image ? ( `https://strapi.cleverland.by${book.image.url}`) : cardImgPlaceholder} alt='' />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textBlock}>
          <div className={horizontal ? styles.horRating : ''}>
            <Rating rate={book.rating} />
          </div>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>{book.title}</p>
          </div>
          <p className={styles.author}>{book.authors.join(', ')}</p>
        </div>
        <div className={horizontal ? styles.buttonWrapper : ''}>
          <CardButton bookStatus='available' />
        </div>
      </div>
    </div>
  </Link>
);
