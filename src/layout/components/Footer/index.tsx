/*
 * @Author: Vane
 * @Date: 2021-08-31 20:36:24
 * @LastEditTime: 2021-09-17 19:10:39
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Footer\index.tsx
 */
import React from 'react'
import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined, FireOutlined } from '@ant-design/icons';

export default function Footer() {
  const heart = () => <FireOutlined style={{color: 'red'}}/> 
  const copyright = new Date().getFullYear() + ' React-Admin'
  return (
    <DefaultFooter
      copyright={copyright}
      links={[
        {
          key: 'Vane',
          title: heart(),
          href: '/#/home',
          // blankTarget: true,
        },
      ]}
    />
  );
}