import {CardsList} from '../../components/cards-list/cards-list';
import {ControlPanel} from '../../components/control-panel/control-panel';
import {useAppSelector} from '../../hooks/redux';

import styles from './book-page.module.css'

export const BookPage = () => {
    const horizontal = useAppSelector(state => state.bookListReducer.horizontal)

    return (
        <div className={styles.container}>
            <ControlPanel />
            <CardsList horizontal={horizontal} />
        </div>
    );
}
