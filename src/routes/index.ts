/*
 * @Author: Vane
 * @Date: 2021-08-28 14:58:57
 * @LastEditTime: 2021-08-29 01:14:40
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\routes\index.ts
 */
import React from 'react';

const Page404 = React.lazy(() => import('@/pages/Errors/Page404'));
const Home = React.lazy(() => import('@/pages/Home'));
const Login = React.lazy(() => import('@/pages/User/Login'));
const Register = React.lazy(() => import('@/pages/User/Register'));

export interface IRouteBase {
	// 路由路径
	path: string;
	// 路由组件
	component?: any;
	// 302 跳转
	redirect?: string;
	// 路由信息
	meta: IRouteMeta;
	// 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
	auth?: boolean;
}

export enum RoleEnum {
	// super admin
	SUPER = 'admin',

	// tester
	TEST = 'test',
}

export interface IRouteMeta {
	orderNo?: number;
	// title
	title: string;
	// Whether to ignore permissions
	ignoreAuth?: boolean;
	// role info
	roles?: RoleEnum[];
	// Whether not to cache
	ignoreKeepAlive?: boolean;
	// Is it fixed on tab
	affix?: boolean;
	// icon on tab
	icon?: string;
	frameSrc?: string;
	// current page transition
	transitionName?: string;
	// Whether the route has been dynamically added
	hideBreadcrumb?: boolean;
	// Hide submenu
	hideChildrenInMenu?: boolean;
	// Carrying parameters
	carryParam?: boolean;
	// Used internally to mark single-level menus
	single?: boolean;
	// Currently active menu
	currentActiveMenu?: string;
	// Never show in tab
	hideTab?: boolean;
	// Never show in menu
	hideMenu?: boolean;
	isLink?: boolean;
	// only build for Menu
	ignoreRoute?: boolean;
	// Hide path for children
	hidePathForChildren?: boolean;
}

export interface IRoute extends IRouteBase {
	children?: IRoute[];
}

export const pages: IRoute[] = [
	{
		path: '/home',
		meta: {
			title: '首页',
			icon: 'home',
		},
		component: Home,
	},
	{
		path: '/login',
		component: Login,
		meta: {
			title: '登录',
		},
	},
	{
		path: '/register',
		component: Register,
		meta: {
			title: '注册',
		},
	},
	{
		path: '/error',
		meta: {
			title: '页面不存在',
		},
		component: Page404,
	},
	{
		path: '/*',
		meta: {
			title: '错误页面',
		},
		redirect: '/error/404',
	},
];

const layouts: IRoute[] = [
	{
		path: '/user',
		component: React.lazy(() => import('@/layout/UserLayout')),
		meta: {
			title: '用户路由',
		},
		redirect: '/user/login',
		children: [],
	},
	{
		path: '/',
		component: React.lazy(() => import('@/layout/BasicLayout')),
		meta: {
			title: '系统路由',
		},
		redirect: '/home',
		children: pages,
	},
];

export default layouts;
