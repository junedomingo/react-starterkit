/*eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open(`http://localhost:${port}`);
		// console.log('You can now reload your browser'.yellow);
	}
});
