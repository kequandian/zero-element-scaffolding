import React from 'react';
import router from 'umi/router';
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';
import { post } from 'zero-element/lib/utils/request';

import styles from './index.less';

const { Content } = Layout;

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        post('/api/sys/oauth/login', values).then((response) => {
          const { data } = response;
          if (data.code === 200) {
            router.push('/');
          }
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.Form}>
        <Form.Item>
          {getFieldDecorator('account', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>自动登录</Checkbox>)}
          <Button type="link" className={styles.forgot}>
            忘记密码
          </Button>
          <Button type="primary" htmlType="submit" className={styles.Button}>
            登陆
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create({})(LoginForm);

export default (props) => {
  return <Layout>
    <Content>
      <br />
      <br />
      <WrappedLoginForm />
    </Content>
  </Layout>
}