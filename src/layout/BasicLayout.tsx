/*
 * @Author: Vane
 * @Date: 2021-08-31 02:20:23
 * @LastEditTime: 2021-09-24 00:18:15
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite-admin\src\layout\BasicLayout.tsx
 */
import React, { useRef, useState, useEffect, Children } from 'react';
import { Link } from 'react-router-dom';
import type { BasicLayoutProps as ProLayoutProps, MenuDataItem } from '@ant-design/pro-layout';
import ProLayout, { ProBreadcrumb } from '@ant-design/pro-layout';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import RightContent from './components/Header/RightContent'
import history from '@/utils/history';
import menus from '@/routes/menus';
import useStore from '@/store/useStore';
import Content from './components/Content';
import Footer from './components/Footer';
import defaultSettings from '#/config/defaultSettings'
import cls from './BasicLayout.module.less'

type IRouter = {
  path: string,
  breadcrumbName: string,
}
type menuItemProps = {
  isUrl: boolean;
  onClick: () => void;
} & MenuDataItem

export type BasicLayoutProps = {
  route: ProLayoutProps['route'];
} & ProLayoutProps;

const BasicLayout: React.FC<ProLayoutProps> = (props) => {

  const { user } = useStore((state) => ({ ...state }))

  const [collapsed, setCollapsed] = useState(false);

  const [pathname, setPathname] = useState('/')

  const breadRender = (routers: Array<IRouter>) => {
    return [
      {
        path: '/',
        breadcrumbName: '首页',
      },
      ...routers,
    ]
  }
  
  const menuItemRender = (menuItemProps: menuItemProps, defaultDom: any) => {
    if (
      menuItemProps.isUrl ||
      !menuItemProps.path ||
      location.pathname === menuItemProps.path
    ) {
      return defaultDom;
    }
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  }

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const loopMenuItem = (menus?: MenuDataItem[]): MenuDataItem[] => {
    if (!menus) return [];

    const m = menus.map(({ icon, children, ...item }) => ({
      ...item,
      icon,
      children: children && loopMenuItem(children),
    }));
    return m;
  };

  const headerContentRender = () => {
    return (
      <div className={cls.headerContent}>
        <span id="sidebar-trigger" className={cls.trigger} onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </span>
        <span className={cls.breadcrumb}>
          <ProBreadcrumb />
        </span>
      </div>
    );
  }

  const actionRef = useRef<{
    reload: () => void;
  }>();

  useEffect(() => {
    
    setPathname(location.hash.slice(1))

  }, [location.hash]);

  return (

    <ProLayout
      {...{...defaultSettings, ...props, collapsed}}
      actionRef={actionRef}
      collapsedButtonRender={false}
      rightContentRender={() => <RightContent />}
      onMenuHeaderClick={() => history.push('/home')}
      onCollapse={setCollapsed}
      breadcrumbRender={(routers = []) => breadRender(routers)}
      menuItemRender={(menuItemProps, defaultDom) => menuItemRender(menuItemProps, defaultDom)}
      footerRender={() => <Footer />}
      menu={{
        request: async () => {
          await waitTime(800);
          return loopMenuItem(menus);
        },
      }}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      route={{routes: menus}}
      location={{pathname}}
      headerContentRender={() => headerContentRender()}
    >
      <Content />
    </ProLayout>
  )
  
};
export default BasicLayout