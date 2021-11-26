/*
 * @Author: Vane
 * @Date: 2021-08-30 23:09:49
 * @LastEditTime: 2021-09-18 01:53:09
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
		key: '/home',
		name: '首页',
		icon: 'icon-home',
	},
	{
		path: '/components',
		key: '/components',
		name: '组件',
		icon: 'icon-appstoreadd',
		children: [
			{
				path: '/components/demo2',
				key: '/components/demo2',
				name: 'two',
				icon: 'icon-smile',
			},
			{
				path: '/components/demo3',
				key: '/components/demo3',
				name: 'three',
				icon: 'icon-shake',
			},
		],
	},
	{
		path: '/iconfont',
		name: '字体图标',
		icon: 'icon-font-colors',
	},
	{
		path: '/about',
		name: '关于',
		icon: 'icon-warning-circle',
	},
];
export default menus;
