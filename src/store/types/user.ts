/*
 * @Author: Vane
 * @Date: 2021-08-28 16:49:41
 * @LastEditTime: 2021-08-29 21:36:56
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\store\types\user.ts
 */

export interface LoginParams {
	username: string;
	password: string;
}

interface InfoProps {
	userId: string;
	username: string;
	phone: string;
	desc: string;
}

export interface MenuProps {
	id: string;
	path: string;
	title: string;
	icon?: string;
	children: MenuProps[];
}

/**@name 用户权限  拥有全部权限为超级管理员 [1,2,3]  */
type RolesProps = 1 | 2 | 3;

interface UserProps {
	info: InfoProps;
	menus: MenuProps[];
	roles: RolesProps[];
}
// 类型声明
export type UserSlice = {
	/**@name 用户信息 */
	user: UserProps | null;
	/**@name 数据列表 */
	list: any[];
	/**@name loading */
	loading: boolean;
	/**@name 当前修改项 */
	editItem: any;

	login: (val: LoginParams) => void;
	setUser: (val: string) => void;
	setLoading: (val: boolean) => void;
	// 列表 增删改查
	getList: () => void;
	removeList: (id: string) => void;
	editList: (params: any) => void;
	addList: (params: any) => void;
	setEditItem: (params: any) => void;
};
