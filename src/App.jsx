import React from 'react';

import Login from 'containers/scenes/Login';
import ReactGA from 'react-ga';
import * as Sentry from '@sentry/browser';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import createStore from 'config/store/createStore';

const store = createStore();

if(process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-142147897-1');
  Sentry.init({ dsn: 'https://af97ef4aa7d347f0af3b2a3802aa3fe0@sentry.io/1481969' });
}

export default function Application() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={{ mode: 'light' }}>
          <Login />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}
