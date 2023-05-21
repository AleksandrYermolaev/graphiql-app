import { Suspense, lazy } from 'react';
import classNames from 'classnames/bind';
import styles from './Docs.module.scss';
import { Loader } from 'components/Loader';

const cx = classNames.bind(styles);

interface DocsProps {
  animationClass: string;
}

const GraphDoc = lazy(() => import('../GraphDoc/GraphDoc'));

export const Docs: React.FC<DocsProps> = ({ animationClass }) => {
  return (
    <div className={cx('docs__wrapper', animationClass)}>
      <Suspense fallback={<Loader />}>
        <GraphDoc />
      </Suspense>
    </div>
  );
};
