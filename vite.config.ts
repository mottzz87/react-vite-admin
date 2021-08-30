/*
 * @Author: Vane
 * @Date: 2021-08-28 00:52:36
 * @LastEditTime: 2021-08-31 02:31:05
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\vite.config.ts
 */
import { resolve } from 'path';
import dayjs from 'dayjs';
import { loadEnv } from 'vite';
import type { ConfigEnv, UserConfig } from 'vite';
import { createVitePlugins } from './build/vite/plugin';
import { createProxy } from './build/vite/proxy';
import { cssModule } from './build/vite/cssmodule';

import { wrapperEnv } from './build/utils';

import pkg from './package.json';
const { dependencies, devDependencies, name, version } = pkg;

const pathResolve = (dir: string): any => resolve(__dirname, '.', dir);

const alias: any[] = [
	{ find: '@', replacement: pathResolve('src') },
	{ find: '#', replacement: pathResolve('./') },
	{ find: /^~/, replacement: '' },
];
const __APP_INFO__ = {
	pkg: { dependencies, devDependencies, name, version },
	lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};
export default ({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();

	const env = loadEnv(mode, root);

	const isBuild = command === 'build';

	// The boolean type read by loadEnv is a string. This function can be converted to boolean type
	const viteEnv = wrapperEnv(env);

	const {
		VITE_PORT,
		VITE_OPEN,
		VITE_PUBLIC_PATH,
		VITE_PROXY,
		VITE_DROP_CONSOLE,
	} = viteEnv;

	return {
		resolve: { alias },
		base: VITE_PUBLIC_PATH,
		server: {
			host: '0.0.0.0',
			port: VITE_PORT,
			open: VITE_OPEN,
			proxy: createProxy(VITE_PROXY),
		},
		build: {
			outDir: 'dist',
			minify: 'esbuild',
			terserOptions: {
				compress: {
					keep_infinity: true,
					// Used to delete console in production environment
					drop_console: VITE_DROP_CONSOLE,
				},
			},
			brotliSize: false,
			chunkSizeWarningLimit: 2000,
		},
		plugins: createVitePlugins(viteEnv, isBuild),
		css: cssModule(),
		define: {
			// 设置应用信息
			__APP_INFO__: JSON.stringify(__APP_INFO__),
		},
	};
};
