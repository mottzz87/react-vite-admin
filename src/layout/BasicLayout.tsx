/*
 * @Author: Vane
 * @Date: 2021-08-31 02:20:23
 * @LastEditTime: 2021-08-31 03:13:39
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\BasicLayout.tsx
 */
import React from 'react';
import { Link } from 'react-router-dom';
import type { BasicLayoutProps as ProLayoutProps } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, ProBreadcrumb } from '@ant-design/pro-layout';
import history from '@/utils/history';
import menus from '@/routes/menus'
import useStore from '@/store/useStore';
import Content from './components/Content';

export type BasicLayoutProps = {
  route: ProLayoutProps['route'];
} & ProLayoutProps;

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { user } = useStore((state) => ({ ...state }))
  return (
    <ProLayout
      headerContentRender={() => <ProBreadcrumb />}
      menuDataRender={() => menus}
      onMenuHeaderClick={() => history.push('/home')}
      onPageChange={(location) => {
        console.log(111,location)
        // 如果没有登录，重定向到 login
        if (!user.token) {
          history.push('/login');
        }
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      footerRender={() => '我是footer'}
      
    >
      <Content />
    </ProLayout>
  )
  
};
export default BasicLayout