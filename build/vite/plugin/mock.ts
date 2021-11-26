/*
 * @Author: Vane
 * @Date: 2021-08-28 18:19:48
 * @LastEditTime: 2021-09-24 01:16:44
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite-admin\build\vite\plugin\mock.ts
 */
import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(isBuild: boolean) {
	return viteMockServe({
		ignore: /^\_/,
		mockPath: 'mock',
		localEnabled: !isBuild,
		prodEnabled: isBuild,
		injectCode: `
      import { setupProdMockServer } from '../../../mock/_createProductionServer.ts';

      setupProdMockServer();
      `,
	});
}
