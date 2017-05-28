module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		libraryTarget: 'umd',
		path: __dirname + '/dist'
	},
	externals : {
	  "react": 'react'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	}
}