import classNames from 'classnames/bind';
import styles from './SwitcherLanguage.module.scss';
import { LOCALES } from '../../../IntlLocale/locales';

const cx = classNames.bind(styles);

export interface SwitcherInputProps {
  currentLocale: string;
  handleChange: () => void;
}

export const SwitcherLanguage: React.FC<SwitcherInputProps> = ({ currentLocale, handleChange }) => {
  const isRussian = currentLocale === LOCALES.RUSSIAN;
  return (
    <label htmlFor="switcher-language" className={cx('switcher-language__label')}>
      <input
        type="checkbox"
        id="switcher-language"
        className={cx('switcher-language__input')}
        onChange={handleChange}
        checked={isRussian}
      />
      <span className={cx('switcher-language__circle')} />
    </label>
  );
};
