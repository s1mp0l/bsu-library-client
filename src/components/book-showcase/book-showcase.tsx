import classNames from 'classnames';
import {NavLink, useLocation, useMatch} from 'react-router-dom';
import styles from './book-showcase.module.css';
import {CategoryLink} from '../sidebar/category-link/category-link';
import {DropdownMenuList} from '../dropdown-menu-list/dropdown-menu-list';
import {useAppSelector} from '../../hooks/redux';
import {MainLink} from '../sidebar/main-link/main-link';
import {booksAPI} from "../../api/books-api";

interface IBookShowCaseProps {
    inBurgerMenu?: boolean;
    dataTestId: string;
}

export const BookShowcase = ({inBurgerMenu, dataTestId}: IBookShowCaseProps) => {
    const match = useMatch('/books/:category');
    const categoriesOld = useAppSelector((state) => state.bookReducer.categoriesArray);
    const {data: categories} = booksAPI.useFetchAllCategoriesQuery('');
    const categoriesLinksComponents = categories?.map((c) => (
        <CategoryLink to={`/books/${c.path}`} categoryName={c.name} booksAmount={5}/>
    ));

    return (
        <DropdownMenuList
            disabled={!match}
            elementActive={Boolean(match)}
            titleElement={
                match ? (
                    <div data-test-id={dataTestId}
                         className={classNames(styles.mainLink, {[styles.mainActive]: match})}>
                        Витрина книг
                    </div>
                ) : (
                    <MainLink
                        to='books/all'
                        pageName='Витрина книг'
                        dataTestId={inBurgerMenu ? 'burger-showcase' : 'navigation-showcase'}
                    />
                )
            }
        >
            <div className={styles.categoriesList}>
                <CategoryLink
                    to='/books/all'
                    categoryName='Все книги'
                    dataTestId={inBurgerMenu ? 'burger-books' : 'navigation-books'}
                />
                {categoriesLinksComponents}
            </div>
        </DropdownMenuList>
    );
};
