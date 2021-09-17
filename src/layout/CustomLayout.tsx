/*
 * @Author: Vane
 * @Date: 2021-08-29 02:58:09
 * @LastEditTime: 2021-09-02 23:53:24
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\CustomLayout.tsx
 */

import { Layout, Spin } from 'antd';
import React, { useEffect, lazy } from 'react';
import history from '@/utils/history';
import { RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Sider from './components/Sider';
import Content from './components/Content'

import useStore from '@/store/useStore';

const BasicLayout: React.FC<RouteComponentProps> = () => {
  const { loading, user } = useStore((state) => ({ ...state }));
  // useEffect(() => {
  //   history.push('/home');
  // }, [user]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  );
};

export default withRouter(BasicLayout);