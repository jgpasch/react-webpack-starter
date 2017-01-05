import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*eslint-disable no-console*/

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);