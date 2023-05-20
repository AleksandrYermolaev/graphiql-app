import classNames from 'classnames/bind';
import styles from '../Sandbox.module.scss';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface ServerSandboxProps {
  children: ReactNode;
}

export const ServerSandbox: React.FC<ServerSandboxProps> = ({ children }) => {
  return <div className={cx('sandbox__section-common', 'sandbox__server')}>{children}</div>;
};
