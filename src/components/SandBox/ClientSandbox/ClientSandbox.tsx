import classNames from 'classnames/bind';
import styles from '../Sandbox.module.scss';
import { ReactNode } from 'react';
import { Accordion } from '../../Accordion/Accordion.tsx';
import { PlayCircle } from 'react-feather';

const cx = classNames.bind(styles);

interface ClientSandboxProps {
  children: ReactNode;
}

export const ClientSandbox: React.FC<ClientSandboxProps> = ({ children }) => {
  return (
    <div className={cx('sandbox__client')}>
      <div className={cx('sandbox__section-common', 'sandbox__request')}>
        {children}
        <div className={cx('sandbox__reques-icons')}>
          <PlayCircle color={'#e75b26'} size={'2em'} />
        </div>
      </div>
      <Accordion />
    </div>
  );
};
