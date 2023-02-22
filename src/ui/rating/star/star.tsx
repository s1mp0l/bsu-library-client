import starActiveImg from '../../../assets/img/star-active.svg'
import starInactiveImg from '../../../assets/img/star-inactive.svg'

interface IStarProps {
    active: boolean
}

export const Star = ( {active}: IStarProps ) => {
    const path: string = active ? starActiveImg : starInactiveImg;
    return (
        <div>
            <img src={path} alt="Star"/>
        </div>
    )
}
