/*eslint-disable no-console*/

import fs from 'fs';
import colors from 'colors';

fs.stat('.env', function(err, stat) {
	if(err == null) {
		console.log('Starting app in dev mode...'.green);
	} else if (err.code == 'ENOENT') {
		fs.createReadStream('.env.sample').pipe(fs.createWriteStream('.env'));
		console.log('Generated .env file in root directory.'.yellow + '\n' + 'Starting app in dev mode...It will automatically open your default browser.'.green);
	} else {
		console.log('Something went wrong: ', err.code);
		process.exit(1);
	}
});
