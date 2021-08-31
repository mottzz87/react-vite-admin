/*
 * @Author: Vane
 * @Date: 2021-09-01 01:18:56
 * @LastEditTime: 2021-09-01 02:30:04
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\config\defaultSettings.ts
 */

import { IMG_BASE } from '@/api/config';
import { Settings as BasicLayoutProps } from '@ant-design/pro-layout';

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
	iconfontUrl: '',
	title: 'React-Admin',
	collapsedButtonRender: false,
};

export default Settings;
