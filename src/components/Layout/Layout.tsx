import { Outlet, Link } from 'react-router-dom';
import classes from './Layout.module.scss';
import { LOCALES } from '../../IntlLocale/locales';
import { IntlProvider } from 'react-intl';
import { messages } from '../../IntlLocale/messages';
import { useAppSelector } from '../../hooks/useAppDispatch.ts';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Loader } from '../Loader/Loader.tsx';

export const Layout: React.FC = () => {
  const { locale } = useAppSelector((state) => state.localeInfo);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}>
      <div className={classes.wrapper}>
        <Header />
        <header>
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
    </IntlProvider>
  );
};
