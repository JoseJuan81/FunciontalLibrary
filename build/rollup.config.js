import babel from 'rollup-plugin-babel';

export default [
	{
		input: 'wrapper.js',
		output: {
			name: 'functionallibrary',
			exports: 'named',
			format: 'umd',
			file: 'lib/functionallibrary.umd.js'
		},
		plugins: [
			babel({
				exclude: 'node_modules/**'
			}),
		],
	},
	{
		input: 'wrapper.js',
		output: {
			name: 'functionallibrary',
			format: 'es',
			file: 'lib/functionallibrary.es.js'
		},
		plugins: [
			// commonjs(),
			babel({
				exclude: 'node_modules/**'
			}),
		],
	},
];
