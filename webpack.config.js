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
        test: /\.html$/,
        loader: "raw-loader"
      },
			{
				test: /\.(css)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			}
		]
	},
	devtool: 'source-map',
	resolve: {
    extensions: [".js", "*"]
  }
};
