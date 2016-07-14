import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postsActions from './posts.actions';
import ManagePostForm from './components/ManagePostForm';
import toastr from 'toastr';
import {browserHistory} from 'react-router';
import DocumentTitle from 'react-document-title';

class ManagePost extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			pageTitle: (this.props.params.id ? "Edit Post" : "Create Post"),
			post: Object.assign({}, props.post),
			errors: {},
			saving: false
		};

		this.handleInputState = this.handleInputState.bind(this);
		this.savePost = this.savePost.bind(this);
	}

	componentDidMount() {
		this.props.actions.loadPosts();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.post.id != nextProps.post.id) {
			this.setState({post: Object.assign({}, nextProps.post)});
		}
	}

	handleInputState(event) {
		const field = event.target.name;
		let post = this.state.post;
		post[field] = event.target.value;
		return this.setState({post: post});
	}

	postFormIsValid() {
		let formIsValid = true;
		let errors = {};

		if (this.state.post.title.length < 3) {
			errors.title = 'Title must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.post.body.length < 5) {
			errors.body = 'Body must be at least 5 characters.';
			formIsValid = false;
		}

		this.setState({errors: errors});
		return formIsValid;
	}

	savePost(event) {
		event.preventDefault();
		if (!this.postFormIsValid()) {
			return;
		}

		this.setState({saving: true});

		if (this.state.post.id) {
			this.props.actions.updatePost(this.state.post)
				.then(() => this.redirectToPostsPage())
				.catch(error => {
					toastr.error(error);
					this.setState({saving: false});
				});
		} else {
			this.props.actions.createPost(this.state.post)
				.then(() => this.redirectToPostsPage())
				.catch(error => {
					toastr.error(error);
					this.setState({saving: false});
				});
		}
	}

	redirectToPostsPage() {
		this.setState({saving: false});
		toastr.success('Post Saved');
		browserHistory.push('/posts');
	}

	render() {
		return (
			<DocumentTitle title={this.state.pageTitle}>
				<ManagePostForm
					onChange={this.handleInputState}
					onSave={this.savePost}
					post={this.state.post}
					errors={this.state.errors}
					saving={this.state.saving}/>
			</DocumentTitle>
		);
	}
}

ManagePost.propTypes = {
	post: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
	params: PropTypes.object
};

ManagePost.contextTypes = {
	router: PropTypes.object.isRequired
};

function getPostById(posts, id) {
	const post = posts.filter(post => post.id == id);
	if (post) return post[0];
	return null;
}

function mapStateToProps(state, ownProps) {
	const postId = ownProps.params.id;
	let post = {id: '', title: '', body: ''};

	if (postId && state.posts.length > 0) {
		post = getPostById(state.posts, postId);
	}

	return {
		post: post
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(postsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePost);