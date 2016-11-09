/* eslint-disable no-console */
/* eslint-disable no-var */

var express = require('express');
var path = require('path');
var compression = require('compression');
var colors = require('colors');
var dotenv = require('dotenv').config();

var port = process.env.PORT;
var app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
	if (err) {
		console.log(err);
	} else {
		// open(`http://localhost:${port}`);
		console.log('You can now reload your browser'.yellow);
	}
});
