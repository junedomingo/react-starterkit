import webpack from 'webpack';
import path from 'path';
import poststylus from 'poststylus';
import autoprefixer from 'autoprefixer';
import DotenvPlugin from 'webpack-dotenv-plugin';

export default {
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	noInfo: true,
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
		contentBase: './src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
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
			{ test: /(\.css)$/, loader: 'style!css' },
			{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
			{ test: /\.(png|jpe?g|ico|gif)$/, loader: 'url-loader?limit=1000&name=[name].[ext]' },
			{ test: /\.(woff|woff2|svg|ttf|eot|otf)(\?[\s\S]+)?$/, loader: 'file-loader?limit=1000&name=[name].[ext]' }
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
