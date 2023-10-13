import {ParallaxSlider} from "../../components/parallax-slider/parallax-slider";
import {BurgerMenu} from "../../components/burger-menu/burger-menu";
import styles from './main-page.module.css'
import {Footer} from "../../components/footer/footer";
import {RecommendedBooks} from "../../components/books-for-mainpage/recommended-books";
import {BestBooks} from "../../components/books-for-mainpage/best-books";
import {AuthButtons} from "../../components/header/auth-buttons";

export const MainPage = () => {
    const a = 1;
    return (
        <div className={styles.mainPage}>
            <div className={styles.burger}>
                <BurgerMenu white={true}/>
            </div>
            <div className={styles.authBtns}>
                <AuthButtons white={true}/>
            </div>
            <ParallaxSlider />
            <div className={`${styles.mainPageBody}  pageBody`}>
                <div className={styles.recommend}>
                    <RecommendedBooks />
                </div>
                <div className={styles.popular}>
                    <BestBooks />
                </div>
                <Footer />
            </div>
        </div>
    );
};
