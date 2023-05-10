import { useState } from 'react';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from './Header.module.scss';
import { SwitcherLanguage } from '../Switcher/SwitcherLanguage';
import { Button } from '../Button';
import { getInitialLocale } from 'helpers/getInitialLocale';
import { LOCALES } from 'IntlLocale/locales';
import { LocaleSlice } from 'store/localeSlice';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';

const cx = classNames.bind(styles);

export const Header = () => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const dispatch = useAppDispatch();
  const { setStoreLocale } = LocaleSlice.actions;
  const [scroll, setScroll] = useState<boolean>(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  const buttonStyle = scroll ? 'header__button-noscroll' : 'header__button-scroll';

  window.addEventListener('scroll', setFixed);

  const handleChangeLanguage = () => {
    const locale =
      currentLocale === `${LOCALES.ENGLISH}` ? `${LOCALES.RUSSIAN}` : `${LOCALES.ENGLISH}`;
    setCurrentLocale(locale);
    localStorage.setItem('locale', `${locale}`);
    dispatch(setStoreLocale(locale));
  };

  return (
    <header className={cx('header', { fixed: scroll })}>
      <div className={cx('header__location')}>
        <p className={cx('header__location-text', { fixed: scroll })}>ENG</p>
        <SwitcherLanguage currentLocale={currentLocale} handleChange={handleChangeLanguage} />
        <p className={cx('header__location-text', { fixed: scroll })}>RU</p>
      </div>
      <div className={cx('header__buttons')}>
        <Button
          type={'button'}
          styles={`${buttonStyle}`}
          include={<FormattedMessage id="signUp" />}
        />
        <Button
          type={'button'}
          styles={`${buttonStyle}`}
          include={<FormattedMessage id="logIn" />}
        />
      </div>
    </header>
  );
};
