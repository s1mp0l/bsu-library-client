import {Link, useParams} from 'react-router-dom';

import cardImgPlaceholder from '../../assets/img/book-img-placeholder.svg';
import {CardButton} from '../../components/card/card-button/card-button';
import {Rating} from '../../ui/rating/rating';
import {Review} from '../../ui/review/review';

import styles from './book-details-page.module.css';
import {useAppSelector} from '../../hooks/redux';
import {DropdownMenuList} from '../../components/dropdown-menu-list/dropdown-menu-list';
import {Button} from '../../ui/button/button';
import {Slider} from '../../components/slider/slider';
import {useWindowDimensions} from '../../hooks/use-window-dimensions';
import {booksAPI} from "../../api/books-api";
import {baseServer} from "../../const";

export const BookDetailsPage = () => {
    const isMobile = useWindowDimensions().width < 1440;
    const {category, bookId} = useParams();
    const id = Number(bookId);

    const bookData = useAppSelector(state => booksAPI.endpoints.fetchAllBooks.select('')(state).data?.rows?.find(b => b.id === id));
    const textPlaceholder = 'Не указано';

    const {data: img} = booksAPI.useFetchBookImagesQuery(bookId || '');
    const images = img ? img.map(i => baseServer + i.path) : null;

    const {data: detailsData} = booksAPI.useFetchBookDetailsQuery(id);

    const book = {...bookData, details: detailsData};

    const {data: reviews} = booksAPI.useFetchBookReviewsQuery(bookId || '')
    const reviewsComponents = reviews?.map((r) => (
        <Review name='Илья Сидорук' date='25.04.2023' rating={r.rating} comment={r.comment}/>
    ));

    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
        <span>
          <Link to='/'>{book?.category?.name}</Link>
          <span> / </span>
          <span>{book?.title || textPlaceholder}</span>
        </span>
            </div>
            <div className={styles.firstBlock}>
                <div className={styles.imgWrapper}>
                    {images?.length ? (
                        <Slider isMobile={isMobile} images={images|| []}/>
                    ) : (
                        <img src={cardImgPlaceholder} alt='img-placeholder'/>
                    )}
                </div>
                <div className={styles.titleInfoWrapper}>
                    <p className={styles.title}>{book?.title || textPlaceholder}</p>
                    <p className={styles.author}>{book?.authors || textPlaceholder}</p>
                    <CardButton bookStatus={book?.status || textPlaceholder}/>
                </div>
                <div className={`${styles.block} ${styles.aboutWrapper}`}>
                    <p className={styles.blockTitle}>О книге</p>
                    <p className={styles.blockText}>{book?.about || textPlaceholder}</p>
                </div>
            </div>
            <div className={styles.secondBlock}>
                <div className={styles.block}>
                    <p className={styles.blockTitle}>Рейтинг</p>
                    <Rating rate={book?.rating || 0}/>
                </div>
                <div className={styles.block}>
                    <p className={styles.blockTitle}>Подробная информация</p>
                    <div className={styles.detailsWrapper}>
                        <div className={styles.detailsColumn}>
                            <div className={styles.detailsItem}>
                                <span>Издательство</span>
                                <span>{book?.details?.publisher || textPlaceholder}</span>
                            </div>
                            <div className={styles.detailsItem}>
                                <span>Год издания</span>
                                <span>{book?.details?.year || textPlaceholder}</span>
                            </div>
                            <div className={styles.detailsItem}>
                                <span>Страниц</span>
                                <span>{book?.details?.pages || textPlaceholder}</span>
                            </div>
                            <div className={styles.detailsItem}>
                                <span>Переплёт</span>
                                <span>{book?.details?.cover || textPlaceholder}</span>
                            </div>
                            <div className={styles.detailsItem}>
                                <span>Формат</span>
                                <span>{book?.details?.format || textPlaceholder}</span>
                            </div>
                        </div>
                        <div className={styles.detailsColumn}>
                            <div className={styles.detailsItem}>
                                <span>Жанр</span>
                                <span>{book?.details?.genre || textPlaceholder}</span>
                            </div>
                            <div className={styles.detailsItem}>
                                <span>Вес</span>
                                <span>{book?.details?.weight || textPlaceholder}</span>
                            </div>
                            <div className={styles.detailsItem}>
                                <span>ISBN</span>
                                <span>{book?.details?.isbn || textPlaceholder}</span>
                            </div>
                            <div className={styles.detailsItem}>
                                <span>Изготовитель</span>
                                <span>{book?.details?.manufacturer || textPlaceholder}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <DropdownMenuList
                        titleElement={
                            <div className={styles.reviewsHead} data-test-id='button-hide-reviews'>
                                <p className={styles.blockTitle}>Отзывы</p>
                                <span
                                    className={styles.reviewsAmount}>{book?.reviews ? book.reviews.length : 0}</span>
                            </div>
                        }
                        titleWidth={140}
                    >
                        <div className={styles.reviewsBody}>{reviewsComponents}</div>
                    </DropdownMenuList>
                    <Button className='' text='Оценить книгу' data-test-id='button-rating'/>
                </div>
            </div>
        </div>
    );
};
