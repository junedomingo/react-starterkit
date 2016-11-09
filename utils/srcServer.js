/* eslint-disable no-console*/

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import colors from 'colors';
import dotenv from 'dotenv';
import config from '../webpack.config.dev';

dotenv.config();

const port = process.env.PORT;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
	if (err) {
		console.log(err);
	} else if (process.env.OPEN_BROWSER_ON_START === "TRUE") {
		open(`http://localhost:${port}`);
	} else {
		console.log('You can now reload your browser'.yellow);
	}
});
