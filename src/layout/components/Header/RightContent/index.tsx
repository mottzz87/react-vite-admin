/*
 * @Author: Vane
 * @Date: 2021-08-31 21:11:31
 * @LastEditTime: 2021-08-31 21:12:45
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Header\RightContent\index.tsx
 */
import React from 'react'
import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import AvatarDropdown from './AvatarDropdown';
import styles from './index.module.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const theme = 'dark';
  const layout = 'mix';

  let className = styles.right;

  // @ts-ignore
  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <span className={styles.action}>
        <QuestionCircleOutlined />
      </span>
      <AvatarDropdown menu />
    </Space>
  );
};

export default GlobalHeaderRight;