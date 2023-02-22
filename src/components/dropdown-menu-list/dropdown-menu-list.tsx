import { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import styles from './dropdown-menu-list.module.css';
import arrowBlack from '../../assets/img/ico-dropdown-arrow-black.svg';
import arrowOrange from '../../assets/img/ico-dropdown-arrow-orange.svg';

interface IDropdownMenuListProps {
  titleElement: ReactNode;
  children: ReactNode;
  elementActive?: boolean;
  titleWidth?: number;
  disabled?: boolean;
}

export const DropdownMenuList = ({
  disabled,
  titleElement,
  titleWidth,
  children,
  elementActive,
}: IDropdownMenuListProps) => {
  const [wrapStateActive, setWrapStateActive] = useState(true);
  const handleChangeWrapState = () => {
    setWrapStateActive((prev) => !prev);
  };

  return (
    <div>
      {disabled ? (
        <div>
          {titleElement}
          <div className={classNames(styles.children, { [styles.notVisible]: true })}>{children}</div>
        </div>
      ) : (
        <div>
          <button
            type='button'
            onClick={handleChangeWrapState}
            style={{ width: titleWidth }}
            className={classNames(styles.head, { [styles.headActive]: elementActive })}
          >
            {titleElement}
            <img
              className={classNames(styles.arrow, { [styles.arrowInactive]: !wrapStateActive })}
              src={elementActive ? arrowOrange : arrowBlack}
              alt='wrapArrow'
            />
          </button>
          <div className={classNames(styles.children, { [styles.notVisible]: !wrapStateActive })}>{children}</div>
        </div>
      )}
    </div>
  );
};
