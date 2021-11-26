/*
 * @Author: Vane
 * @Date: 2021-08-28 00:52:36
 * @LastEditTime: 2021-09-18 00:59:05
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\main.tsx
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.less';
import '@/styles/index.less'
import '@/styles/antd.less';

import App from './App';

// StrictMode 开启react严格模式
ReactDOM.render(
    <App />,
  document.getElementById('root'),
);