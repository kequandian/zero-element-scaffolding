import React from 'react';
import { Layout, Menu } from 'antd';
import LeftNav from './LeftNav';
import Breadcrumb from './Breadcrumb';
import Login from './Login';
import styles from './index.less';

const { Header, Content, Sider } = Layout;

export default function PrimaryLayout({ location, breadcrumb, children }) {
  if (location.pathname === '/login') {
    return children;
  }

  return <Layout>
    <Header className={styles.topNav}>
      <Menu
        className={styles.menu}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      <div className={styles.login}>
        <Login />
      </div>
    </Header>
    <Layout className="ant-layout-has-sider">
      <Sider width={200} style={{ background: '#fff' }}>
        <LeftNav path={location.pathname} />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb path={location.pathname} breadcrumb={breadcrumb} />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
}