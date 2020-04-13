import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'wrapper.js',
	output: {
		name: 'functionallibrary',
		exports: 'named',
	},
	plugins: [
		commonjs(),
	],
};
