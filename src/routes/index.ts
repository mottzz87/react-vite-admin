/*
 * @Author: Vane
 * @Date: 2021-08-28 14:58:57
 * @LastEditTime: 2021-09-05 01:37:02
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\routes\index.ts
 */
import Loadable from '@loadable/component';
import { IRoute } from '#/types/router';
import { Demo1, Demo2, Demo3 } from '@/pages/permission/Demo';
const Page404 = Loadable(() => import('@/pages/error/404'));
const Page401 = Loadable(() => import('@/pages/error/401'));

const Home = Loadable(() => import('@/pages/Home'));
const About = Loadable(() => import('@/pages/About'));
const IconFont = Loadable(() => import('@/pages/IconFont'));

export const routes: IRoute[] = [
	{ path: '/home', name: '首页', component: Home },
	{ path: '/about', name: 'about', component: About },
	{ path: '/iconfont', name: '字体图标', component: IconFont },
	{ path: '/components/demo1', name: '组件', component: Demo1 },
	{ path: '/components/demo2', name: 'componentsDemo2', component: Demo2 },
	{ path: '/components/demo3', name: 'componentsDemo3', component: Demo3 },
	{
		path: '/components/demo1/demo2/demo2-1',
		name: 'componentsDemo4',
		component: Demo2,
	},
].concat([
	{ path: '/404', name: 'notFound', component: Page404 },
	{ path: '/401', name: 'noPower', component: Page401 },
]);
