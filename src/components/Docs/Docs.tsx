import classNames from 'classnames/bind';
import styles from './Docs.module.scss';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface DocsProps {
  children: ReactNode;
}

export const Docs: React.FC<DocsProps> = ({ children }) => {
  return (
    <div className={cx('docs__wrapper')}>
      <p>Docs</p>
      {children}
    </div>
  );
};
