import {booksAPI} from "../../api/books-api";
import {Card} from "../../components/card/card";

export const ProfileNowReading = () => {
    const {data: books} = booksAPI.useFetchBooksByRatingQuery('')

    const bookCards = books?.length ? books?.slice(0,3).map(b => <Card key={b.id} book={b} horizontal={false} />) : <p>Данные не загружены</p>
    return (
        <div className='userBlockContainer'>
            <div className='userBlockTitle'>
                <p className='blockTitle' style={{color: 'white'}}>Сейчас читает: </p>
            </div>
            <div className='userMainPageBlock'>
                {bookCards}
            </div>
        </div>
    );
};
