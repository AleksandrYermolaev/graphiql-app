import classNames from 'classnames/bind';
import classes from '../Sandbox.module.scss';
import { useAppSelector } from 'hooks/useAppDispatch';
import { selectResponce } from 'store/responceSlice';
import { JsonView, darkStyles } from 'react-json-view-lite';
import './ResponseSection.scss';

const cx = classNames.bind(classes);

export const ResponseSection = () => {
  const { data } = useAppSelector(selectResponce);
  return (
    <div className={cx('sandbox__section-common', 'sandbox__request')}>
      {data ? <JsonView data={data} style={darkStyles} /> : null}
    </div>
  );
};

export default ResponseSection;
