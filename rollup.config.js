import commonjs from 'rollup-plugin-commonjs';
import path from 'path';

const env = process.env.NODE_ENV;

const baseConfig = {
	external: [],
	plugins: [
		commonjs()
	]
}

const mainPkg = require('./package.json');
const mainConfig = {
	input: './src/index.js',
	output: {
		file: {
			es: mainPkg.module,
			cjs: mainPkg.main
		}[env],
		format: env
	},
	...baseConfig
};

const mixinPkg = require('./mixin/package.json');
const mixinConfig = {
	input: './src/mixin.js',
	output: {
		file: {
			es: path.join('./mixin', mixinPkg.module),
			cjs: path.join('./mixin', mixinPkg.main)
		}[env],
		format: env
	},
	...baseConfig
}

export default [
	mainConfig,
	mixinConfig
]