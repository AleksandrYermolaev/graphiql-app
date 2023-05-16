import classNames from 'classnames/bind';
import styles from './GraphiqlPage.module.scss';
import { Sandbox } from '../../components/SandBox/Sandbox.tsx';

const cx = classNames.bind(styles);

export const GraphiqlPage: React.FC = () => {
  return (
    <div className={cx('g__wrapper')}>
      <Sandbox />
    </div>
  );
};
