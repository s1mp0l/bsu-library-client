import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Parallax, Autoplay} from "swiper";
import {ParallaxSlideElement} from "./parallax-slide-element";
import styles from './parallax-slider.module.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import parallaxImage from '../../assets/mainpage/book-parallax-dark.jpg'


export const ParallaxSlider = () => (
    <div className={styles.parallaxContainer}>
        <Swiper
            style={{width: '100%', height: '100%'}}
            speed={1000}
            parallax={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className={styles.swiper}
            centeredSlides={true}
            autoplay={{
                "delay": 3000,
                "disableOnInteraction": false
            }}
        >
            <div
                slot="container-start"
                className={styles.parallaxBg}
                style={{backgroundImage: `url(${parallaxImage})`}}
                data-swiper-parallax="-30%"/>

            <SwiperSlide className={styles.swiperSlide}>
                <ParallaxSlideElement title='Широчайший выбор на любой вкус'
                                      buttonText='Перейти в каталог'
                                      linkPath='/books/all'
                                      text='В нашей библиотеке вы сможете познать богатство литературных произведений различных жанров и эпох. Погрузитесь в увлекательный мир слов, идите на встречу с удивительными авторами и путешествуйте по бескрайним страницам книг.'/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <ParallaxSlideElement title='Откройте новые горизонты с нашими рекомендациями книг'
                                      buttonText='Зарегистрироваться' linkPath='/login'
                                      text='Независимо от того, что вы ищете - захватывающий триллер, трогательную историю о любви, философское произведение или научно-популярную книгу, у нас есть рекомендации для каждого читателя. Мы учитываем разнообразие интересов и вкусов, чтобы предложить вам книги, которые подарят вам удовольствие и вдохновение.'/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <ParallaxSlideElement title='Узнай о книге все перед тем, как читать'
                                      buttonText='Выбрать книгу' linkPath='/books/all'
                                      text='Наша библиотека предоставляет полную информацию о каждой книге в нашем ассортименте. Вы сможете ознакомиться с обложкой, кратким описанием сюжета, а также с информацией об авторе. Мы также предоставляем обзоры и рейтинги от других читателей, чтобы вы могли узнать, что думают о произведении люди, которые уже его прочитали.'/>
            </SwiperSlide>
        </Swiper>
    </div>
);
