import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './reset.scss';
import './fonts.scss';
import './index.scss';
import store from './redux/store';
import AppContainer from './AppContainer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>
);
