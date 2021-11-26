/*
 * @Author: Vane
 * @Date: 2021-08-29 03:20:29
 * @LastEditTime: 2021-09-22 09:39:39
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

  // map方法输出tree结构 优于递归
  const test = () => {
    let arr = [
      {id: 1, name: '部门1', pid: 0},
      {id: 2, name: '部门2', pid: 1},
      {id: 3, name: '部门3', pid: 1},
      {id: 4, name: '部门4', pid: 3},
      {id: 5, name: '部门5', pid: 4},
    ]
    const obj = (arr) => {
      return arr.reduce((t, c) => {
        t[c.id] = {...c, children: []}
        return t
      }, {})
    }
    let tree = {}
    let objData = obj(arr)
    Object.values(objData).forEach(v => {
      if(!objData[v.pid]){
        tree = v
      }else{
        objData[v.pid].children.push(v)
      }
    })

    console.log(22, objData, tree)
  }
  return (
      <Content style={{ height: "calc(100% - 100px)" }}>
        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={500} classNames="fade" exit={false} unmountOnExit>
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