/*
 * @Author: Vane
 * @Date: 2021-09-01 02:44:59
 * @LastEditTime: 2021-09-01 03:13:40
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
				for (
					let j = 0, _len = sheetsList[i].cssRules.length;
					j < _len;
					j++
				) {
					if (
						sheetsList[i].cssRules[j].selectorText?.indexOf(
							'ant-icon'
						) > -1
					) {
						sheetsIconList.push(
							`${sheetsList[i].cssRules[j].selectorText
								.substring(
									1,
									sheetsList[i].cssRules[j].selectorText
										.length
								)
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
				for (
					let j = 0, _len = sheetsList[i].cssRules.length;
					j < _len;
					j++
				) {
					if (
						sheetsList[i].cssRules[j].selectorText?.indexOf(
							'.fa-'
						) === 0 &&
						sheetsList[i].cssRules[j].selectorText?.indexOf(',') ===
							-1
					) {
						sheetsIconList.push(
							`${sheetsList[i].cssRules[j].selectorText
								.substring(
									1,
									sheetsList[i].cssRules[j].selectorText
										.length
								)
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
	// element plus
	ele: () => {
		return getElementPlusIconfont();
	},
	// fontawesome
	awe: () => {
		return getAwesomeIconfont();
	},
};

// 导出方法
export default initIconfont;
