/* eslint-disable import/default */
/* eslint-disable import/first */
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';

import 'toastr/build/toastr.min.css';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../bower_components/Ionicons/css/ionicons.min.css';
import './assets/styl/main.styl';

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.getElementById('app')
);
