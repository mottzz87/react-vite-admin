/*
 * @Author: Vane
 * @Date: 2021-08-31 02:20:23
 * @LastEditTime: 2021-09-02 22:17:19
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\BasicLayout.tsx
 */
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { BasicLayoutProps as ProLayoutProps, MenuDataItem } from '@ant-design/pro-layout';
import ProLayout, { ProBreadcrumb } from '@ant-design/pro-layout';
import { MenuFoldOutlined, MenuUnfoldOutlined, SmileOutlined, HeartOutlined, FrownOutlined } from '@ant-design/icons';
import RightContent from './components/Header/RightContent'
import history from '@/utils/history';
import menus from '@/routes/menus'
import useStore from '@/store/useStore';
import Content from './components/Content';
import Footer from './components/Footer';
import { IMG_BASE } from '@/api/config';
import defaultSettings from '#/config/defaultSettings'




const IconMap: { [key: string]: React.ReactNode } = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
  frown: <FrownOutlined />,
};

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

  const pageChange = () => {
    // 没有token去登录
    if (!user.token) {
      history.push('/login');
    }
  }
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
      icon: icon && IconMap[icon as string],
      children: children && loopMenuItem(children),
    }));

    return m;
  };

  const actionRef = useRef<{
    reload: () => void;
  }>();

  useEffect(() => {
    if (location.pathname === "/") {
      history.push("/dashboard");
    }
  }, []);

  return (
    <ProLayout
      {...{...defaultSettings, ...props, collapsed}}
      actionRef={actionRef}
      // headerContentRender={() => <ProBreadcrumb />}
      rightContentRender={() => <RightContent />}
      onMenuHeaderClick={() => history.push('/home')}
      onPageChange={() => pageChange()}
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
      
      headerContentRender={() => {
        return (
          <div
            onClick={() => setCollapsed(!collapsed)}
            style={{
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            <span id="sidebar-trigger">
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
          </div>
        );
      }}
    >
      <Content />
    </ProLayout>
  )
  
};
export default BasicLayout