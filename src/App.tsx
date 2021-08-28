/*
 * @Author: Vane
 * @Date: 2021-08-28 00:52:36
 * @LastEditTime: 2021-08-29 02:49:08
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\App.tsx
 */
import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Authority from '@/layout/Authority';
import BasicLayout from '@/layout/BasicLayout';
import UserLayout from '@/layout/UserLayout';

const App = () => {
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Authority}></Route>
          <Route path="/user" component={UserLayout}></Route>
          <Route path="/home" component={BasicLayout}></Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
