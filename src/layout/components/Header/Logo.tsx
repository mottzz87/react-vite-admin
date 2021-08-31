/*
 * @Author: Vane
 * @Date: 2021-08-28 16:34:37
 * @LastEditTime: 2021-08-31 21:09:12
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Header\Logo.tsx
 */

import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import logo from '@/assets/logo.jpg';

const Logo: React.FC<{ size: number }> = ({ size = 120 }) => (
  <Avatar size="small" src={logo} icon={<UserOutlined />} />
);

export default Logo;