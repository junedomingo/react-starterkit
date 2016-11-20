/* eslint-disable no-console */
import fs from 'fs';
import childProcess from 'child_process';

const dir = './temp-dist';

if (fs.existsSync(dir)) {
	childProcess.exec(`rimraf ${dir}`, (error, stdout) => {
		if (error !== null) console.log(`exec error: ${error}`);
	});
}
