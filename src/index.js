import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
import 'ionicons/css/ionicons.min.css';
import 'toastr/build/toastr.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '~assets/styl/main.styl';

require('~assets/img/favicon.ico');

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.getElementById('app')
);
