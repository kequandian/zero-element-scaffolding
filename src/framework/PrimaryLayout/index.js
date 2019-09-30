import React from 'react';
import { Layout } from 'antd';
import TopNav from './TopNav';
import LeftNav from './LeftNav';
import Breadcrumb from './Breadcrumb';
import Login from './Login';
import styles from './index.less';

import menuData from '@/config/router.config';

const { Header, Content, Sider } = Layout;

export default function PrimaryLayout({ location, breadcrumb, children }) {
  if (location.pathname === '/login') {
    return children;
  }

  return <Layout>
    <Header className={styles.topNav}>
      <TopNav path={location.pathname} menuData={menuData} />
      <div className={styles.login}>
        <Login />
      </div>
    </Header>
    <Layout className="ant-layout-has-sider">
      <Sider width={200} style={{ background: '#fff' }}>
        <LeftNav path={location.pathname} menuData={menuData} />
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