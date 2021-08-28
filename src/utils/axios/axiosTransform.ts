/*
 * @Author: Vane
 * @Date: 2021-08-29 00:41:36
 * @LastEditTime: 2021-08-29 00:49:35
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\utils\axios\axiosTransform.ts
 */
/**
 * Data processing class, can be configured according to the project
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { RequestOptions, Result } from '#/types/axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
	authenticationScheme?: string;
	urlPrefix?: string;
	transform?: AxiosTransform;
	requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
	/**
	 * @description: Process configuration before request
	 * @description: Process configuration before request
	 */
	beforeRequestHook?: (
		config: AxiosRequestConfig,
		options: RequestOptions
	) => AxiosRequestConfig;

	/**
	 * @description: Request successfully processed
	 */
	transformRequestHook?: (
		res: AxiosResponse<Result>,
		options: RequestOptions
	) => any;

	/**
	 * @description: 请求失败处理
	 */
	requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

	/**
	 * @description: 请求之前的拦截器
	 */
	requestInterceptors?: (
		config: AxiosRequestConfig,
		options: CreateAxiosOptions
	) => AxiosRequestConfig;

	/**
	 * @description: 请求之后的拦截器
	 */
	responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

	/**
	 * @description: 请求之前的拦截器错误处理
	 */
	requestInterceptorsCatch?: (error: Error) => void;

	/**
	 * @description: 请求之后的拦截器错误处理
	 */
	responseInterceptorsCatch?: (error: Error) => void;
}
