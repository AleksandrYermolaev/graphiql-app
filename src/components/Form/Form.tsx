import { FormattedMessage } from 'react-intl';
import classes from './Form.module.scss';

type IPropsForm = {
  title: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: JSX.Element;
};

export const Form = ({ title, children, onSubmit }: IPropsForm) => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={onSubmit}>
        <fieldset className={classes.fieldset}>
          <h2 className={classes.title}>
            <FormattedMessage id={title} />
          </h2>
          {children}
        </fieldset>
      </form>
    </div>
  );
};
