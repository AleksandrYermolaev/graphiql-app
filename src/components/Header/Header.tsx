import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from './Header.module.scss';
import { SwitcherLanguage } from '../Switcher/SwitcherLanguage';
import { Button } from '../Button';
import { getInitialLocale } from 'helpers/getInitialLocale';
import { LOCALES } from 'IntlLocale/locales';
import { LocaleSlice } from 'store/localeSlice';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
import { useAppSelector } from 'hooks/useAppDispatch.ts';
import { Link } from 'react-router-dom';
import { setToken } from '../../store/userSlice.ts';
import { useLocation } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const cx = classNames.bind(styles);

const enum Locations {
  logIn = '/login',
  signUp = '/register',
  welcomePage = '/',
  mainPage = '/app',
}

const enum Links {
  welcome = 'goToWelcome',
  main = 'goToMain',
}

export const Header = () => {
  const token = useAppSelector((state) => state.userInfo.token);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const { setStoreLocale } = LocaleSlice.actions;
  const [scroll, setScroll] = useState<boolean>(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  const deleteToken = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(setToken(null));
      localStorage.removeItem('token-ff');
    });
  };

  const buttonStyle = scroll ? 'header__button-noscroll' : 'header__button-scroll';

  const handleChangeLanguage = () => {
    const locale =
      currentLocale === `${LOCALES.ENGLISH}` ? `${LOCALES.RUSSIAN}` : `${LOCALES.ENGLISH}`;
    setCurrentLocale(locale);
    localStorage.setItem('locale', `${locale}`);
    dispatch(setStoreLocale(locale));
  };

  useEffect(() => {
    window.addEventListener('scroll', setFixed);
    return () => window.removeEventListener('scroll', setFixed);
  }, []);

  const testLocation = () => {
    switch (pathname) {
      case Locations.welcomePage:
        return 'goToMain';
        break;
      case Locations.mainPage:
        return 'goToWelcome';
        break;
      default:
        return 'goToWelcome';
        break;
    }
  };

  const findPath = () => {
    switch (testLocation()) {
      case Links.welcome:
        return '/';
        break;
      case Links.main:
        return '/app';
        break;
      default:
        return '/';
        break;
    }
  };

  return (
    <header className={cx('header', { fixed: scroll })}>
      <div className={cx('header__location')}>
        <p className={cx('header__location-text', { fixed: scroll })}>ENG</p>
        <SwitcherLanguage currentLocale={currentLocale} handleChange={handleChangeLanguage} />
        <p className={cx('header__location-text', { fixed: scroll })}>RU</p>
      </div>
      <div className={cx('header__buttons')}>
        {token && (pathname === '/' || pathname === '/app') && (
          <Link to={findPath()} className={cx('header__links')}>
            <Button
              type={'button'}
              styles={`${buttonStyle}`}
              include={<FormattedMessage id={testLocation()} />}
            />
          </Link>
        )}
        {token && (
          <Link to="/" className={cx('header__links')}>
            <Button
              type={'button'}
              styles={`${buttonStyle}`}
              include={<FormattedMessage id="logOut" />}
              onClick={deleteToken}
            />
          </Link>
        )}
        {!token && (
          <Link to="/register" className={cx('header__links')}>
            <Button
              type={'button'}
              styles={`${buttonStyle}`}
              include={<FormattedMessage id="signUp" />}
            />
          </Link>
        )}
        {!token && (
          <Link to="/login" className={cx('header__links')}>
            <Button
              type={'button'}
              styles={`${buttonStyle}`}
              include={<FormattedMessage id="logIn" />}
            />
          </Link>
        )}
      </div>
    </header>
  );
};
