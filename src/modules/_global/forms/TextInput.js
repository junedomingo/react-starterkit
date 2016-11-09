import React, { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
	let formGroup = 'form-group';
	let formControl = 'form-control';

	if (error && error.length > 0) {
		formGroup += `  has-danger`;
		formControl += ` form-control-danger `;
	}

	return (
		<div className={formGroup}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<input
					type="text"
					name={name}
					className={formControl}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				{error && <div className="alert alert-danger mt-10">{error}</div>}
			</div>
		</div>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string
};

export default TextInput;
