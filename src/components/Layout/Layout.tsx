import { Outlet, Link } from 'react-router-dom';
import classes from './Layout.module.scss';
import Header from "../Header/Header.tsx";
import {LOCALES} from "../../IntlLocale/locales.tsx";
import {IntlProvider} from 'react-intl';
import {messages} from '../../IntlLocale/messages.tsx';
import {useAppSelector} from "../../hooks/useAppDispatch.ts";
import { Footer } from 'components/Footer';

export const Layout: React.FC = () => {
  const {locale} = useAppSelector((state) => state.localeInfo);

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className={classes.wrapper}>
        <Header />
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
    </IntlProvider>
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
      <Footer />
    </div>
  );
};
