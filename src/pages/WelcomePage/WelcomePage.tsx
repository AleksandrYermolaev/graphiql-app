import classNames from 'classnames/bind';
import styles from './WelcomePage.module.scss';
import WelcomePageAnimation from '../../components/WelcomePageAnimation/WelcomePageAnimation.tsx';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

export const WelcomePage = () => {
  return (
    <div className={cx('welcome__wrapper')}>
      <div className={cx('welcome__heading')}>
        <p className={cx('welcome__heading_text')}>
          <FormattedMessage id={'wp_heading1'} />
        </p>
        <h1 className={cx('welcome__heading_main')}>GraphQl</h1>
        <p className={cx('welcome__heading_text')}>
          <FormattedMessage id={'wp_heading2'} />
        </p>
      </div>
      <div className={cx('welcome__content')}>
        <div className={cx('welcome__info')}>
          <p className={cx('welcome__content-part')}>
            <FormattedMessage id={'wp1'} />
          </p>
          <p className={cx('welcome__content-part')}>
            <FormattedMessage id={'wp2'} />
          </p>
          <p className={cx('welcome__content-part')}>
            <FormattedMessage id={'wp3'} />
          </p>
          <p className={cx('welcome__content-part')}>
            <FormattedMessage id={'wp4'} />
          </p>
        </div>
        <div className={cx('welcome__content-animation')}>
          <WelcomePageAnimation />
        </div>
      </div>
    </div>
  );
};
