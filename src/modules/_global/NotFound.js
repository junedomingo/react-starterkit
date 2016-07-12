import React from 'react';

const NotFound = () => {
	return (
		<div>
			<div className="example">
				<h1 className="section-title"> Error 404: Noodles not found</h1>
				<img src={require('assets/img/noodlesnotfound.jpg')} className="img-fluid"/>
				<p> Hinalungkat ko....wala talaga eh</p>
			</div>
			
		</div>
	);
};

export default NotFound;