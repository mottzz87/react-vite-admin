/*
 * @Author: Vane
 * @Date: 2021-08-28 22:19:15
 * @LastEditTime: 2021-09-22 10:13:00
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite-admin\src\store\slices\userSlice.ts
 */
import { message } from 'antd';
import { GetState, SetState } from 'zustand';
import { createHashHistory } from 'history';
import { MyState } from '../useStore';
import { login } from '@/api/user';
import { sleep } from '../sleep';
import { IMG_BASE } from '@/api/config';
import { getPageQuery } from '@/utils';
const history = createHashHistory();

// 模拟列表假数据
let dataSource = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

const createUserSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
	user: null,
	list: [],
	loading: false,
	editItem: undefined,
	menus: [],

	login: async (val: { username: string; password: string }) => {
		set({ loading: true });
		const res = await login(val);
		if (res.code === 0) {
			set({
				user: { ...res.data, avatar: `${IMG_BASE}/user/photo.jpg` },
				loading: false,
			});
			const urlParams = new URL(window.location.href);
			const params = getPageQuery();
			message.success('🎉 🎉 🎉  登录成功！');

			let { redirect } = params as { redirect: string };
			if (redirect) {
				const redirectUrlParams = new URL(redirect);
				if (redirectUrlParams.origin === urlParams.origin) {
					redirect = redirect.substr(urlParams.origin.length);
					if (window.routerBase !== '/') {
						redirect = redirect.replace(window.routerBase, '/');
					}
					if (redirect.match(/^\/.*#/)) {
						redirect = redirect.substr(redirect.indexOf('#') + 1);
					}
				} else {
					window.location.href = '/';
					return;
				}
			}
			history.replace(redirect || '/');
		}
	},

	setUser: async (val: any) => {
		await sleep(300);
		set({ user: val });
	},

	setLoading: (val: boolean) => set({ loading: val }),

	setEditItem: (params: any) => set({ editItem: params }),

	// 获取列表
	getList: async () => {
		await sleep(1000);
		set({ list: dataSource });
	},

	// 删除
	removeList: async (val: string) => {
		dataSource = dataSource.filter((n) => n.key !== val);
		get().getList();
	},

	// 修改
	editList: async (params: any) => {
		dataSource = dataSource.map((n) => {
			if (n.key === params.key) {
				return { ...n, ...params };
			}
			return n;
		});
		get().getList();
	},

	// 添加
	addList: async (params: any) => {
		dataSource = [
			{ ...params, key: `${dataSource.length + 1}` },
			...dataSource,
		];
		get().getList();
	},
});

export default createUserSlice;
