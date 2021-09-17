/*
 * @Author: Vane
 * @Date: 2021-08-28 00:52:36
 * @LastEditTime: 2021-09-18 01:27:06
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\App.tsx
 */
import React, { Suspense, useEffect } from 'react';
import { Spin } from 'antd';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useStore from '@/store/useStore';
import Login from '@/pages/Login'
import Layout from '@/layout/BasicLayout';
import Content from '@/layout/components/Content'
import setIntroduction from './utils/setIconfont';


const App = () => {
  const { user } = useStore((state) => ({ ...state }))

  useEffect(() => {
    setIntroduction.jsCdn()
    setIntroduction.cssCdn()
  });
  
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
              }
              return <Layout/>;
            }}
          />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
