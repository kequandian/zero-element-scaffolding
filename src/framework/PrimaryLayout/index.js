import React, { useContext, useMemo } from 'react';
import { Layout } from 'antd';
import Breadcrumb from './Breadcrumb';
import Login from './Login';
import styles from './index.less';

import GlobalContext from '@/framework/GlobalContext';
import menuData from '@/config/router.config';

import selectNavStyle from './utils/selectNavStyle';

const { Header, Content } = Layout;

export default function PrimaryLayout({ location, breadcrumb, children }) {
  const { style } = useContext(GlobalContext);

  const [
    TopNav, TopNavData,
    LeftNav, LeftNavData
  ] = useMemo(_ => {
    return selectNavStyle(style.nav, menuData, location.pathname);
  }, [style.nav, location.pathname]);

  if (location.pathname === '/login') {
    return children;
  }

  return <Layout>
    <Header className={styles.topNav}>
      <TopNav path={location.pathname} menuData={TopNavData} />
      <div className={styles.login}>
        <Login />
      </div>
    </Header>
    <Layout className="ant-layout-has-sider">
      <LeftNav path={location.pathname} menuData={LeftNavData} />
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb path={location.pathname} breadcrumb={breadcrumb} />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
}