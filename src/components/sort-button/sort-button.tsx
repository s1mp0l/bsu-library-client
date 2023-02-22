import icoSort from '../../assets/img/ico-sort.svg'

import styles from './sort-button.module.css'

export const SortButton = () => (
    <button type='button' className={styles.button}>
        <img src={icoSort} alt="" className="ico"/>
        <span className={styles.text}>По рейтингу</span>
    </button>
)
