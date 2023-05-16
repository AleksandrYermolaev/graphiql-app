import classNames from 'classnames/bind';
import styles from './Sandbox.module.scss';

const cx = classNames.bind(styles);

export const request = () => {
  return <div className={cx('sandbox__section-common', 'sandbox__request')}>example, delete</div>;
};

export default request;
