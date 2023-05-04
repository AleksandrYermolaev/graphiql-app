import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from 'components/Input/Input';
import 'react-toastify/dist/ReactToastify.css';
import classes from './SignUpPage.module.scss';

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
      }, 3000);
    }
  }, [isRegister, navigate]);

  const auth = getAuth();

  const onSubmit: SubmitHandler<IForm> = async (data) => {
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
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: 'Must be contain 1numbers, 1 letter, 1 спец символ min 8',
              },
            })}
            nameInput={'password'}
            type="password"
            errors={errors}
            placeholder={'Password'}
          />
          <button className={classes.button} onClick={handleSubmit(onSubmit)}>
            Зарегистрироваться
          </button>
        </fieldset>
      </form>
      <ToastContainer position="top-right" />
    </>
  );
};
