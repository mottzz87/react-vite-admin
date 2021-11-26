/*
 * @Author: Vane
 * @Date: 2021-08-28 16:34:28
 * @LastEditTime: 2021-09-05 14:35:21
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Header\Header.tsx
 */
import { Avatar, Layout } from 'antd';
import React from 'react';
import useStore from '@/store/useStore';
import RightContent from './RightContent'
import styles from './index.module.less';

const { Header } = Layout;

const MyHeader: React.FC = () => {
  const user = useStore((state) => state.user);

  return (
    <div className={styles.layout_header}>
      <RightContent />
    </div>
  );
};

export default MyHeader;