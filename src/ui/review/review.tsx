import avatarImg from '../../assets/img/avatar-placeholder.png'
import {Rating} from '../rating/rating';

import styles from './review.module.css'

interface IReviewProps {
    avatarSrc?: string,
    name: string,
    date: string,
    rating: number,
    comment: string | null
}

export const Review = (props: IReviewProps) => (
        <div className={styles.container}>
            <div className={styles.headWrapper}>
                <img src={props.avatarSrc ? props.avatarSrc : avatarImg} alt="" className={styles.avatar}/>
                <div className={styles.textWrapper}>
                    <span className={styles.name}>{props.name}</span>
                    <span className={styles.name}>{props.date}</span>
                </div>
            </div>
            <Rating rate={props.rating}/>
            <p className={styles.comment}>{props.comment}</p>
        </div>
    )
