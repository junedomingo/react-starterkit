/*eslint-disable no-console*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postsActions from './posts.actions';
import PostsList from './components/PostsList';
import {browserHistory}  from 'react-router';
import toastr from 'toastr';
import DocumentTitle from 'react-document-title';

class Posts extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		this.props.actions.loadPosts();
	}

	handleDelete(postId) {
		this.props.actions.deletePost(postId);
		toastr.success(`Deleted`);
	}

	render() {
		const {posts} = this.props;
		return (
			<DocumentTitle title="Example">
				<PostsList
					posts={posts}
					onDelete={this.handleDelete}/>
			</DocumentTitle>
		);
	}
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		posts: state.posts
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(postsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);