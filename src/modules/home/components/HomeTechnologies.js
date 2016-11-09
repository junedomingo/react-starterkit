import React from 'react';

const HomeTechnologies = () => (
	<section className="tech">
		<h1 className="section-title"> Technologies:</h1>
		<ul className="tech-list">
			<li className="tech-item">Redux
				<div className="desc">Predictable state container for JavaScript apps</div>
			</li>

			<li className="tech-item"> Webpack
				<div className="desc"> A bundler for javascript and friends</div>
			</li>

			<li className="tech-item"> React-Router
				<div className="desc"> A complete routing library for React</div>
			</li>

			<li className="tech-item"> Babel
				<div className="desc"> Compiles ES6 to ES5. Enjoy the new version of JavaScript today</div>
			</li>

			<li className="tech-item"> ES Lint
				<div className="desc"> Lint JS. Reports syntax and style issues</div>
			</li>

			<li className="tech-item"> Npm scripts
				<div className="desc"> Run project with just one command</div>
			</li>
		</ul>
	</section>
);

export default HomeTechnologies;
