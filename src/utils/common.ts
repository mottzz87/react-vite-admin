/*
 * @Author: Vane
 * @Date: 2021-08-29 17:29:11
 * @LastEditTime: 2021-09-17 19:58:25
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
export const treeToArray = (
	tree: unknown[],
	proper: string = 'children'
): unknown[] => {
	const array: unknown[] = [];
	const getChildren = (node: unknown[]) => {
		node.forEach((item: any) => {
			if (item[proper]) {
				getChildren(item.children);
				array.push({ ...item, [proper]: undefined });
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
 * @param menus
 * @returns {*}
 */
export const getFirstRoute = (menus: Array<IRoute>): IRoute | any => {
	for (let i = 0; i < menus.length; i++) {
		const menu = menus[i];
		if (!menu.children) {
			return menu;
		} else if (menu?.children?.length) {
			return getFirstRoute(menu.children);
		}
	}
};
