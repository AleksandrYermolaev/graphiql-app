import { Layout } from 'components/Layout';
import { GraphiqlPage } from 'pages/GraphiqlPage';
import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RegisterPage } from 'pages/RegisterPage';
import { WelcomePage } from 'pages/WelcomePage';

export default [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        errorElement: <NotFoundPage />,
        children: [
          {
            index: true,
            element: <WelcomePage />,
          },
          {
            path: 'app',
            element: <GraphiqlPage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
];
