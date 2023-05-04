import classNames from "classnames/bind";
import styles from './Header.module.scss';
import SwitcherLanguage from "../Switcher/SwitcherLanguage/SwitcherLanguage.tsx";
import Button from '../Button/Button.tsx';
import { FormattedMessage } from 'react-intl';
import {useState} from 'react';
import {getInitialLocale} from '../../helpers/getInitialLocale.tsx';
import {LOCALES} from '../../IntlLocale/locales.tsx';
import {LocaleSlice} from '../../store/localeSclice.tsx';
import {useAppDispatch} from '../../hooks/useAppDispatch.ts';


const cx = classNames.bind(styles);

const Header = () => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const dispatch = useAppDispatch();
  const {setStoreLocale} = LocaleSlice.actions;

  const handleChangeLanguage = () => {
    const locale = currentLocale === `${LOCALES.ENGLISH}` ? `${LOCALES.RUSSIAN}` : `${LOCALES.ENGLISH}`;
    setCurrentLocale(locale);
    localStorage.setItem('locale', `${locale}`);
    dispatch(setStoreLocale(locale));
  };

  return (
    <header className={cx('header')}>
      <div className={cx('header__location')}>
        <p className={cx('header__location-text')}>ENG</p>
        <SwitcherLanguage currentLocale={currentLocale} handleChange={handleChangeLanguage}/>
        <p className={cx('header__location-text')}>RU</p>
      </div>
      <div className={cx('header__buttons')}>
        <Button type={'button'} style={'button__header'} content={<FormattedMessage id='signUp'/>}/>
        <Button type={'button'} style={'button__header'} content={<FormattedMessage id='logIn'/>}/>
      </div>
    </header>
  );
};

export default Header;
