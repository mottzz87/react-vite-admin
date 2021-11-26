/*
 * @Author: Vane
 * @Date: 2021-08-28 17:18:54
 * @LastEditTime: 2021-08-28 18:04:36
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\mock\_createProductionServer.ts
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

// const modules = import.meta.globEager('./**/*.ts');
// const mockModules: any[] = [];
// Object.keys(modules).forEach((key) => {
//   if (key.includes('/_')) {
//     return;
//   }
//   mockModules.push(...modules[key].default);
// });
/**
 * Used in a production environment. Need to manually import all modules
 */
import data from './data';
export function setupProdMockServer() {
	createProdMockServer([...data]);
}
