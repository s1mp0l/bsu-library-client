import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import classNames from 'classnames';

import icoBurger from '../../assets/img/ico-burger.svg';
import icoBurgerWhite from '../../assets/img/ico-burger-white.svg';
import icoCloseBurger from '../../assets/img/ico-close-burger-orange.svg';
import {MainLink} from '../sidebar/main-link/main-link';
import {Sidebar} from '../sidebar/sidebar';

import styles from './burger-menu.module.css';

interface BurgerMenuProps {
    white?: boolean
}

export const BurgerMenu = ({white}: BurgerMenuProps) => {
    const ico = white ? icoBurgerWhite : icoBurger;
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
            <button data-test-id='button-burger'
                    className={styles.burgerBtn}
                    type='button'
                    onClick={toggleMenuActive}
                    aria-label='burger-menu'
            >
                <img src={menuActive ? icoCloseBurger : ico} alt=''/>
            </button>
            <div className={styles.burgerWrapper}>
                <div className={classNames(styles.burgerBody, {[styles.notVisible]: !menuActive})}>
                    <div style={{paddingTop: '32px', paddingBottom: '52px'}}>
                        <MainLink to='/main' pageName='Главная'/>
                    </div>
                    <Sidebar inBurgerMenu={true}/>
                    <div className={styles.additionalLinks}>
                        <MainLink to='/profile' pageName='Профиль'/>
                        <MainLink to='/' pageName='Выход'/>
                    </div>
                </div>
            </div>
        </div>
    );
};
