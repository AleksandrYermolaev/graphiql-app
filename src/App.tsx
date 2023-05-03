import { Provider } from 'react-redux';
import { store } from 'store';
import 'styles/global.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>Router and redux providers here</div>;
    </Provider>
  );
};

export default App;
