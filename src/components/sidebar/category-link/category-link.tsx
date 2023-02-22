import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './category-link.module.css';

interface ICategoryLinkProps {
  to: string;
  categoryName: string;
  booksAmount?: number;
  dataTestId?: string;
}

export const CategoryLink = ({ to, categoryName, booksAmount, dataTestId }: ICategoryLinkProps) => {
  const match = true;
  return (
    <div>
      <NavLink
        className={({ isActive }: { isActive: boolean }): string =>
          classNames(styles.link, { [styles.active]: isActive })
        }
        data-test-id={dataTestId}
        to={to}
      >
        {categoryName}{' '}
      </NavLink>
      {booksAmount !== undefined && <span className={styles.amount}>{booksAmount}</span>}
    </div>
  );
};
