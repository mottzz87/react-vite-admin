/*
 * @Author: Vane
 * @Date: 2021-08-29 00:47:40
 * @LastEditTime: 2021-08-29 01:32:20
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\enums\httpEnum.ts
 */

/**
 * @description: Request result set
 */
export enum ResultEnum {
	SUCCESS = 0,
	ERROR = 1,
	TIMEOUT = 401,
	TYPE = 'success',
}

/**
 * @description: request method
 */
export enum RequestEnum {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
	// json
	JSON = 'application/json;charset=UTF-8',
	// form-data qs
	FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
	// form-data  upload
	FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
