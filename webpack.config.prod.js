import webpack from 'webpack';
import path from 'path';
import poststylus from 'poststylus';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import DotenvPlugin from 'webpack-dotenv-plugin';
import chalk from 'chalk';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: './src/index',
	target: 'web',
	output: {
		path: path.join(__dirname, '/temp-dist'),
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
		new ProgressBarPlugin({
			format: `Status [:bar] ${chalk.green.bold(':percent')} :msg (:elapsed seconds)`,
			clear: false
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new DotenvPlugin({
			sample: './.env.sample',
			path: './.env'
		})
	],
	resolve: {
		modulesDirectories: ['node_modules', './src'],
		extensions: ['', '.js', '.jsx', '.css', '.styl'],
		alias: {
			'~assets': path.join(__dirname, 'src/assets'),
			'~bower': path.join(__dirname, 'bower_components'),
			'~const': path.join(__dirname, 'src/constants'),
			'~global': path.join(__dirname, 'src/modules/_global'),
			'~modules': path.join(__dirname, 'src/modules'),
			'~reducers': path.join(__dirname, 'src/reducers'),
			'~utils': path.join(__dirname, 'src/utils')
		}
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
			{ test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
			{ test: /\.styl$/, loader: ExtractTextPlugin.extract('css-loader!stylus-loader') },
			{ test: /\.(png|jpe?g|ico|gif)$/, loader: 'url-loader?limit=1000&name=assets/img/[name].[ext]' },
			{ test: /\.(otf|woff|woff2|svg|ttf|eot)(\?[\s\S]+)?$/, loader: 'file-loader?limit=1000&name=assets/fonts/[name].[ext]' }
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
