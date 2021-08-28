/*
 * @Author: Vane
 * @Date: 2021-08-28 16:49:12
 * @LastEditTime: 2021-08-28 23:22:28
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\store\sleep.ts
 */
import useStore from './useStore';

export const sleep = (timeout: number) => {
	const { setLoading } = useStore.getState();

	return new Promise((resolve) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			resolve(true);
		}, timeout);
	});
};
