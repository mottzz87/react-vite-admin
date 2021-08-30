/*
 * @Author: Vane
 * @Date: 2021-08-28 16:34:28
 * @LastEditTime: 2021-08-29 20:22:30
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Header\Header.tsx
 */
import { Avatar, Layout } from 'antd';
import React from 'react';

import logo from '@/assets/imgs/logo.jpg';
import useStore from '@/store/useStore';
import cls from './index.module.less';

const { Header } = Layout;

const MyHeader: React.FC = () => {
  const user = useStore((state) => state.user);

  return (
    <Header className={cls.layout_header}>
      <Avatar src={logo} />
      {user.username}
    </Header>
  );
};

export default MyHeader;