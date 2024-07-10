import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css';

export default function Layout() {
  const location = useLocation();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={location.pathname === '/' ? styles.active : ''} to={'/'}>
          home
        </Link>
        <Link className={location.pathname === '/login-form' ? styles.active : ''} to={'/login-form'}>
          login form
        </Link>
        <Link className={location.pathname === '/brotherhood' ? styles.active : ''} to={'/brotherhood'}>
          brotherhood
        </Link>
        <Link className={location.pathname === '/employee-form' ? styles.active : ''} to={'/employee-form'}>
          employee form
        </Link>
        <Link className={location.pathname === '/fake-store' ? styles.active : ''} to={'/fake-store'}>
          FakeStore
        </Link>
        <Link className={location.pathname === '/auth' ? styles.active : ''} to={'/auth'}>
          Auth
        </Link>
        <Link className={location.pathname === '/counter' ? styles.active : ''} to={'/counter'}>
          Counter
        </Link>
        <Link className={location.pathname === '/know-gender' ? styles.active : ''} to={'/know-gender'}>
          Know Gender
        </Link>
      </header>
      <main className={styles.main}>
        <h2>Current Page: {location.pathname}</h2> {/* Отображение текущей страницы */}
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer content</footer>
    </div>
  );
}








