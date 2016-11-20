import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Layout from '~modules/Layout';
import Home from '~modules/home/Home';
import Posts from '~modules/posts/Posts';
import ManagePost from '~modules/posts/ManagePost';
import PageNotFound from '~modules/_global/PageNotFound';

export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path="posts" component={Posts} />
		<Route path="post" component={ManagePost} />
		<Route path="post/:id" component={ManagePost} />
		<Route path="page-not-found" component={PageNotFound} />
		<Redirect from="*" to="page-not-found" />
	</Route>
);
