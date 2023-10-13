import { Link } from 'react-router-dom';
import {Button} from "react-bootstrap";

import logoImg from '../../assets/img/logo_elib.png';
import styles from './header.module.css';
import { BurgerMenu } from '../burger-menu/burger-menu';
import {useAppSelector} from "../../hooks/redux";
import {AuthButtons} from "./auth-buttons";
import {baseServer} from "../../const";

export const Header = () => {
    const isAuth = useAppSelector(state => state.userReducer.isAuth)
    const avatarImg = `${baseServer}profile-1.jpg`

    return (
        <div className={styles.container}>
            <div>
                <Link to='/main'>
                    <img src={logoImg} alt='' className={styles.logo} />
                </Link>
                <div className={styles.burger}>
                    <BurgerMenu />
                </div>
            </div>

            <div className={styles.wrapper}>
                <Link to='books/all'><p className={styles.pageName}>Библиотека</p></Link>
                { isAuth ?
                    <Link to='/profile' className={styles.user}>
                        <p className={styles.greeting}>Привет, Илья!</p>
                        <div className='avatarContainer ml-3 mr-3'>
                            <img src={avatarImg} alt='' className={styles.avatarImg} />
                        </div>
                    </Link> : <AuthButtons />
                }
            </div>
        </div>
    );
}

