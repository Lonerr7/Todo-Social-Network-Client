import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './reset.scss';
import './fonts.scss';
import './index.scss';
import store, { persistor } from './redux/store';
import AppContainer from './AppContainer';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Router>
  </Provider>
);
