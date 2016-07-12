import webpack from 'webpack';
import path from 'path';

export default {
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	noInfo: false,
	entry: [
		'eventsource-polyfill',
		'webpack-hot-middleware/client?reload=true',
		'./src/index'
	],
	target: 'web',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: '../src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
			{test: /(\.css)$/, loaders: ['style', 'css']},
			{test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
			{test: /\.(otf|woff|woff2|ttf|png|jpe?g|svg|eot|ico)(\?[\s\S]+)?$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'}
		]
	}
};