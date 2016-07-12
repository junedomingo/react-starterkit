import {combineReducers} from 'redux';
import posts from '../modules/posts/posts.reducer';

const rootReducer = combineReducers({
	posts
});

export default rootReducer;