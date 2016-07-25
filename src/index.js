/*eslint-disable import/default*/

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import 'toastr/build/toastr.min.css';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../bower_components/Ionicons/css/ionicons.min.css';
import './assets/styl/main.styl';
 
const store = configureStore();

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app') 
);