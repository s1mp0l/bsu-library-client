import { useEffect } from 'react';
import { NavLink, useLocation, useMatch } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { bookSlice } from '../../store/reducers/book-slice';

import styles from './sidebar.module.css';
import { BookShowcase } from '../book-showcase/book-showcase';
import { MainLink } from './main-link/main-link';

interface ISidebarProps {
  inBurgerMenu?: boolean;
}

export const Sidebar = ({ inBurgerMenu }: ISidebarProps) => {
  const dispatch = useAppDispatch();
  const { countBooksInCategories } = bookSlice.actions;

  const handleCountBooks = () => {
    dispatch(countBooksInCategories(''));
  };

  useEffect(handleCountBooks, [countBooksInCategories, dispatch]);

  const location = useLocation();
  const match = useMatch('/books/:category');

  return (
    <div className={styles.list}>
      <div className={styles.mainLinks}>
        <BookShowcase
          inBurgerMenu={inBurgerMenu}
          dataTestId={inBurgerMenu ? 'burger-showcase' : 'navigation-showcase'}
        />
        <MainLink
          to='/terms-of-use'
          pageName='Правила пользования'
          dataTestId={inBurgerMenu ? 'burger-terms' : 'navigation-terms'}
        />
        <MainLink
          to='/contract-offer'
          pageName='Договор оферты'
          dataTestId={inBurgerMenu ? 'navigation-contract' : 'burger-contract'}
        />
      </div>
    </div>
  );
};
