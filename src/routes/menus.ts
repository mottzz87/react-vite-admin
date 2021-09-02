/*
 * @Author: Vane
 * @Date: 2021-08-30 23:09:49
 * @LastEditTime: 2021-09-02 08:47:54
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\routes\menus.ts
 */

import { IRouteBase } from '#/types/router';

export interface IMenuConfig {
	name: string;
	path: string;
	icon?: string;
	key?: string;
	roles?: string[];
	meta?: IRouteBase;
	children?: IMenuConfig[];
}

const menus: IMenuConfig[] = [
	{
		path: '/home',
		name: '首页',
	},
	{
		path: '/components',
		name: '组件',
		children: [
			{
				path: '/components',
				name: 'one',
				children: [
					{
						path: '/components/demo2',
						name: 'two',
					},
					{
						path: '/components/demo3',
						name: 'three',
					},
				],
			},
		],
	},
	{
		path: '/iconfont',
		name: '字体图标',
	},
	{
		path: '/about',
		name: '关于',
	},
];
export default menus;
