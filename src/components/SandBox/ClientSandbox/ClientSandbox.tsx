import classNames from 'classnames/bind';
import styles from '../Sandbox.module.scss';
import { Accordion } from '../../Accordion/Accordion.tsx';
import { TextEditor } from 'components/TextEditor/TextEditor.tsx';

const cx = classNames.bind(styles);

export const ClientSandbox: React.FC = () => {
  return (
    <div className={cx('sandbox__client')}>
      <div className={cx('sandbox__section-common', 'sandbox__request')}>
        <TextEditor />
      </div>
      <Accordion />
    </div>
  );
};
