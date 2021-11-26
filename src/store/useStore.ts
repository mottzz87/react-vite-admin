/*
 * @Author: Vane
 * @Date: 2021-08-28 15:04:31
 * @LastEditTime: 2021-08-29 02:45:51
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\store\useStore.ts
 */

import create from 'zustand';
import { UserSlice } from './types/user';
import { ThemeSlice } from './types/theme';
import createUserSlice from './slices/userSlice';
import createThemeSlice from './slices/themeSlice';
import { persist } from 'zustand/middleware';

export type MyState = UserSlice & ThemeSlice;

const useStore = create(
	persist(
		(set, get) => ({
			...createUserSlice(set, get),
			...createThemeSlice(set, get),
		}),
		{
			name: 'user-storage', // unique name
			getStorage: () => localStorage,
		}
	)
);

export default useStore;
