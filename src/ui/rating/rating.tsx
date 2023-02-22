import {Star} from './star/star'

import style from './rating.module.css';

interface IRatingProps {
    rate: number | null;
}

export const Rating = ({rate}: IRatingProps) => (
        <div className={style.rating}>
            <Star active={rate ? rate >= 1 : false} />
            <Star active={rate ? rate >= 2 : false} />
            <Star active={rate ? rate >= 3 : false} />
            <Star active={rate ? rate >= 4 : false} />
            <Star active={rate ? rate >= 5 : false} />
        </div>
)
