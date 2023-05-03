import classNames from 'classnames/bind';
import styles from './SwitcherLanguage.module.scss';

const cx = classNames.bind(styles);

export interface SwitcherInputProps {
  handleChange: () => void;
}

const SwitcherLanguage: React.FC<SwitcherInputProps> = ({ handleChange }) => {

  return (
    <label htmlFor='switcher-language' className={cx('switcher-language__label')}>
      <input
        type='checkbox'
        id = 'switcher-language'
        className={cx('switcher-language__input')}
        onChange={handleChange}
      />
      <span className={cx('switcher-language__circle')} />
    </label>
  );
};

export default SwitcherLanguage;