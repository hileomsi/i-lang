import 'config/ReactotronConfig';
import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scenes/Login';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

Sentry.init({ dsn: 'https://af97ef4aa7d347f0af3b2a3802aa3fe0@sentry.io/1481969' });

ReactGA.initialize('UA-142147897-1');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
