/*
 * @Author: Vane
 * @Date: 2021-07-04 14:42:02
 * @LastEditTime: 2021-08-28 15:37:53
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\types\typing.d.ts
 */

declare module 'less-vars-to-js';

declare module '*.md' {
	const content: { [key: string]: string };
	export default content;
}

interface Window {
	less: any;
}
