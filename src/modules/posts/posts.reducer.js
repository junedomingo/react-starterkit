import * as types from '~const/actionTypes';
import initialState from '~reducers/initialState';

export default function (state = initialState.posts, action) {
	let index;

	switch (action.type) {

		case types.LOAD_POSTS_SUCCESS:
			return action.posts;

		case types.CREATE_POST_SUCCESS:
			return [
				...state,
				Object.assign({}, action.post)
			];

		case types.UPDATE_POST_SUCCESS:
			return [
				...state.filter(post => post.id !== action.post.id),
				Object.assign({}, action.post)
			];

		case types.DELETE_POST_SUCCESS:
			index = state.findIndex(post => post.id === action.postId);
			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			];

		default:
			return state;
	}
}
