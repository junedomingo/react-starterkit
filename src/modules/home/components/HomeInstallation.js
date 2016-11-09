import React from 'react';

const HomeInstallation = () => (
	<section className="install">
		<h1 className="section-title"> Installation:</h1>
		<div className="install-title"> Clone starter-kit api repo</div>
		<div className="install-command">
			<ul className="install-command-list">
				<li className="install-command-item">$ git clone https://github.com/JuneDomingo/react-starterkit-api.git</li>
				<li className="install-command-item">$ cd react-starterkit-api</li>
				<li className="install-command-item">$ npm install</li>
				<li className="install-command-item">$ npm start</li>
			</ul>
		</div>

		<div className="install-title"> Clone starter-kit repo</div>
		<div className="install-command">
			<ul className="install-command-list">
				<li className="install-command-item"> $ git clone https://github.com/JuneDomingo/react-starterkit.git</li>
				<li className="install-command-item"> $ cd react-starterkit</li>
				<li className="install-command-item"> $ npm install</li>
				<li className="install-command-item"> $ npm start -s</li>
			</ul>
		</div>

		<div className="install-title">... and you can now start coding :-)</div>
	</section>
);

export default HomeInstallation;
