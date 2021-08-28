/*
 * @Author: Vane
 * @Date: 2021-08-28 14:59:53
 * @LastEditTime: 2021-08-29 01:54:21
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\pages\User\Login.tsx
 */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, message } from 'antd';
import React from 'react';

import useStore from '@/store/useStore';
import cls from './index.module.less';

const Login: React.FC = () => {
  const { login, loading } = useStore((state) => ({ ...state }));
  return (
    <div className={cls.loginBox}>
      <Card>
        <Form
          initialValues={{username: 'admin', password: '123456'}}
          onFinish={({ username, password }) => {
            console.log(useStore)
            if (username === 'admin' && password === '123456') {
              return login({ username, password });
            }
            message.error('账号或密码错误，请重试！');
          }}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}>
            <Input prefix={<UserOutlined />} placeholder="请输入用户名：admin" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input prefix={<LockOutlined />} placeholder="请输入密码：123456" />
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className={cls.button}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;