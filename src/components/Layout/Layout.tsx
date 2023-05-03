import { Outlet, Link } from 'react-router-dom';
import classes from './Layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/app">Main</Link>
        <Link to="/">Welcome</Link>
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>Footer</footer>
    </div>
  );
};
