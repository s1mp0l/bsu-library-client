import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import cardImgPlaceholder from '../../assets/img/book-img-placeholder.svg';
import { CardButton } from '../../components/card/card-button/card-button';
import { Rating } from '../../ui/rating/rating';
import { Review } from '../../ui/review/review';

import styles from './book-details-page.module.css';
import { useAppSelector } from '../../hooks/redux';
import { DropdownMenuList } from '../../components/dropdown-menu-list/dropdown-menu-list';
import { Button } from '../../ui/button/button';
import { Slider } from '../../components/slider/slider';
import { useWindowDimensions } from '../../hooks/use-window-dimensions';

export const BookDetailsPage = () => {
  const isMobile = useWindowDimensions().width < 1440;
  const { category, bookId } = useParams();
  const id = Number(bookId);
  const book = useAppSelector(
    (state) => state.bookReducer.booksArray.filter((b) => b.id === id)[0] || state.bookReducer.booksArray[0]
  );

  const reviewsComponents = book.reviews.map((r) => (
    <Review name={r.name} date={r.date} rating={r.rating} comment={r.comment} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <span>
          <Link to='/'>{book.category.name}</Link>
          <span> / </span>
          <span>{book.title}</span>
        </span>
      </div>
      <div className={styles.firstBlock}>
        <div className={styles.imgWrapper}>
          {book.imgAmount ? (
            <Slider isMobile={isMobile} imagesAmount={book.imgAmount} />
          ) : (
            <img src={cardImgPlaceholder} alt='img-placeholder' />
          )}
        </div>
        <div className={styles.titleInfoWrapper}>
          <p className={styles.title}>{book.title}</p>
          <p className={styles.author}>{book.author}</p>
          <CardButton bookStatus={book.status} inUseUntil={book.inUseUntil} />
        </div>
        <div className={`${styles.block} ${styles.aboutWrapper}`}>
          <p className={styles.blockTitle}>О книге</p>
          <p className={styles.blockText}>{book.about}</p>
        </div>
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.block}>
          <p className={styles.blockTitle}>Рейтинг</p>
          <Rating rate={book.rating} />
        </div>
        <div className={styles.block}>
          <p className={styles.blockTitle}>Подробная информация</p>
          <div className={styles.detailsWrapper}>
            <div className={styles.detailsColumn}>
              <div className={styles.detailsItem}>
                <span>Издательство</span>
                <span>{book.details.publisher}</span>
              </div>
              <div className={styles.detailsItem}>
                <span>Год издания</span>
                <span>{book.details.year}</span>
              </div>
              <div className={styles.detailsItem}>
                <span>Страниц</span>
                <span>{book.details.pages}</span>
              </div>
              <div className={styles.detailsItem}>
                <span>Переплёт</span>
                <span>{book.details.cover}</span>
              </div>
              <div className={styles.detailsItem}>
                <span>Формат</span>
                <span>{book.details.format}</span>
              </div>
            </div>
            <div className={styles.detailsColumn}>
              <div className={styles.detailsItem}>
                <span>Жанр</span>
                <span>{book.details.genre}</span>
              </div>
              <div className={styles.detailsItem}>
                <span>Вес</span>
                <span>{book.details.weight}</span>
              </div>
              <div className={styles.detailsItem}>
                <span>ISBN</span>
                <span>{book.details.isbn}</span>
              </div>
              <div className={styles.detailsItem}>
                <span>Изготовитель</span>
                <span>{book.details.manufacturer}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <DropdownMenuList
            titleElement={
              <div className={styles.reviewsHead} data-test-id='button-hide-reviews'>
                <p className={styles.blockTitle}>Отзывы</p>
                <span className={styles.reviewsAmount}>{book.reviews.length}</span>
              </div>
            }
            titleWidth={140}
          >
            <div className={styles.reviewsBody}>{reviewsComponents}</div>
          </DropdownMenuList>
          <Button className='' text='Оценить книгу' data-test-id='button-rating' />
        </div>
      </div>
    </div>
  );
};
