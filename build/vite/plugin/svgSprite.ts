/*
 * @Author: Vane
 * @Date: 2021-08-28 14:47:18
 * @LastEditTime: 2021-08-28 14:47:23
 * @LastEditors: Vane
 * @Description:Vite Plugin for fast creating SVG sprites.
 * @FilePath: \react-vite\src\build\vite\plugin\svgSprite.ts
 */

import SvgIconsPlugin from 'vite-plugin-svg-icons';
import { resolve } from 'path';

//  https://github.com/anncwb/vite-plugin-svg-icons

export function configSvgIconsPlugin(isBuild: boolean) {
	const svgIconsPlugin = SvgIconsPlugin({
		iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
		svgoOptions: isBuild,
		// default
		symbolId: 'icon-[dir]-[name]',
	});
	return svgIconsPlugin;
}
