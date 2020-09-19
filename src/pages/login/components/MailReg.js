import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { PhoneOutlined, KeyOutlined } from '@ant-design/icons';

import styles from '../index.less';
import Captcha from './Captcha';

export default function MailRegForm(props) {
  const { onReg, loading } = props;
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={onReg} className={styles.Form}>
      <Form.Item name="phone" rules={[{ required: true, message: '请输入手机号' }]}>
        <Input
          prefix={<PhoneOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="手机号"
        />
      </Form.Item>
      <Form.Item name="validateCode" rules={[{ required: true, message: '请输入验证码' }]}>
        <Captcha
          type="phone"
          receiver={form.getFieldValue('email')}
        />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入组织Code' }]}>
        <Input
          prefix={<KeyOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="组织Code"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.Button}
          loading={loading}
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}