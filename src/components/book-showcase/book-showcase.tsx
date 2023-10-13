import {useEffect} from "react";
import classNames from 'classnames';
import {useMatch} from 'react-router-dom';
import {CategoryLink} from '../sidebar/category-link/category-link';
import {DropdownMenuList} from '../dropdown-menu-list/dropdown-menu-list';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {MainLink} from '../sidebar/main-link/main-link';
import {booksAPI} from "../../api/books-api";
import {bookSlice} from "../../store/slices/book-slice";
import styles from './book-showcase.module.css';

interface IBookShowCaseProps {
    inBurgerMenu?: boolean;
    dataTestId: string;
}

export const BookShowcase = ({inBurgerMenu, dataTestId}: IBookShowCaseProps) => {
    const match = useMatch('/books/:category');
    const {data: categories} = booksAPI.useFetchAllCategoriesQuery('');

    const dispatch = useAppDispatch();
    const { countBooksInCategories } = bookSlice.actions;
    useEffect(() => {
        dispatch(countBooksInCategories(''))
    }, [countBooksInCategories, dispatch]);

    const categoriesLinksComponents = categories?.map((c) => (
        <CategoryLink to={`/books/${c.path}`} key={c.path} categoryName={c.name} booksAmount={undefined}/>
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
                        to='/books/all'
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
