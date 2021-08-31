/*
 * @Author: Vane
 * @Date: 2021-09-01 02:34:53
 * @LastEditTime: 2021-09-01 03:03:29
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\utils\setIconfont.ts
 */

// 字体图标 url
const cssCdnUrlList: Array<string> = [
	'//at.alicdn.com/t/font_2471493_dw8kjy5wpk9.css',
	'//cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
];

// 第三方 js url
const jsCdnUrlList: Array<string> = [];

// 动态设置字体图标
export function setCssCdn() {
	if (cssCdnUrlList.length <= 0) return false;
	cssCdnUrlList.map((v) => {
		let link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = v;
		link.crossOrigin = 'anonymous';
		document.getElementsByTagName('head')[0].appendChild(link);
	});
}

// 批量设置第三方js
export function setJsCdn() {
	if (jsCdnUrlList.length <= 0) return false;
	jsCdnUrlList.map((v) => {
		let link = document.createElement('script');
		link.src = v;
		document.body.appendChild(link);
	});
}

// 设置执行函数
const setIntroduction = {
	cssCdn: () => {
		setCssCdn();
	},
	jsCdn: () => {
		setJsCdn();
	},
};

// 导出函数方法
export default setIntroduction;
