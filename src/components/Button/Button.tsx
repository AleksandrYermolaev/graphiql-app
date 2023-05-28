import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const cx = classNames.bind(styles);

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset' | undefined;
  styles: string;
  include: JSX.Element;
}

export const Button: React.FC<ButtonProps> = ({ type, styles, include, ...props }) => {
  return (
    <button type={type} className={cx('button', `${styles}`)} {...props}>
      {include}
    </button>
  );
};
