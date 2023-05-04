import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import SwitcherLanguage from '../Switcher/SwitcherLanguage/SwitcherLanguage.tsx';

const cx = classNames.bind(styles);

const Header = () => {
  const hadleChangeLocale = () => {
    console.log('locale changed');
  };
  return (
    <header className={cx('header')}>
      <div className={cx('header__location')}>
        <p className={cx('header__location-text')}>RU</p>
        <SwitcherLanguage handleChange={hadleChangeLocale} />
        <p className={cx('header__location-text')}>ENG</p>
      </div>
    </header>
  );
};

export default Header;
