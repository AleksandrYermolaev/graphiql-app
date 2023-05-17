import classNames from 'classnames/bind';
import styles from './Docs.module.scss';
import { GraphDoc } from '../GraphDoc';

const cx = classNames.bind(styles);

interface DocsProps {
  animationClass: string;
}

export const Docs: React.FC<DocsProps> = ({ animationClass }) => {
  return (
    <div className={cx('docs__wrapper', animationClass)}>
      <GraphDoc />
    </div>
  );
};
