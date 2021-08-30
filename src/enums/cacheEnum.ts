/*
 * @Author: Vane
 * @Date: 2021-08-29 01:23:46
 * @LastEditTime: 2021-08-29 17:27:40
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\enums\cacheEnum.ts
 */

//login account info
export const ACCOUNT_INFO_KEY = 'ACCOUNT_INFO__';

// token key
export const TOKEN_KEY = 'TOKEN__';

export const LOCALE_KEY = 'LOCALE__';

// user info key
export const USER_INFO_KEY = 'USER__INFO__';

// role info key
export const ROLES_KEY = 'ROLES__KEY__';

// project config key
export const PROJ_CFG_KEY = 'PROJ__CFG__KEY__';

// lock info
export const LOCK_INFO_KEY = 'LOCK__INFO__KEY__';

// multiple tabs
export const MULTIPLE_TABS_KEY = 'MULTIPLE_TABS__KEY__';

// dark mode
export const APP_DARK_MODE_KEY_ = '__APP__DARK__MODE__';

// base global local key
export const APP_LOCAL_CACHE_KEY = 'COMMON__LOCAL__KEY__';

// base global session key
export const APP_SESSION_CACHE_KEY = 'COMMON__SESSION__KEY__';

export enum CacheTypeEnum {
	SESSION,
	LOCAL,
}
