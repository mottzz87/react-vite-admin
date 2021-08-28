/*
 * @Author: Vane
 * @Date: 2021-08-28 17:08:26
 * @LastEditTime: 2021-08-29 02:48:06
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\Authority.tsx
 */
  
import React from 'react';
import { Redirect } from 'react-router-dom';

import useStore from '../store/useStore';

const Authority: React.FC = ({ children }) => {
  const user = useStore((state) => state.user);

  if (!user) {
    return <Redirect to="/user/login" />;
  }

  return <>{children}</>;
};

export default Authority;