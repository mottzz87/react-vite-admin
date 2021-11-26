/*
 * @Author: Vane
 * @Date: 2021-08-28 16:34:37
 * @LastEditTime: 2021-09-05 14:38:14
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Sider\Logo.tsx
 */

import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import logo from '@/assets/logo.png';

const Logo: React.FC<{ size?: any }> = ({ size = 40 }) => (
  <Avatar size={size} src={logo} icon={<UserOutlined />} />
);

export default Logo;