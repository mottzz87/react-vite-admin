/*
 * @Author: Vane
 * @Date: 2021-08-31 20:36:24
 * @LastEditTime: 2021-08-31 20:57:50
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Footer\index.tsx
 */
import React from 'react'
import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined, FireOutlined } from '@ant-design/icons';

export default function Footer() {
  const heart = () => <FireOutlined style={{color: 'red'}}/>
  return (
    <DefaultFooter
      copyright={<span>{`${new Date().getFullYear()}`} Vane {heart()} React-Admin</span>}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: '',
          blankTarget: true,
        },
      ]}
    />
  );
}