import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/layout';
import { LayoutBookPage } from './components/layout-book-page/layout-book-page';
import { BookPage } from './pages/book';
import { BookDetailsPage } from './pages/book-deatils';
import { ContractPage } from './pages/contract';
import { TermsPage } from './pages/terms';

import './index.css';
import { setupStore } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <div className='pageBody'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Navigate to='books/all' />} />
              <Route element={<LayoutBookPage />}>
                <Route path='/books/:category' element={<BookPage />} />
                <Route path='/terms-of-use' element={<TermsPage />} />
                <Route path='/contract-offer' element={<ContractPage />} />
              </Route>
              <Route path='book/:category/:bookId' element={<BookDetailsPage />} />
            </Route>
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
