import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { setToken } from 'store/userSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from 'components/Button';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from 'components/Input';
import { Link } from 'react-router-dom';
import { Form } from 'components/Form/Form';

export type IUser = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.userInfo.token);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IUser>({
    mode: 'onSubmit',
  });

  const auth = getAuth();

  useEffect(() => {
    if (token) {
      localStorage.setItem('token-ff', token);
      const timer = setTimeout(() => {
        navigate('/app', { replace: true });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [navigate, token]);

  const onSubmit: SubmitHandler<IUser> = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        dispatch(setToken(token));
        toast.success(<FormattedMessage id="userAuth" />);
        localStorage.setItem('token-ff', token);
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          toast.error(<FormattedMessage id="userNotExist" />);
        }
        if (err.code === 'auth/wrong-password') {
          toast.error(<FormattedMessage id="incorrectPassword" />);
        }
      });
  };

  return (
    <>
      <Form title={'logIn'} onSubmit={handleSubmit(onSubmit)}>
        <>
          <Input
            register={register('email')}
            nameInput={'email'}
            type="email"
            placeholder={useIntl().formatMessage({ id: 'placeholderEmail' })}
          />
          <Input
            register={register('password')}
            nameInput={'password'}
            type="password"
            placeholder={useIntl().formatMessage({ id: 'placeholderPassword' })}
          />
          <p>
            <FormattedMessage id="notRegister" />
            <Link to="/register">
              <FormattedMessage id="signUp" />
            </Link>
          </p>
          <Button
            styles={'button__form'}
            include={<FormattedMessage id="logIn" />}
            type={'submit'}
          />
        </>
      </Form>
      <ToastContainer position="top-right" />
    </>
  );
};
