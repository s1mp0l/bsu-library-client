import {useSearchParams} from "react-router-dom";
import icoSort from '../../assets/img/ico-sort.svg'

import styles from './sort-button.module.css'


export const SortButton = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => () => {
        setSearchParams({ sort: 'true' });
    }

    return (
        <button type='button' className={styles.button} onClick={handleClick}>
            <img src={icoSort} alt="" className="ico"/>
            <span className={styles.text}>По рейтингу</span>
        </button>
    )
}

