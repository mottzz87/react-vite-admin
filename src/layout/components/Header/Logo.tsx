/*
 * @Author: Vane
 * @Date: 2021-08-28 16:34:37
 * @LastEditTime: 2021-08-29 20:20:38
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Header\Logo.tsx
 */
import { Avatar } from 'antd';
import React from 'react';

import logo from '@/assets/logo.jpg';

const Logo: React.FC<{ size: number }> = ({ size = 120 }) => (
  <Avatar size={size} src={logo} />
);

export default Logo;