import { FormEvent, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setToken } from 'store/userSliсe';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const auth = getAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        if (err.code === 'auth/user-not-found') {
          toast.error('User with this email is not registered');
        }
        if (err.code === 'auth/wrong-password') {
          toast.error('Incorrect password, please try again');
        }
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Войти</button>
      </form>
      <ToastContainer position="top-right" />
    </>
  );
};
