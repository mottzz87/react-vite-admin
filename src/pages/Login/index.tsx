/*


 * @Author: Vane
 *
 @Date: 2021-07-04 17:11:57

 * @LastEditTime: 2021-08-30 00:44:46

 * @LastEditors: Vane

 * @Description:

 * @FilePath: \react-vite\src\pages\Login\index.tsx

 */

import React, { FC } from 'react';

import { useHistory } from 'react-router-dom';

import { Form, Input, Button, Checkbox, message } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

import project from '#/package.json';

import useStore from '@/store/useStore';

import style from './index.module.less';

import LoginImg from '@/assets/imgs/login/login.png';

import { Local } from '@/utils/storage';

import { ACCOUNT_INFO_KEY } from '@/enums/cacheEnum';

import { getFirstRoute } from '@/utils/common';

import {routes} from '@/routes';

const layout = {
  labelCol: { span: 6 },

  wrapperCol: { span: 24 }
};

interface LoginProps {}

const Login: FC<LoginProps> = () => {

  const { login, loading } = useStore((state) => ({ ...state }));

  const history = useHistory();

  const onFinish = (values: any) => {

    const { username, password } = values;

    if (values.remember) {
      Local.set(ACCOUNT_INFO_KEY, { username });
    } else {
      Local.remove(ACCOUNT_INFO_KEY);
    }

    const homePath = getFirstRoute(routes).path;

    if (username === 'admin' && password === '123456') {
      return login({ username, password });
    }
    message.error('账号或密码错误，请重试！');
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  const { username, password } = Local.get(ACCOUNT_INFO_KEY);

  return (
    <div className={style.login}>
      <div className={style.loginWrapper}>
        <div className={style.loginWrapperImg}>
          <img src={LoginImg} />
        </div>

        <div className={style.loginForm}>
          <p className={style.loginFormTitle}>
            {project.name}

            {/* <Icon type="iconweixiao" className={style.icon} /> */}
          </p>

          <p className={style.loginFormDesc}>欢迎使用～</p>

          <Form
            {...layout}
            name="basic"
            initialValues={{remember: true, username: 'admin', password: '123456'}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              // label="用户名"

              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入用户名"
              />
            </Form.Item>

            <Form.Item
              // label="密码"

              name="password"
              initialValue={password}
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="请输入密码"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button loading={loading} size="large" block type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
