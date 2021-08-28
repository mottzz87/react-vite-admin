/*
 * @Author: Vane
 * @Date: 2021-08-28 14:58:37
 * @LastEditTime: 2021-08-28 23:58:23
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\UserLayout.tsx
 */
import { Layout, Typography } from 'antd';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Login = React.lazy(() => import('@/pages/User/Login'));
const Page404 = React.lazy(() => import('@/pages/Errors/Page404'));

const { Content, Footer } = Layout;
const { Text } = Typography;

const UserLayout: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Switch>
          <Redirect exact from="/user" to="/user/login" />
          <Route exact path="/user/login" component={Login} />
          <Route component={Page404} />
        </Switch>
      </Content>
      <Footer>
          <Text type="secondary">@vane 2021</Text>
      </Footer>
    </Layout>
  );
};
export default UserLayout;