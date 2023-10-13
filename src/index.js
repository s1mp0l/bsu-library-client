import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';

import {Layout} from './components/layout/layout';
import {LayoutBookPage} from './components/layout-book-page/layout-book-page';
import {BookPage} from './pages/book';
import {BookDetailsPage} from './pages/book-deatils';
import {ContractPage} from './pages/contract';
import {TermsPage} from './pages/terms';

import {setupStore} from './store/store';
import {ProfilePage} from "./pages/profile/profile-page";
import {MainPage} from "./pages/mainpage/main-page";
import {LoginPage} from "./pages/login/login-page";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();

root.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<Navigate to='books/all'/>}/>
                        <Route element={<LayoutBookPage/>}>
                            <Route path='/books/:category' element={<BookPage/>}/>
                            <Route path='/terms-of-use' element={<TermsPage/>}/>
                            <Route path='/contract-offer' element={<ContractPage/>}/>
                        </Route>
                        <Route path='book/:category/:bookId' element={<BookDetailsPage/>}/>
                        <Route path='/profile' element={<ProfilePage id={1}/>} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/registration' element={<LoginPage />} />
                    </Route>
                    <Route path='/main' element={<MainPage />} />
                </Routes>
            </Provider>
        </HashRouter>
    </React.StrictMode>
);
