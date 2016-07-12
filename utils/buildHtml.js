/*eslint-disable no-console */

import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';


fs.readFile('src/index.html', 'utf8', (err, markup) => {
	if (err) {
		return console.log(err);
	}

	const $ = cheerio.load(markup);
	
	$('head').prepend(`
	<link rel="stylesheet" href="assets/css/styles.css">`);

	$('script').each(function () {
	    $(this).remove();
	});

	$('body').append(`
	<script src="assets/js/bundle.js"></script>`);

	fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
		if (err) {
			return console.log(err);
		}
		console.log('index.html written to /dist'.green);
	});
});
