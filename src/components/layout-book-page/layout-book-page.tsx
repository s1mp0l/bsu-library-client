import { Outlet } from 'react-router-dom';

import { Sidebar } from '../sidebar/sidebar';

import styles from './layout-book-page.module.css';

export const LayoutBookPage = () => (
  <div className={styles.layout}>
    <div className={styles.sideBarContainer}>
      <Sidebar />
    </div>
    <Outlet />
  </div>
);
