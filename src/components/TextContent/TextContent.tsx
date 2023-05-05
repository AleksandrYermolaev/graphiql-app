import classNames from 'classnames/bind';
import styles from './TextContent.module.scss';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

const cx = classNames.bind(styles);

interface TextContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  variant?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

export const TextContent: React.FC<TextContentProps> = ({
  variant = 'dark',
  size = 'medium',
  className,
  children,
  ...props
}) => {
  const outerClass = className as string;
  const classes = cx({
    text: true,
    light: variant === 'light',
    small: size === 'small',
    large: size === 'large',
    [outerClass]: !!className,
  });
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
