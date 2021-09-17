/*
 * @Author: Vane
 * @Date: 2021-08-29 03:20:29
 * @LastEditTime: 2021-09-18 01:20:28
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Content\index.tsx
 */
import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { CacheRoute, CacheSwitch, useDidCache } from "react-router-cache-route";
// import {
//   CacheSwitch,
//   CacheRoute,
//   useDidCache,
//   useDidRecover,
//   clearCache,
//   getCachingKeys
// } from "react-router-cache-route";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from 'antd';
import { routes } from '@/routes';

const { Content } = Layout;

const MyContent: React.FC = () => {
  const location = useLocation();
  useDidCache(() => {
    console.log('List cached 1')
  })
  return (
      <Content style={{ height: "calc(100% - 100px)" }}>
        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={500} classNames="fade" exit={false}>
            <CacheSwitch location={location}>
              <Redirect exact from="/" to="/home" />
              { 
                routes?.map((route) => (
                  <CacheRoute
                    component={route.component}
                    key={route.path}
                    path={route.path}
                  />
                ))
              }
              <Redirect to="/404" />
            </CacheSwitch>
          </CSSTransition>
        </TransitionGroup>
      </Content>
  );
};

export default MyContent;