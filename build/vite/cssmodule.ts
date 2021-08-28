/*
 * @Author: Vane
 * @Date: 2021-08-28 15:23:54
 * @LastEditTime: 2021-08-28 18:05:34
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\build\vite\cssmodule.ts
 */

import type { CSSOptions } from 'vite';
import lessToJS from 'less-vars-to-js';

import fs from 'fs';
import { resolve } from 'path';

// modify theme
const themeVariables = lessToJS(
	fs.readFileSync(
		resolve(__dirname, '../../src/styles/variables.less'),
		'utf8'
	)
);

export function cssModule(): CSSOptions {
	return {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
		preprocessorOptions: {
			less: {
				// 支持内联 JavaScript
				javascriptEnabled: true,
				modifyVars: themeVariables,
			},
		},
	};
}
