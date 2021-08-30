/*
 * @Author: Vane
 * @Date: 2021-08-30 23:09:49
 * @LastEditTime: 2021-08-31 00:57:14
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\routes\menus.ts
 */

import { IRouteBase } from '#/types/router';

export interface IMenuConfig {
	id?: string | number;
	title: string;
	path: string;
	icon?: string;
	roles?: string[];
	meta?: IRouteBase;
	children?: IMenuConfig[];
}

const menus: IMenuConfig[] = [
	{
		id: 1,
		title: '首页',
		path: '/home',
		icon: 'home',
		roles: ['admin', 'editor', 'guest'],
	},
	{
		id: 2,
		title: '权限测试',
		path: '/permission',
		icon: 'lock',
		children: [
			{
				title: 'admin页面',
				path: '/permission/demo1',
				roles: ['admin'],
			},
			{
				title: 'guest页面',
				path: '/permission/demo2',
				roles: ['guest'],
			},
			{
				title: 'editor页面',
				path: '/permission/demo3',
				roles: ['editor'],
			},
		],
	},
	{
		id: 3,
		title: '组件',
		path: '/components',
		icon: 'appstore',
		roles: ['admin', 'editor'],
		children: [
			{
				title: '富文本',
				path: '/components/demo1',
				roles: ['admin', 'editor'],
			},
			{
				title: 'Markdown',
				path: '/components/demo2',
				roles: ['admin', 'editor'],
			},
			{
				title: '拖拽列表',
				path: '/components/demo3',
				roles: ['admin', 'editor'],
			},
		],
	},
	{
		id: 4,
		title: '图表',
		path: '/charts',
		icon: 'area-chart',
		roles: ['admin', 'editor'],
		children: [
			{
				title: '键盘图表',
				path: '/charts/demo1',
				roles: ['admin', 'editor'],
			},
			{
				title: '折线图',
				path: '/charts/demo2',
				roles: ['admin', 'editor'],
			},
			{
				title: '混合图表',
				path: '/charts/demo3',
				roles: ['admin', 'editor'],
			},
		],
	},
	{
		id: 5,
		title: '路由嵌套',
		path: '/nested',
		icon: 'cluster',
		roles: ['admin', 'editor'],
		children: [
			{
				title: '菜单1',
				path: '/nested/menu1',
				children: [
					{
						title: '菜单1-1',
						path: '/nested/menu1/demo1',
						roles: ['admin', 'editor'],
					},
					{
						title: '菜单1-2',
						path: '/nested/menu1/demo2',
						children: [
							{
								title: '菜单1-2-1',
								path: '/nested/menu1/demo2/demo2-1',
								roles: ['admin', 'editor'],
							},
						],
					},
				],
			},
		],
	},
];
export default menus;
