/* eslint-disable no-console */
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import toastr from 'toastr';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as postsActions from './posts.actions';
import PostsList from './components/PostsList';

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
		const { posts } = this.props;
		return (
			<div>
				<DocumentTitle title="Example" />
				<PostsList
					posts={posts}
					onDelete={this.handleDelete}
				/>
			</div>
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
