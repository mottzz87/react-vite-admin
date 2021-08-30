/*
 * @Author: Vane
 * @Date: 2021-08-28 00:52:36
 * @LastEditTime: 2021-08-31 02:21:14
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\App.tsx
 */
import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useStore from '@/store/useStore';
import Login from '@/pages/Login'
import Layout from '@/layout/BasicLayout';

const App = () => {
  const { user } = useStore((state) => ({ ...state }))
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              if (!user?.token) {
                return <Redirect to="/login" />;
              } else {
                return <Layout />;
              }
            }}
          />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
