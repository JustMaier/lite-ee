import commonjs from 'rollup-plugin-commonjs';

const env = process.env.NODE_ENV;
const pkg = require('./package.json');

export default {
	input: 'index.js',
	output: {
		file: {
			es: pkg.module,
			cjs: pkg.main
		}[env],
		format: env
	},
	external: [],
	plugins: [
		commonjs()
	]
};
