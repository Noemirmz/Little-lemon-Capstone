import { Routes, Route } from 'react-router-dom';
import BookingPage from '../booking/BookingPage';
import Core from '../Core';
import Main from '../Main';
export default function RoutesApp(){

    return(
        <>
             <Routes>
                <Route element={<Core></Core>}>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/booking-page' element={<BookingPage/>}/>
                </Route>
            </Routes>
        </>
    );
}