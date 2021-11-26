/*
 * @Author: Vane
 * @Date: 2021-08-29 01:12:48
 * @LastEditTime: 2021-09-04 12:01:02
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\types\router.d.ts
 */

export interface IRouteBase {
	// 路由路径
	path: string;
	// name
	name?: string;
	// 路由组件
	routes?: any;
	component?: string;
}
export interface IRoute extends IRouteBase {
	children?: IRoute[];
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
