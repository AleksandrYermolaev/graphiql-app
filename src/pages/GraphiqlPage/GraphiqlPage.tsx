import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './GraphiqlPage.module.scss';
import { Transition } from 'react-transition-group';
import { Sandbox } from '../../components/SandBox/Sandbox.tsx';
import { Book, BookOpen } from 'react-feather';
import { Docs } from '../../components/Docs/Docs.tsx';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch.ts';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setToken } from 'store/userSlice.ts';

const cx = classNames.bind(styles);

export const GraphiqlPage: React.FC = () => {
  const nodeRef = useRef(null);
  const [showDocs, setShowDocs] = useState(false);
  const token = useAppSelector((state) => state.userInfo.token);
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useAppDispatch();

  function toggleDocsIcon() {
    setShowDocs(!showDocs);
  }

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [navigate, token]);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const token = await user.getIdToken();
      dispatch(setToken(token));
      localStorage.setItem('token-ff', token);
    } else {
      dispatch(setToken(null));
      localStorage.removeItem('token-ff');
    }
  });

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
