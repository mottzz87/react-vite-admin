/*
 * @Author: Vane
 * @Date: 2021-08-28 22:59:50
 * @LastEditTime: 2021-08-29 00:11:36
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\store\slices\themeSlice.ts
 */

import { GetState, SetState } from 'zustand';
import { MyState } from '../useStore';

const createThemeSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
	theme: 'default',
	setTheme: (val: string) => {
		set({ theme: val });
	},
});

export default createThemeSlice;
