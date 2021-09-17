/*
 * @Author: Vane
 * @Date: 2021-09-04 20:17:21
 * @LastEditTime: 2021-09-04 20:17:27
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \react-vite\src\utils\clipboard.ts
 */

import Clipboard from 'clipboard';
import { message } from 'antd';

export default function clipboard(event: any, text: any) {
	const clipboard = new Clipboard(event.target, {
		text: () => text,
	});
	clipboard.on('success', () => {
		message.success('复制成功');
		clipboard.destroy();
	});
	clipboard.on('error', () => {
		clipboard.destroy();
	});
	clipboard.onClick(event); //防止点击两次才能复制
}
