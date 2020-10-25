const path = require('path')

module.exports = {
	entry: {
		test: './test/index.js',
	},
	mode: 'production',
	output: {
		filename: '[name].bundled.js',
		path: path.resolve(__dirname, 'test'),
	},
	resolve: {
		fallback: {
			'assert': require.resolve('assert/'),
		},
	}
}
