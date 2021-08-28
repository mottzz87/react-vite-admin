/*
 * @Author: Vane
 * @Date: 2021-08-28 14:58:30
 * @LastEditTime: 2021-08-29 02:50:54
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\BasicLayout.tsx
 */
import { Layout, Spin } from 'antd';
import { createHashHistory } from 'history';
import React, { useEffect, lazy } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import MyHeader from './components/Header';
import MyMenu from './components/Menu';
import useStore from '@/store/useStore';

const { Content } = Layout;

const Home = lazy(() => import('../pages/Home'));

const BasicLayout: React.FC<RouteComponentProps> = () => {
  const history = createHashHistory();
  const { loading, user } = useStore((state) => ({ ...state }));
  useEffect(() => {
    console.log(user)
    history.push(user ? '/home' : '/user');
  }, [user]);

  return (
    <Layout>
      <MyMenu />
      <Layout>
        <MyHeader />
        <Content style={{ height: 'calc(100vh - 60px)' }}>
          <Spin spinning={loading}>
            <Switch>
              <Route key="home" path="/home" component={Home} />
            </Switch>
          </Spin>
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(BasicLayout);