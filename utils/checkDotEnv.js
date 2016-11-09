/* eslint-disable no-console*/
import fs from 'fs';
import colors from 'colors';

fs.stat('.env', (err, stat) => {
	if (err == null) {
		// .env is set
	} else if (err.code === 'ENOENT') {
		fs.createReadStream('.env.sample').pipe(fs.createWriteStream('.env'));
		console.log('Generated .env file in root directory.'.yellow);
	} else {
		console.log('Something went wrong: ', err.code);
		process.exit(1);
	}
});
