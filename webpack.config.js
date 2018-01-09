const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/app.js',

	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js'
	},

	watch: true,

	devServer: {
		inline: true
	},

	//Add sass-loader
	module: {
		loaders: [
      {
        test: [/\.html$/, /\.js?$/],
				exclude: /(node_modules)/, // Leaves dependencies alone
        loader: "raw-loader",
				query: {
					presets: ['es2015'] // Tells Babel what syntaxes to translate
				}
      },
			{
				test: /\.(css)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				},
				{
					loader: 'babel-loader' // Sets Babel as the transpiler
				}]
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '*']
	}
};
