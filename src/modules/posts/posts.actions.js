import axios from 'axios';
import * as types from '../../constants/actionTypes';
import * as api from '../../constants/api';

export function loadPostsSuccess(res) {
	return { type: types.LOAD_POSTS_SUCCESS, posts: res.data };
}

export function createPostSuccess(post) {
	return { type: types.CREATE_POST_SUCCESS, post };
}

export function updatePostSuccess(post) {
	return { type: types.UPDATE_POST_SUCCESS, post };
}

export function deletePostSuccess(postId) {
	return { type: types.DELETE_POST_SUCCESS, postId };
}

export function loadPosts() {
	return function (dispatch) {
		return axios.get(`${api.URL}/posts`)
			.then(res => {
				dispatch(loadPostsSuccess(res));
			}).catch(error => {
				throw (error);
			});
	};
}

export function createPost(post) {
	return function (dispatch) {
		return axios.post(`${api.URL}/posts`, post)
			.then(res => {
				dispatch(createPostSuccess(post));
			}).catch(error => {
				throw (error);
			});
	};
}

export function updatePost(post) {
	return function (dispatch) {
		return axios.put(`${api.URL}/posts/${post.id}`, post)
			.then(res => {
				dispatch(updatePostSuccess(post));
			}).catch(error => {
				throw (error);
			});
	};
}

export function deletePost(postId) {
	return function (dispatch) {
		return axios.delete(`${api.URL}/posts/${postId}`)
			.then(res => {
				dispatch(deletePostSuccess(postId));
			}).catch(error => {
				throw (error);
			});
	};
}
