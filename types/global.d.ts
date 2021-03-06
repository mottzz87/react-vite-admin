/*
 * @Author: Vane
 * @Date: 2021-08-28 03:07:29
 * @LastEditTime: 2021-09-02 21:03:30
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\types\global.d.ts
 */
declare type Nullable<T> = T | null;
declare type NonNullabled<T> = T extends null | undefined ? never : T;
declare type Recordable<T = any> = Record<string, T>;
declare type ReadonlyRecordable<T = any> = {
	readonly [key: string]: T;
};

declare interface ViteEnv {
	VITE_PORT: number;
	VITE_OPEN: boolean;
	VITE_USE_MOCK: boolean;
	VITE_USE_PWA: boolean;
	VITE_PUBLIC_PATH: string;
	VITE_PROXY: [string, string][];
	VITE_GLOB_APP_TITLE: string;
	VITE_GLOB_APP_SHORT_NAME: string;
	VITE_USE_CDN: boolean;
	VITE_DROP_CONSOLE: boolean;
	VITE_DROP_DEBUGGER: boolean;
	VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
	VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
	VITE_LEGACY: boolean;
	VITE_USE_IMAGEMIN: boolean;
	VITE_GENERATE_UI: string;
}

declare function parseInt(s: string | number, radix?: number): number;

declare function parseFloat(string: string | number): number;
