import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from 'routes';
import 'styles/global.scss';

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
