/*
 * @Author: Vane
 * @Date: 2021-09-01 02:44:59
 * @LastEditTime: 2021-09-17 21:41:37
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\utils\getStyleSheets.ts
 */

// 获取阿里字体图标
const getAlicdnIconfont = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const styles: any = document.styleSheets;
			let sheetsList = [];
			let sheetsIconList = [];
			for (let i = 0, len = styles.length; i < len; i++) {
				if (styles[i].href?.indexOf('at.alicdn.com') > -1) {
					sheetsList.push(styles[i]);
				}
			}
			for (let i = 0, len = sheetsList.length; i < len; i++) {
				let _len = sheetsList[i].cssRules.length;
				for (let j = 0; j < _len; j++) {
					let itemText = sheetsList[i].cssRules[j].selectorText;
					if (itemText?.indexOf('icon-') > -1) {
						sheetsIconList.push(
							`${itemText
								.substring(1, itemText.length)
								.replace(/\:\:before/gi, '')}`
						);
					}
				}
			}
			if (sheetsIconList.length > 0) resolve(sheetsIconList);
			else reject('未获取到值，请刷新重试');
		}, 0);
	});
};

// 初始化获取 css 样式，这里使用 fontawesome 的图标
const getAwesomeIconfont = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const styles: any = document.styleSheets;
			let sheetsList = [];
			let sheetsIconList = [];
			for (let i = 0, len = styles.length; i < len; i++) {
				if (styles[i].href?.indexOf('bootcdn') > -1) {
					sheetsList.push(styles[i]);
				}
			}
			for (let i = 0, len = sheetsList.length; i < len; i++) {
				let _len = sheetsList[i].cssRules.length;
				for (let j = 0; j < _len; j++) {
					let itemText = sheetsList[i].cssRules[j].selectorText;
					if (
						itemText?.indexOf('.fa-') === 0 &&
						itemText?.indexOf(',') === -1
					) {
						sheetsIconList.push(
							`${itemText
								.substring(1, itemText.length)
								.replace(/\:\:before/gi, '')}`
						);
					}
				}
			}
			if (sheetsIconList.length > 0) resolve(sheetsIconList);
			else reject('未获取到值，请刷新重试');
		}, 0);
	});
};

// 定义导出方法集合
const initIconfont = {
	// iconfont
	ali: () => {
		return getAlicdnIconfont();
	},
	// fontawesome
	awe: () => {
		return getAwesomeIconfont();
	},
};

// 导出方法
export default initIconfont;
