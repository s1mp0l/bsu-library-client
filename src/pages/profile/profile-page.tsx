import {booksAPI} from "../../api/books-api";
import {Button} from "../../ui/button/button";
import {ProfileLeftPanel} from "./profile-left-panel";
import {ProfileNowReading} from "./profile-now-reading";

interface ProfilePageProps {
    id: number
}

export const ProfilePage = ({id}: ProfilePageProps) => {
    const {data: user} = booksAPI.useFetchUserDataQuery(id)
    return (
        <div className='container'>
            <div className='profileBackGround' />
            <div className="left-bar">
                <ProfileLeftPanel />
            </div>
            <div className="currentBooks mt-5 mb-5">
                <ProfileNowReading />
            </div>
        </div>
    );
};
