/*
 * @Author: Vane
 * @Date: 2021-08-28 14:58:57
 * @LastEditTime: 2021-08-30 23:40:03
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

export const routes: IRoute[] = [
	{ path: '/home', name: 'home', component: Home },
	{ path: '/system/menu', name: 'systemMenu', component: About },
	{ path: '/permission/demo1', name: 'permissionDemo1', component: Demo1 },
	{ path: '/permission/demo2', name: 'permissionDemo2', component: Demo2 },
	{ path: '/permission/demo3', name: 'permissionDemo3', component: Demo3 },
	{ path: '/components/demo1', name: 'componentsDemo1', component: Demo1 },
	{ path: '/components/demo2', name: 'componentsDemo2', component: Demo2 },
	{ path: '/components/demo3', name: 'componentsDemo3', component: Demo3 },

	{ path: '/charts/demo1', name: 'componentsDemo1', component: Demo1 },
	{ path: '/charts/demo2', name: 'componentsDemo2', component: Demo2 },
	{ path: '/charts/demo3', name: 'componentsDemo3', component: Demo3 },

	{ path: '/nested/menu1/demo1', name: 'componentsDemo1', component: Demo1 },
	{
		path: '/nested/menu1/demo2/demo2-1',
		name: 'componentsDemo2',
		component: Demo2,
	},
].concat([
	{ path: '/404', name: 'notFound', component: Page404 },
	{ path: '/401', name: 'noPower', component: Page401 },
]);
