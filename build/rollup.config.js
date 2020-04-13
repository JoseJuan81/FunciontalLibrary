import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
	input: 'wrapper.js',
	output: {
		name: 'functionallibrary',
		exports: 'named',
	},
	plugins: [
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
	],
};
