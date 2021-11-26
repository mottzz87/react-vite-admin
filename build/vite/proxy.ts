/*
 * @Author: Vane
 * @Date: 2021-08-28 15:12:04
 * @LastEditTime: 2021-08-28 18:26:58
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\build\vite\proxy.ts
 */
/**
 * Used to parse the .env.development proxy configuration
 */
import type { ProxyOptions } from 'vite';

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type ProxyTargetList = Record<
	string,
	ProxyOptions & { rewrite: (path: string) => string }
>;

const httpsRE = /^https:\/\//;

/**
 * Generate proxy
 * @param list 多代理配置
 */
export function createProxy(list: ProxyList = []) {
	const ret: ProxyTargetList = {};
	for (const [prefix, target] of list) {
		const isHttps = httpsRE.test(target);

		// https://github.com/http-party/node-http-proxy#options
		ret[prefix] = {
			target: target,
			changeOrigin: true,
			ws: true,
			rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
			// https is require secure=false
			...(isHttps ? { secure: false } : {}),
		};
	}
	return ret;
}
