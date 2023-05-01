import classes from './ComponentExample.module.scss';

interface ComponentExampleProps {
  prop1: number;
  prop2: number;
}

export const ComponentExample: React.FC<ComponentExampleProps> = ({ prop1, prop2 }) => {
  return <div className={classes.example}>{prop1 + prop2}</div>;
};
