/*
 * @Author: Vane
 * @Date: 2021-08-28 16:54:46
 * @LastEditTime: 2021-08-30 23:54:29
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\api\user.ts
 */
import { AxiosPromise } from 'axios';

import request from '@/utils/request';

enum Api {
	USER_Login = '/api/login',
	USER_INFP = '/api/user',
	APP_MENU = '/api/menu',
}

interface ResProps {
	code: 0 | -1;
	data: any;
}

export const login = (data: {
	username: string;
	password: string;
}): Promise<any> => request({ url: Api.USER_Login, method: 'POST', data });

export const getUserInfo = () => request({ url: Api.USER_INFP, method: 'GET' });

export const getMenu = () => request({ url: Api.APP_MENU, method: 'GET' });
