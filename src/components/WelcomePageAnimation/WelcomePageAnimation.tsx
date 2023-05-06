import classNames from 'classnames/bind';
import styles from './WelcomePageAnimation.module.scss';
import { request } from './CardInfo.ts';
import { response } from './CardInfo.ts';

const cx = classNames.bind(styles);

const CodeAnimation = () => {
  return (
    <div className={cx('book')}>
      <code className={cx('text', 'text-inside')}>{response}</code>
      <div className={cx('cover')}>
        <code className={cx('text', 'text-outside')}>{request}</code>
      </div>
    </div>
  );
};

export default CodeAnimation;
