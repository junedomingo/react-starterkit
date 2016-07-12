import React, {PropTypes} from 'react';
import Header from './_global/Header';

class Layout extends React.Component {
	render() {
		return (
			<div className="container">
				<Header/>
				{this.props.children}
			</div>
		);
	}
}
Layout.propTypes = {
	children: PropTypes.object.isRequired
};

export default Layout;