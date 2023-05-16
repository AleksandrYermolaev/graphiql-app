import classNames from 'classnames/bind';
import styles from './Sandbox.module.scss';
import { ClientSandbox } from './ClientSandbox';
import { ServerSandbox } from './ServerSandbox/ServerSandbox.tsx';
import request from './request.tsx';

const cx = classNames.bind(styles);

export const Sandbox: React.FC = () => {
  return (
    <div className={cx('sandbox__wrapper')}>
      <ClientSandbox children={request()} />
      <ServerSandbox children={request()} />
    </div>
  );
};
