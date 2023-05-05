import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  style: string;
  content: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ type, style, content}) => {

  return (
    <button type={type} className={cx('button', `${style}`)}>
      {content}
    </button>
  );
};

export default Button;
