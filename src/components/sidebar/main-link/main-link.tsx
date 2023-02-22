import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './main-link.module.css';

interface IMainLinkProps {
  to: string;
  pageName: string;
  dataTestId?: string;
}

export const MainLink = ({ to, pageName, dataTestId }: IMainLinkProps) => (
  <div>
    <NavLink
      className={({ isActive }: { isActive: boolean }): string =>
        classNames(styles.mainLink, { [styles.mainActive]: isActive })
      }
      data-test-id={dataTestId}
      to={to}
    >
      {pageName}
    </NavLink>
  </div>
);
