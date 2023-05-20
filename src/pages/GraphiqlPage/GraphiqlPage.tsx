import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './GraphiqlPage.module.scss';
import { Transition } from 'react-transition-group';
import { Sandbox } from '../../components/SandBox/Sandbox.tsx';
import { Book, BookOpen } from 'react-feather';
import { Docs } from '../../components/Docs/Docs.tsx';

const cx = classNames.bind(styles);

export const GraphiqlPage: React.FC = () => {
  const nodeRef = useRef(null);
  const [showDocs, setShowDocs] = useState(false);

  function toggleDocsIcon() {
    setShowDocs(!showDocs);
  }

  return (
    <div className={cx('g__wrapper')}>
      <div className={cx('g__icons')}>
        {!showDocs && <Book color={'#eee6cc'} onClick={toggleDocsIcon} />}
        {showDocs && <BookOpen color={'#eee6cc'} onClick={toggleDocsIcon} />}
      </div>
      {showDocs && (
        <Transition in={showDocs} timeout={500} nodeRef={nodeRef}>
          {(state) => <Docs animationClass={`docs-${state}`} />}
        </Transition>
      )}
      <Sandbox />
    </div>
  );
};
