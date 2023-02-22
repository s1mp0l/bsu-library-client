import classNames from 'classnames';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../sidebar/sidebar';
import icoBurger from '../../assets/img/ico-burger.svg';
import icoCloseBurger from '../../assets/img/ico-close-burger-orange.svg';
import styles from './burger-menu.module.css';
import { MainLink } from '../sidebar/main-link/main-link';

export const BurgerMenu = () => {
  const location = useLocation();
  const [menuActive, menuSetActive] = useState(false);
  const toggleMenuActive = () => menuSetActive((prevState) => !prevState);
  const setMenuInactive = () => menuSetActive(false);

  useEffect(() => setMenuInactive(), [location]);
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const parentMenu = document.getElementsByClassName(styles.burgerContainer)[0];
      if (!parentMenu.contains((e.target as Element) || null)) {
        setMenuInactive();
      }
    };
    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  });

  return (
    <div className={styles.burgerContainer}>
      <button data-test-id='button-burger' className={styles.burgerBtn} type='button' onClick={toggleMenuActive}>
        <img src={menuActive ? icoCloseBurger : icoBurger} alt='' />
      </button>
      <div className={styles.burgerWrapper}>
        <div className={classNames(styles.burgerBody, { [styles.notVisible]: !menuActive })}>
          <Sidebar inBurgerMenu={true} />
          <div className={styles.additionalLinks}>
            <MainLink to='/' pageName='Профиль' />
            <MainLink to='/' pageName='Выход' />
          </div>
        </div>
      </div>
    </div>
  );
};
