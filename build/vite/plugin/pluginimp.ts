/*
 * @Author: Vane
 * @Date: 2021-08-28 15:19:42
 * @LastEditTime: 2021-08-28 15:20:49
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\build\vite\plugin\pluginimp.ts
 */
import type { Plugin } from 'vite';
import vitePluginImp from 'vite-plugin-imp';

// antd按需加载
export function configPluginImp(): Plugin {
	const opt = {
		libList: [
			{
				libName: 'antd',
				style: (name: string) => `antd/es/${name}/style`,
			},
		],
	};
	return vitePluginImp(opt);
}
