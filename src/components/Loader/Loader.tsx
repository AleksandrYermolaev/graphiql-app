import classNames from 'classnames/bind';
import styles from './Loader.module.scss';

const cx = classNames.bind(styles);

export const Loader = () => {
  return (
    <div id="page" className={cx('loader')}>
      <div id="container" className={cx('loader__container')}>
        <div className={cx('loader__ring')} />
        <div className={cx('loader__ring')} />
        <div className={cx('loader__ring')} />
        <div className={cx('loader__ring')} />
        <div className={cx('loader__text')}>Loading...</div>
      </div>
    </div>
  );
};
