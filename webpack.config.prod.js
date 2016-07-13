import webpack from 'webpack';
import path from 'path';
import poststylus from 'poststylus';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import dotenv from 'dotenv';
dotenv.config();

const GLOBALS = {
	'process.env': {
		'NODE_ENV': JSON.stringify('production'),
		'API_URL': JSON.stringify(process.env.API_URL)
	}
};

export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: './src/index',
	target: 'web',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'assets/js/bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin(GLOBALS),
		new ExtractTextPlugin('assets/css/styles.css'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	resolve: {
		modulesDirectories: ['node_modules', './src'],
		extensions: ['', '.js', '.jsx', '.css', '.styl']
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
			{test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap')},
			{test: /\.styl$/, loader: ExtractTextPlugin.extract('css-loader!stylus-loader')},
			{test: /\.(png|jpe?g|ico)$/, loader: 'url-loader?limit=100000&name=assets/img/[name]-[hash:6].[ext]'},
			{test: /\.(otf|woff|woff2|svg|ttf|eot)(\?[\s\S]+)?$/, loader: 'file-loader?name=assets/fonts/[name].[ext]'}
		]
	},
	stylus: {
		use: [
			poststylus([
				autoprefixer({ browsers: ['last 2 version', '> 1%', 'IE > 8'] })
			])
		]
	}
};
