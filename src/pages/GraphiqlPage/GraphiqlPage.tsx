import classNames from 'classnames/bind';
import styles from './GraphiqlPage.module.scss';

const cx = classNames.bind(styles);

export const GraphiqlPage: React.FC = () => {
  return (
    <div className={cx('g__wrapper')}>
      <div className={cx('g__sandbox')}>
        <div className={cx('g__section-common', 'g__request')}>request</div>
        <div className={cx('g__section-common', 'g__response')}>response</div>
      </div>
    </div>
  );
};
