/*
 * @Author: Vane
 * @Date: 2021-07-04 14:42:02
 * @LastEditTime: 2021-08-29 16:42:12
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\types\module.d.ts
 */

declare module 'less-vars-to-js';

declare module '*.md' {
	const content: { [key: string]: string };
	export default content;
}

declare module '@loadable/component';

interface Window {
	less: any;
}
