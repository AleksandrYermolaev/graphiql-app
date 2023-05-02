import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setToken } from 'store/userSlise';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPas] = useState('');
  const dispatch = useAppDispatch();
  const auth = getAuth();

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        dispatch(setToken(token));
        toast.success('User authorisation successfully');
        localStorage.setItem('token-ff', token);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <form>
        <input
          name="login"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPas(e.target.value)}
        />
        <button type="submit" onClick={(e) => onClickButton(e)}>
          Войти
        </button>
      </form>
      <ToastContainer position="top-right" />
    </>
  );
};
