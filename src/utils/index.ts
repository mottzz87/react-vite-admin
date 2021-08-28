/*
 * @Author: Vane
 * @Date: 2021-08-29 01:03:57
 * @LastEditTime: 2021-08-29 01:51:06
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\utils\index.ts
 */

import { isObject } from '@/utils/is';

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
	let parameters = '';
	for (const key in obj) {
		parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
	}
	parameters = parameters.replace(/&$/, '');
	return /\?$/.test(baseUrl)
		? baseUrl + parameters
		: baseUrl.replace(/\/?$/, '?') + parameters;
}

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
