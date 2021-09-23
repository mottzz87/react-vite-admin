/*
 * @Author: Vane
 * @Date: 2021-08-28 14:30:35
 * @LastEditTime: 2021-09-24 00:40:53
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite-admin\build\vite\plugin\index.ts
 */
import type { Plugin } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { configLegacy } from './legacy';
import { configPwaConfig } from './pwa';
import { configMockPlugin } from './mock';
import { configImageminPlugin } from './imagemin';
import { configSvgIconsPlugin } from './svgSprite';
import { configPluginImp } from './pluginimp';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
	const { VITE_USE_IMAGEMIN, VITE_USE_MOCK, VITE_LEGACY } = viteEnv;

	const vitePlugins: (Plugin | Plugin[])[] = [];

	// @vitejsplugin-react-refresh
	vitePlugins.push(reactRefresh());

	// @vitejs/plugin-legacy
	VITE_LEGACY && isBuild && vitePlugins.push(configLegacy());

	// vite-plugin-svg-icons
	vitePlugins.push(configSvgIconsPlugin(isBuild));

	// vite-plugin-imp
	vitePlugins.push(configPluginImp());

	// vite-plugin-mock
	VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

	// The following plugins only work in the production environment
	if (isBuild) {
		// vite-plugin-imagemin
		VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());

		// vite-plugin-pwa
		vitePlugins.push(configPwaConfig(viteEnv));
	}

	return vitePlugins;
}
