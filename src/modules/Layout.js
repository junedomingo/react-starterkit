import React, {PropTypes} from 'react';
import Header from './_global/Header';
import {browserHistory} from 'react-router';

class Layout extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.onClickLogo = this.onClickLogo.bind(this);
	}


	onClickLogo() {
		browserHistory.push('/');
	}

	render() {
		return (
			<div className="container">
				<Header redirectToIndex={this.onClickLogo}/>
				{this.props.children}
			</div>
		);
	}
}
Layout.propTypes = {
	children: PropTypes.object.isRequired
};

export default Layout;