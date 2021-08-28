/*
 * @Author: Vane
 * @Date: 2021-08-28 03:03:38
 * @LastEditTime: 2021-08-28 14:25:19
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\build\utils.ts
 */

export function isDevEnv(mode: string): boolean {
	return mode === 'development';
}

export function isProdFn(mode: string): boolean {
	return mode === 'production';
}

// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {};

	for (const envName of Object.keys(envConf)) {
		let realName = envConf[envName].replace(/\\n/g, '\n');
		realName =
			realName === 'true'
				? true
				: realName === 'false'
				? false
				: realName;

		if (envName === 'VITE_PORT') {
			realName = Number(realName);
		}
		if (envName === 'VITE_PROXY') {
			try {
				realName = JSON.parse(realName);
			} catch (error) {}
		}
		ret[envName] = realName;
		process.env[envName] = realName;
	}
	return ret;
}
