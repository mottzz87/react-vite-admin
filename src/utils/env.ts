/*
 * @Author: Vane
 * @Date: 2021-08-29 01:19:35
 * @LastEditTime: 2021-08-29 01:20:50
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\utils\env.ts
 */

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
	return import.meta.env.MODE;
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
	return import.meta.env.DEV;
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
	return import.meta.env.PROD;
}
