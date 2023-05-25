import { Layout } from 'components/Layout';
import { RequireToken } from 'hoc/RequireToken';
import { GraphiqlPage } from 'pages/GraphiqlPage';
import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { SignUpPage } from 'pages/SignUpPage';
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
            element: (
              <RequireToken>
                <LoginPage />
              </RequireToken>
            ),
          },
          {
            path: 'register',
            element: (
              <RequireToken>
                <SignUpPage />
              </RequireToken>
            ),
          },
        ],
      },
    ],
  },
];
