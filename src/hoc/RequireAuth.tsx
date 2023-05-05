import { useLocation, Navigate } from 'react-router';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { setToken } from 'store/userSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const token = localStorage.getItem('token-ff') as string;
  const dispatch = useAppDispatch();

  if (token) {
    const decoded = jwtDecode<JwtPayload>(token);
    const expireTime = decoded.exp;
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime >= expireTime!) {
      dispatch(setToken(null));
      localStorage.removeItem('token-ff');
      return <Navigate to="/" state={{ from: location }} />;
    }
  } else {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};
