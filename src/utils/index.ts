/*
 * @Author: Vane
 * @Date: 2021-08-29 01:03:57
 * @LastEditTime: 2021-08-31 22:52:27
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\utils\index.ts
 */

import { isObject } from '@/utils/is';

import { stringify, parse } from 'qs';

/**
 * @description: eg: url => obj
 * @param {*}
 * @return {*} obj
 */
export const getPageQuery = () => parse(window.location.href.split('?')[1]);

/**
 * @description: eg: obj => url
 * @param {string} baseUrl
 * @param {any} obj
 * @return {*} string
 */
export const getQueryUrl = (baseUrl: string, obj: any) => {
	baseUrl = baseUrl || window.location.href;
	const hyphen = /\?/.test(baseUrl) ? '&' : '?';
	return baseUrl + hyphen + stringify(obj);
};

/**
 * @description: window.open
 * @param {*} (string, object)
 * @return {*}
 */
export function openWindow(
	url: string,
	opt?: {
		target?: TargetContext | string;
		noopener?: boolean;
		noreferrer?: boolean;
	}
) {
	const {
		target = '__blank',
		noopener = true,
		noreferrer = true,
	} = opt || {};
	const feature: string[] = [];

	noopener && feature.push('noopener=yes');
	noreferrer && feature.push('noreferrer=yes');

	window.open(url, target, feature.join(','));
}

/**
 * @description:
 * @param {any} src
 * @param {any} target
 * @return {*}
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
	let key: string;
	for (key in target) {
		src[key] = isObject(src[key])
			? deepMerge(src[key], target[key])
			: (src[key] = target[key]);
	}
	return src;
}
