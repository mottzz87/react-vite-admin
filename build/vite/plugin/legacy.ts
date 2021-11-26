/*
 * @Author: Vane
 * @Date: 2021-08-28 14:35:18
 * @LastEditTime: 2021-08-28 15:21:36
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\build\vite\plugin\legacy.ts
 */

import type { Plugin } from 'vite';
import legacy from '@vitejs/plugin-legacy';

// Vite's default browser support baseline is Native ESM. This plugin provides support for legacy browsers that do not support native ESM.

export function configLegacy(): Plugin {
	const opt = {
		targets: ['ie >= 11'],
		additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
	};
	return legacy(opt);
}
