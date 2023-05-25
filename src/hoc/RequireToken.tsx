import { useLocation, Navigate } from 'react-router';

export const RequireToken = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const token = localStorage.getItem('token-ff') as string;
  if (token) {
    return <Navigate to="/app" state={{ from: location }} />;
  }
  return children;
};
