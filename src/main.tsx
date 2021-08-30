/*
 * @Author: Vane
 * @Date: 2021-08-28 00:52:36
 * @LastEditTime: 2021-08-31 02:28:06
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\main.tsx
 */

// 引入 less 文件，使vite的配置可以替换主题
import 'antd/dist/antd.less';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// StrictMode 开启react严格模式
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);