/* eslint-disable no-console */
import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
	if (err) {
		return console.log(err);
	}

	const $ = cheerio.load(markup);

	$('link').each(function () {
		$(this).remove();
	});

	$('head').prepend(`
		<link rel="stylesheet" href="/assets/css/styles.css">
		<link rel="shortcut icon" href="/assets/img/favicon.ico">
	`);

	$('script').each(function () {
		$(this).remove();
	});

	$('body').append(`<script src="/assets/js/bundle.js"></script>`);

	fs.writeFile('temp-dist/index.html', $.html(), 'utf8', err => {
		if (err) return console.log(err);
		console.log('index.html written to /temp-dist'.green);
	});
});
