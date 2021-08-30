/*
 * @Author: Vane
 * @Date: 2021-08-29 03:20:29
 * @LastEditTime: 2021-08-30 01:26:49
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Content\index.tsx
 */
import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import DocumentTitle from "react-document-title";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from 'antd';
import { routes } from '@/routes';
import useStore from '@/store/useStore';


const { Content } = Layout;

const MyHeader: React.FC = () => {
  const location = useLocation();

  const getPageTitle = () => {
    return 'test'
  }

  return (
    <DocumentTitle title={getPageTitle()}>
      <Content style={{ height: "calc(100% - 100px)" }}>
        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={500} classNames="fade" exit={false}>
            <Switch location={location}>
              <Redirect exact from="/" to="/home" />
              { 
                routes?.map((route) => (
                  <Route
                    component={route.component}
                    key={route.path}
                    path={route.path}
                  />
                ))
              }
              <Redirect to="/404" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </DocumentTitle>
  );
};

export default MyHeader;