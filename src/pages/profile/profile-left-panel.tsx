import {Button} from "react-bootstrap";
import {baseServer} from "../../const";
import './profile-page.css'

export const ProfileLeftPanel = () => {
    const a = 1;
    return (
        <div className="d-flex flex-column gap-1 align-items-center">
            <img src={`${baseServer}profile-1.jpg`} alt="" className='profileImg'/>
            <p className="profileTitle">Илья Сидорук</p>
            <p className='profileText'>Читатель</p>
            <Button variant='outline-danger' className='mt-3'>Выйти</Button>
        </div>
    );
};
