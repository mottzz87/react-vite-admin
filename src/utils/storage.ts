/*
 * @Author: Vane
 * @Date: 2021-08-29 17:22:33
 * @LastEditTime: 2021-08-29 17:22:33
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\utils\storage.ts
 */

// 1、window.localStorage
export const Local = {
	// 设置永久缓存
	set(key: string, val: any) {
		window.localStorage.setItem(key, JSON.stringify(val));
	},
	// 获取永久缓存
	get(key: string) {
		const json: any = window.localStorage.getItem(key);
		return json ? JSON.parse(json) : '';
	},
	// 移除永久缓存
	remove(key: string) {
		window.localStorage.removeItem(key);
	},
	// 移除全部永久缓存
	clear() {
		window.localStorage.clear();
	},
};

// 2、window.sessionStorage
export const Session = {
	// 设置临时缓存
	set(key: string, val: any) {
		window.sessionStorage.setItem(key, JSON.stringify(val));
	},
	// 获取临时缓存
	get(key: string) {
		const json: any = window.sessionStorage.getItem(key);
		return json ? JSON.parse(json) : '';
	},
	// 移除临时缓存
	remove(key: string) {
		window.sessionStorage.removeItem(key);
	},
	// 移除全部临时缓存
	clear() {
		window.sessionStorage.clear();
	},
};
