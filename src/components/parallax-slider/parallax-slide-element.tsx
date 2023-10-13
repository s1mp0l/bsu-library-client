import {Link} from "react-router-dom";
import {Button} from "../../ui/button/button";
import styles from "./parallax-slider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


interface ParallaxSlideElementProps {
    text?: string,
    title?: string,
    buttonText?: string,
    linkPath?: string
}

export const ParallaxSlideElement = ({text, title, buttonText, linkPath}: ParallaxSlideElementProps) => {
    const a = 1;
    return (
        <div className={styles.slideContainer}>
            <div className={styles.title} data-swiper-parallax="-500">
                {title || 'Заголовок'}
            </div>
            <div className="text" data-swiper-parallax="-300">
                <p>
                    {text || 'Текст'}
                </p>
            </div>
            <div data-swiper-parallax="-100">
                <Link className='mt-3' to={linkPath || '/'}>
                    <Button className='' text={buttonText || 'Кнопка'} />
                </Link>
            </div>
        </div>
    );
};
