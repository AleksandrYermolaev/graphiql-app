import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import 'react-toastify/dist/ReactToastify.css';
import classes from './SignUpPage.module.scss';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/Button';

export type IForm = {
  email: string;
  password: string;
};

export const SignUpPage = () => {
  const [isRegister, setRegister] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (isRegister) {
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 2000);
    }
  }, [isRegister, navigate]);

  const auth = getAuth();

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    console.log('onSubmit: ', data.email, data.password);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setRegister(true);
        toast.success('User registered successfully');
      })
      .catch((err) => {
        setRegister(false);
        toast.error(err.message);
      });
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={classes.fieldset}>
          <h2 className={classes.title}>
            <FormattedMessage id="signUp" />
          </h2>
          <Input
            register={register('email', {
              required: 'Requered',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            nameInput={'email'}
            type="email"
            errors={errors}
            placeholder={'Email'}
          />
          <Input
            register={register('password', {
              required: 'Requered',
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8}/,
                message:
                  'Must be contain minimum 8 symbols, at least one letter, one digit, one special character. First letter',
              },
            })}
            nameInput={'password'}
            type="password"
            errors={errors}
            placeholder={'Password'}
          />
        </fieldset>
        <div className={classes.link}>
          <FormattedMessage id="allreadyRegister" />
          <Link to="/login">
            <FormattedMessage id="here" />
          </Link>
        </div>
        <Button
          styles={'button__form'}
          include={<FormattedMessage id="signUp" />}
          type={undefined}
        />
      </form>
      <ToastContainer position="top-right" />
    </>
  );
};
