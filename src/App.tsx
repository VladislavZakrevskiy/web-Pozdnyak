import { Provider } from 'react-redux';
import { createReduxStore } from './store/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

function App() {
  const store = createReduxStore();

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
