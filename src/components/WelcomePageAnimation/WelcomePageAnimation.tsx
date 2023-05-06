import classNames from 'classnames/bind';
import styles from './WelcomePageAnimation.module.scss';
import { request } from './CardInfo.ts';
import { response } from './CardInfo.ts';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const WelcomePageAnimation = () => {
  return (
    <div className={cx('animation__inside')}>
      <code className={cx('animation__text', 'animation__text-inside')}>{response}</code>
      <div className={cx('animation__outside')}>
        <code className={cx('animation__text', 'animation__text-outside')}>{request}</code>
        <p className={cx('animation__message')}>
          <FormattedMessage id={'hover_for_response'} />
        </p>
      </div>
    </div>
  );
};

export default WelcomePageAnimation;
