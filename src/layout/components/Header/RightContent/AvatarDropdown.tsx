/*
 * @Author: Vane
 * @Date: 2021-08-31 21:15:29
 * @LastEditTime: 2021-09-01 00:22:48
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Header\RightContent\AvatarDropdown.tsx
 */
import React from 'react'
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';

import HeaderDropdown from '@/components/HeaderDropdown';
import styles from './index.module.less';
import useStore from '@/store/useStore';
import history from '@/utils/history'

export type HeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<HeaderRightProps> = ({ menu }) => {

  const { user }  = useStore(state => state)
  
  const onMenuClick = (event: any) => {
    
  };
  const logout = () => {
    history.push('/login?redirect=' + encodeURIComponent(window.location.href))
  }
  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={(e) => onMenuClick(e)}>
      {menu && (
        <Menu.Item key='center'>
          <UserOutlined />
          个人中心
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key='settings'>
          <SettingOutlined />
          个人设置
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}
      <Menu.Item key='logout' onClick={() => logout()}>
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size={36} className={styles.avatar} src={user.avatar} alt='avatar' />
        <span className={`${styles.name} anticon`}>{user.username}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;

