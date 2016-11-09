import React from 'react';

import HomeShowcase from './components/HomeShowcase';
import HomeTechnologies from './components/HomeTechnologies';
import HomeInstallation from './components/HomeInstallation';

const Home = () => (
	<div>
		<HomeShowcase />
		<div className="content">
			<HomeTechnologies />
			<HomeInstallation />
		</div>
	</div>
);

export default Home;
