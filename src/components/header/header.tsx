import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/img/logo.svg';
import avatarImg from '../../assets/img/avatar-1.png';
import styles from './header.module.css';
import icoBurger from '../../assets/img/ico-burger.svg';
import { BurgerMenu } from '../burger-menu/burger-menu';

export const Header = () => (
  <div className={styles.container}>
    <div>
      <NavLink to='/'>
        <img src={logoImg} alt='' className={styles.logo} />
      </NavLink>
      <div className={styles.burger}>
        <BurgerMenu />
      </div>
    </div>

    <div className={styles.wrapper}>
      <p className={styles.pageName}>Библиотека</p>
      <div className={styles.user}>
        <p className={styles.greeting}>Привет, Иван!</p>
        <div className='avatarContainer'>
          <img src={avatarImg} alt='' className='avatar' />
        </div>
      </div>
    </div>
  </div>
);
