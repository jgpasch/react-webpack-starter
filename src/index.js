import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import { loadExercises } from './actions/exerciseActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';

/*eslint-disable no-console*/

const store = configureStore();
store.dispatch(loadExercises());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider> 
    ,document.getElementById('app')
);