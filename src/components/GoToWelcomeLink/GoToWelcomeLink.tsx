import classNames from 'classnames/bind';
import styles from './GoToWelcomeLink.module.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { ChevronsLeft } from 'react-feather';

const cx = classNames.bind(styles);

export const GoToWelcomeLink = () => {
  return (
    <Link to="/" className={cx('go__link-wrapper')}>
      <p className={cx('go__link-wrapper')}>
        <ChevronsLeft className={cx('go__link-icon')} />
        <FormattedMessage id="goToWelcomeInRegister" />
      </p>
    </Link>
  );
};
