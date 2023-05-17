import classNames from 'classnames/bind';
import styles from './Docs.module.scss';
import { GraphDoc } from '../GraphDoc';

const cx = classNames.bind(styles);

export const Docs: React.FC = () => {
  return (
    <div className={cx('docs__wrapper')}>
      <GraphDoc />
    </div>
  );
};
