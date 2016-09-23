import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PostsList = ({posts, onDelete}) => {
	return (
		<div className="example">
			<div className="create-new-btn">
				<Link to="/post" className="btn btn-success pull-xs-right"> Create new</Link>
			</div>
			<h1 className="section-title"> Posts
				{!posts.length && <span className="no-content">Empty</span>}
			</h1>
			<div className="example-posts">
				<table className="table">
					<thead>
						<tr>
							<th> ID</th>
							<th> Title</th>
							<th> Body</th>
							<th> Actions</th>
						</tr>
					</thead>
					<tbody>
						{posts.map(post =>
							<tr key={post.id}>
								<th scope="row">{post.id}</th>
								<td>{post.title}</td>
								<td>{post.body}</td>
								<td width="17%">
									<Link to={'/post/' + post.id} className="btn btn-link btn-sm">Edit</Link>
									<button className="btn btn-link btn-sm" onClick={onDelete.bind(this, post.id)}> Delete</button>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

PostsList.propTypes = {
	posts: PropTypes.array.isRequired,
	onDelete: PropTypes.func
};

export default PostsList;