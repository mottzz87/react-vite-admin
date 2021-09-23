/*
 * @Author: Vane
 * @Date: 2021-09-01 01:18:56
 * @LastEditTime: 2021-09-24 00:17:46
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite-admin\config\defaultSettings.ts
 */

import { Settings as BasicLayoutProps } from '@ant-design/pro-layout';
import { IMG_BASE } from '@/api/config';

const Settings: BasicLayoutProps & {
	pwa?: boolean;
	logo?: string;
} = {
	navTheme: 'dark',
	// 拂晓蓝
	primaryColor: '#1890ff',
	layout: 'side',
	contentWidth: 'Fluid',
	fixedHeader: true,
	fixSiderbar: true,
	colorWeak: false,
	pwa: false,
	logo: `${IMG_BASE}/logo/logo-text.svg`,
	iconfontUrl: '//at.alicdn.com/t/font_2820718_y01xvox4xzl.js',
	title: 'React-Admin',
};

export default Settings;
