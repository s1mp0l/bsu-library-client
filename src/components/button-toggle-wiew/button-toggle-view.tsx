import styles from './button-toggle-view.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {bookListSlice} from "../../store/slices/book-list-slice";

interface IButtonToggleViewProps {
    horizontal: boolean,
    icoImgActive: string,
    icoImgInactive: string
}

interface IBookListState {
    horizontal: boolean
}

interface IRootState {
    bookList: IBookListState
}

export const ButtonToggleView = ({horizontal, icoImgActive, icoImgInactive}: IButtonToggleViewProps) => {
    const dispatch = useAppDispatch()
    const {setHorizontal} = bookListSlice.actions;
    const horizontalState = useAppSelector(state => state.bookListReducer.horizontal)
    const active = horizontal === horizontalState

    const handleSetHorizontal = () => {
        dispatch(setHorizontal(horizontal))
    }

    return (
        <button data-test-id={horizontal ? 'button-menu-view-list' : 'button-menu-view-window'}
                onClick={() => handleSetHorizontal()}
                type="button"
                className={[styles.button, active && styles.active].join(' ')}>
            <img src={active ? icoImgActive : icoImgInactive} alt=""/>
        </button>
    )
}

