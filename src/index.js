import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();
const ROOT_CONTAINER = document.getElementById('root');
if (!ROOT_CONTAINER) {
  throw new Error('The page dose not exist Dom <div id="root"></div>.');
}

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  ROOT_CONTAINER
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
