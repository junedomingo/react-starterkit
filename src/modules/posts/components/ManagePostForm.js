import React from 'react';
import TextInput from '~global/forms/TextInput';

const ManagePostForm = ({ post, onSave, onChange, saving, errors }) => (
	<div className="example">
		<h1 className="section-title"> Form</h1>
		<form>
			<div className="form-group row">
				<div className="col-sm-10">
					<TextInput
						name="title"
						label="Title"
						value={post.title}
						onChange={onChange}
						error={errors.title}
					/>
				</div>
			</div>

			<div className="form-group row">
				<div className="col-sm-10">
					<TextInput
						name="body"
						label="Body"
						value={post.body}
						onChange={onChange}
						error={errors.body}
					/>
				</div>
			</div>

			<div className="form-group row">
				<div className="col-sm-12">
					<input
						type="submit"
						disabled={saving}
						value={saving ? 'Saving...' : 'Save'}
						className="btn btn-success pull-xs-right"
						onClick={onSave}
					/>
				</div>
			</div>
		</form>
	</div>
);

ManagePostForm.propTypes = {
	post: React.PropTypes.object.isRequired,
	onSave: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired,
	saving: React.PropTypes.bool,
	errors: React.PropTypes.object
};

export default ManagePostForm;
