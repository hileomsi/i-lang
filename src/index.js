import 'config/ReactotronConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'milligram';
import 'assets/styles/global.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
