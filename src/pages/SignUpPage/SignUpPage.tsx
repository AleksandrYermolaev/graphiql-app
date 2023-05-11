import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import 'react-toastify/dist/ReactToastify.css';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from 'components/Button';
import { Form } from 'components/Form/Form';

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
      const timer = setTimeout(() => {
        navigate('/login', { replace: true });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isRegister, navigate]);

  const auth = getAuth();

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setRegister(true);
        toast.success(<FormattedMessage id="successRegister" />);
      })
      .catch((err) => {
        setRegister(false);
        if (err.code === 'auth/email-already-in-use') {
          toast.error(<FormattedMessage id="userExist" />);
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <>
      <Form title={'signUp'} onSubmit={handleSubmit(onSubmit)}>
        <>
          <Input
            register={register('email', {
              required: useIntl().formatMessage({ id: 'requered' }),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: useIntl().formatMessage({ id: 'invalidEmail' }),
              },
            })}
            nameInput={'email'}
            type="email"
            errors={errors}
            placeholder={useIntl().formatMessage({ id: 'placeholderEmail' })}
          />
          <Input
            register={register('password', {
              required: useIntl().formatMessage({ id: 'requered' }),
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8}/,
                message: useIntl().formatMessage({ id: 'inValidPassword' }),
              },
            })}
            nameInput={'password'}
            type="password"
            errors={errors}
            placeholder={useIntl().formatMessage({ id: 'placeholderPassword' })}
          />
          <p>
            <FormattedMessage id="allreadyRegister" />
            <Link to="/login">
              <FormattedMessage id="here" />
            </Link>
          </p>
          <Button
            styles={'button__form'}
            include={<FormattedMessage id="signUp" />}
            type={'submit'}
          />
        </>
      </Form>
      <ToastContainer position="top-right" />
    </>
  );
};
