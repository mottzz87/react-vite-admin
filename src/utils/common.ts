/*
 * @Author: Vane
 * @Date: 2021-08-29 17:29:11
 * @LastEditTime: 2021-08-29 17:33:49
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\utils\common.ts
 */

import { IRoute } from '#/types/router';

/**
 * 处理请求参数，移除值为空、null, undefined的参数
 * @param data
 */
export const handleNullData = (
	data: Record<string, unknown> | []
): Record<string, unknown> => {
	return JSON.parse(
		JSON.stringify(data, (k, v) => {
			if (
				v !== '' &&
				v !== null &&
				v !== undefined &&
				v !== 'undefined'
			) {
				return v;
			}
		})
	);
};

/**
 * 树结构拍平
 * @param tree
 */
export const treeToArray = (tree: unknown[]): unknown[] => {
	const array: unknown[] = [];
	const getChildren = (node: unknown[]) => {
		node.forEach((item: any) => {
			if (item.children) {
				getChildren(item.children);
				array.push({ ...item, children: undefined });
			} else {
				array.push(item);
			}
		});
	};
	getChildren(tree);
	return array;
};

/**
 * 身份证号脱敏
 * @param value:string 身份证号
 */
export const formatIdCard = (value: string | undefined): string => {
	let idCard = '';
	if (value && value?.length >= 15) {
		idCard = value.replace(/^(.{4})(?:\d+)(.{4})$/, '$1******$2');
	}
	return idCard;
};

/**
 * 获取第一个非空路由
 * @param routes
 * @returns {*}
 */
export const getFirstRoute = (routes: Array<IRoute>): IRoute | any => {
	for (let i = 0; i < routes.length; i++) {
		const route = routes[i];
		if (!route.children) {
			return route;
		}
		if (route.children && route.children.length) {
			return getFirstRoute(route.children);
		}
	}
};
