/*
 * @Author: Vane
 * @Date: 2021-08-30 23:09:49
 * @LastEditTime: 2021-08-31 02:36:32
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\routes\menus.ts
 */

import { IRouteBase } from '#/types/router';

export interface IMenuConfig {
	id?: string | number;
	name: string;
	path: string;
	icon?: string;
	roles?: string[];
	meta?: IRouteBase;
	children?: IMenuConfig[];
}

const menus: IMenuConfig[] = [
	{
		id: 1,
		name: '首页',
		path: '/home',
		icon: 'home',
		roles: ['admin', 'editor', 'guest'],
	},
	{
		id: 2,
		name: '权限测试',
		path: '/permission',
		icon: 'lock',
		children: [
			{
				name: 'admin页面',
				path: '/permission/demo1',
				roles: ['admin'],
			},
			{
				name: 'guest页面',
				path: '/permission/demo2',
				roles: ['guest'],
			},
			{
				name: 'editor页面',
				path: '/permission/demo3',
				roles: ['editor'],
			},
		],
	},
	{
		id: 3,
		name: '组件',
		path: '/components',
		icon: 'appstore',
		roles: ['admin', 'editor'],
		children: [
			{
				name: '富文本',
				path: '/components/demo1',
				roles: ['admin', 'editor'],
			},
			{
				name: 'Markdown',
				path: '/components/demo2',
				roles: ['admin', 'editor'],
			},
			{
				name: '拖拽列表',
				path: '/components/demo3',
				roles: ['admin', 'editor'],
			},
		],
	},
	{
		id: 4,
		name: '图表',
		path: '/charts',
		icon: 'area-chart',
		roles: ['admin', 'editor'],
		children: [
			{
				name: '键盘图表',
				path: '/charts/demo1',
				roles: ['admin', 'editor'],
			},
			{
				name: '折线图',
				path: '/charts/demo2',
				roles: ['admin', 'editor'],
			},
			{
				name: '混合图表',
				path: '/charts/demo3',
				roles: ['admin', 'editor'],
			},
		],
	},
	{
		id: 5,
		name: '路由嵌套',
		path: '/nested',
		icon: 'cluster',
		roles: ['admin', 'editor'],
		children: [
			{
				name: '菜单1',
				path: '/nested/menu1',
				children: [
					{
						name: '菜单1-1',
						path: '/nested/menu1/demo1',
						roles: ['admin', 'editor'],
					},
					{
						name: '菜单1-2',
						path: '/nested/menu1/demo2',
						children: [
							{
								name: '菜单1-2-1',
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
